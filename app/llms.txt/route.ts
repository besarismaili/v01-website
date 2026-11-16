import { SITE_URL, STUDIO } from "@/lib/seo";
import { services } from "@/lib/site";
import { studioProjects } from "@/lib/studio-work";
import { vimeoFilms } from "@/lib/vimeo-films";

// /llms.txt: a plain summary of the studio for AI assistants and search tools,
// in the format described at https://llmstxt.org. The work list is built from
// the same data as the Work page, so a new project shows up here on its own.
// The studio lines below repeat what the About, Test shot and AI use pages
// say; if those pages change, change these lines too.

export const dynamic = "force-static";

const url = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

// "Sola, with Shift" or just "Beki Cars".
const forWhom = (client: string, agency?: string) =>
  agency && agency !== client ? `${client}, with ${agency}` : client;

function body() {
  const work = [
    ...studioProjects.map(
      (p) =>
        `- [${p.title}](${url(p.href)}): ${p.category}, ${p.year}, for ${forWhom(p.client, p.agency)}. Our part: ${p.role}. ${p.summary}`,
    ),
    ...vimeoFilms.map(
      (f) =>
        `- [${f.title}](${url(f.href)}): ${f.category}, ${f.year}, for ${f.brand}. Our part: ${f.role}. ${f.summary}`,
    ),
  ];

  return `# ${STUDIO.name} (${STUDIO.shortName})

> ${STUDIO.description} ${STUDIO.tagline}

- We work from Montreal, Canada and Prishtina, Kosovo, with clients worldwide.
- A small core team leads every project and brings in specialist artists, editors and producers when a job calls for them.
- Our founder has more than 15 years of feature-film VFX experience, including compositing at MPC, Framestore and FX3X. Those film credits are founder credits, not V01 studio work.
- We use whichever AI models suit the shot. Generated frames are composited in Nuke, edited, graded and delivered as a finished master, and a person signs off every important creative and technical step.
- Before a full job, we take one of the client's own shots to a finished result in 5 working days. The fee is quoted per shot and comes off the full job.
- We do not use client material to train AI models, and we use a real person's likeness or voice only with their written consent.
- We are not a prompt agency and we don't make volume content.
- To start a project, email ${STUDIO.email}.

## Services

${services.map((s) => `- [${s.title}](${url(s.href)}): ${s.text}`).join("\n")}

## Studio work

${work.join("\n")}

## Studio pages

- [About](${url("/about")}): Who we are, our approach and how a job runs: brief, test shot, production, delivery.
- [Test shot](${url("/test-shot")}): One of your shots finished in 5 working days before a full job, with the fee credited if the job goes ahead.
- [AI use and rights](${url("/ai-use")}): How we use generative AI on client work, consent for likeness and voice, and who can access your files.
- [Contact](${url("/contact")}): Start a project by email at ${STUDIO.email}.

## Optional

- [Sitemap](${url("/sitemap.xml")}): Every public page on the site.
`;
}

export function GET() {
  return new Response(body(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
