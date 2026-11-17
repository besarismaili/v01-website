import { SITE_URL, STUDIO } from "@/lib/seo";
import { aiUseRules, services, testShotTerms } from "@/lib/site";
import { studioProjects } from "@/lib/studio-work";
import { vimeoFilms } from "@/lib/vimeo-films";

// /llms.txt: a plain summary of the studio for AI assistants and search tools,
// in the format described at https://llmstxt.org. The services, test shot
// terms, AI use rules and work lists come from the same data as the pages, so
// they stay in step. The few studio lines written out below repeat the About
// page (team, founder, what we are not) and the footer (where we work); if
// those change, change these too.

export const dynamic = "force-static";

const url = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

// "Sola, with Shift" or just "Beki Cars".
const forWhom = (client: string, agency?: string) =>
  agency && agency !== client ? `${client}, with ${agency}` : client;

function body() {
  // Recent work and earlier films are kept apart, as on the Work page: the
  // earlier films predate the studio's AI-native way of working.
  const recent = studioProjects.map(
    (p) =>
      `- [${p.title}](${url(p.href)}): ${p.category}, ${p.year}, for ${forWhom(p.client, p.agency)}. Our part: ${p.role}. ${p.summary}`,
  );
  const earlier = vimeoFilms.map(
    (f) =>
      `- [${f.title}](${url(f.href)}): ${f.category}, ${f.year}, for ${f.brand}. Our part: ${f.role}. ${f.summary}`,
  );
  const testShot = testShotTerms.map((t) => `${t.tag}: ${t.big}. ${t.text}`).join(" ");
  const aiUse = aiUseRules.map((r) => `  - ${r.title}: ${r.text}`).join("\n");

  return `# ${STUDIO.name} (${STUDIO.shortName})

> ${STUDIO.description} ${STUDIO.tagline}

- We work from Montreal, Canada and Prishtina, Kosovo, with clients worldwide.
- A small core team leads every project and brings in specialist artists, editors and producers when a job calls for them.
- Our founder has more than 15 years of feature-film VFX experience, including compositing at MPC, Framestore and FX3X. The film and TV credits on our home page are our founder's own work in credited roles at other studios, not V01 projects.
- We are not a prompt agency and we don't make volume content.
- Test shot, before a full job, on one of the client's own shots. ${testShot}
- AI use and rights:
${aiUse}
- To start a project, email ${STUDIO.email}.

## Services

${services.map((s) => `- [${s.title}](${url(s.href)}): ${s.text}`).join("\n")}

## Studio work

${recent.join("\n")}

## Earlier work

${earlier.join("\n")}

## Studio pages

- [Work](${url("/work")}): Commercials, campaign and product films for brands and agencies, made in a VFX pipeline with AI built in and held to feature-film standards.
- [About](${url("/about")}): Who we are, our approach and how a job runs: brief, test shot, production, delivery.
- [Test shot](${url("/test-shot")}): How a test on one of the client's own shots works before a full job.
- [AI use and rights](${url("/ai-use")}): How we use generative AI on client work and what happens to the material clients send us.
- [Contact](${url("/contact")}): Start a project by email at ${STUDIO.email}.

## Optional

- [Privacy](${url("/privacy")}): What the website records when you visit and how to change that choice.
- [Sitemap](${url("/sitemap.xml")}): Every public page on the site.
`;
}

export function GET() {
  return new Response(body(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
