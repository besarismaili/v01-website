import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { CONTACT_TO, CONTACT_FROM, SES_REGION, CONTACT_KINDS, CONTACT_LIMITS } from "@/lib/contact";

// Receives the contact form and emails it to the studio through Amazon SES.
// On the live site the AWS permissions come from the hosting role (Amplify's
// "SSR Compute role"), so no keys are stored anywhere.
//
// To try the form on your own machine without AWS access, start the dev
// server with CONTACT_DRY_RUN=1: the message is printed to the terminal
// instead of being sent.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ses = new SESv2Client({ region: SES_REGION });

// A small brake on repeated sends from one address: 5 messages per 10 minutes.
// It is kept in memory, so it resets when the server restarts.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function tooMany(ip: string): boolean {
  const now = Date.now();
  const times = (recent.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (times.length >= MAX_PER_WINDOW) {
    recent.set(ip, times);
    return true;
  }
  times.push(now);
  recent.set(ip, times);
  if (recent.size > 5000) recent.clear();
  return false;
}

// One line of text: trimmed, with line breaks and control characters removed.
function line(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim().slice(0, max);
}

const fail = (status: number, error: string) => Response.json({ ok: false, error }, { status });

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return fail(400, "The form could not be read.");
  }

  // "website" is a field people never see. Only automated form-fillers
  // complete it, so those messages are dropped while the sender is told it worked.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = line(body.name, CONTACT_LIMITS.name);
  const email = line(body.email, CONTACT_LIMITS.email);
  const company = line(body.company, CONTACT_LIMITS.company);
  const kind = CONTACT_KINDS.find((k) => k === body.kind) || "Something else";
  const message =
    typeof body.message === "string" ? body.message.replace(/\r\n/g, "\n").trim().slice(0, CONTACT_LIMITS.message) : "";

  if (!name) return fail(400, "Please add your name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail(400, "Please check your email address.");
  if (message.length < 10) return fail(400, "Please add a few lines about the project.");

  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (tooMany(ip)) return fail(429, "Too many messages in a short time. Please email us instead.");

  const subject = `Website: ${kind}, from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    `About: ${kind}`,
    "",
    message,
    "",
    "Sent from the contact form on v01.mov. Reply to this email to answer the sender.",
  ]
    .filter((l) => l !== null)
    .join("\n");

  if (process.env.CONTACT_DRY_RUN === "1") {
    console.log(`[contact form, dry run] To: ${CONTACT_TO}\nSubject: ${subject}\n\n${text}`);
    return Response.json({ ok: true });
  }

  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: CONTACT_FROM,
        Destination: { ToAddresses: [CONTACT_TO] },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: subject, Charset: "UTF-8" },
            Body: { Text: { Data: text, Charset: "UTF-8" } },
          },
        },
      }),
    );
  } catch (err) {
    console.error("[contact form] SES send failed:", err instanceof Error ? `${err.name}: ${err.message}` : err);
    return fail(502, "The message could not be sent.");
  }

  return Response.json({ ok: true });
}
