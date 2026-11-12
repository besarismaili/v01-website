import PageHead from "@/components/PageHead";
import EndCta from "@/components/EndCta";
import { pageMeta } from "@/lib/seo";
import "./page.css";

export const metadata = pageMeta({
  title: "V01 — AI use and rights",
  description:
    "How VERSION ONE uses generative AI on client work: no training on client material, likeness and voice only with written consent, and who can access your files.",
  path: "/ai-use",
});

// Each rule is one of Besar's answers of 2026-11-12. Ownership on delivery is
// not on this page yet: it waits for his answer and a lawyer's read.
const rules = [
  {
    title: "How we use AI",
    text: "Generative AI is built into our VFX pipeline. A person directs every shot and signs it off. Each case study on this site says what was photographed, what was AI-generated and what the VFX work covered.",
  },
  {
    title: "Training",
    text: "We do not use client material to train AI models.",
  },
  {
    title: "Likeness and voice",
    text: "We use a real person’s likeness or voice only with their written consent.",
  },
  {
    title: "Your files",
    text: "We archive a project’s files after delivery. If you would rather we delete them, tell us and we will.",
  },
  {
    title: "Access",
    text: "A project’s files are open to the client and to the people at VERSION ONE working on that job.",
  },
];

export default function AiUsePage() {
  return (
    <main data-v data-page="ai-use">
      <PageHead
        crumbs={[{ label: "V01", href: "/" }, { label: "AI use and rights" }]}
        title="AI use and rights."
        lede="How we use generative AI on client work, and what happens to the material you send us."
      />

      <section className="v-sec v-sec--white">
        <div className="v-wrap">
          <dl className="v-rules">
            {rules.map((r, i) => (
              <div className="v-rule" key={r.title} data-reveal style={{ "--i": i % 3 } as React.CSSProperties}>
                <dt className="v-h3">{r.title}</dt>
                <dd>{r.text}</dd>
              </div>
            ))}
          </dl>
          <p className="v-rules__note" data-reveal>
            Questions about a specific project? Write to <a href="mailto:hello@v01.ca">hello@v01.ca</a>.
          </p>
        </div>
      </section>

      <EndCta
        title={<>Have a shot in mind?</>}
        text="Send a few lines about the project, the timeline and any references."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "/test-shot", label: "How the test shot works" }}
      />
    </main>
  );
}
