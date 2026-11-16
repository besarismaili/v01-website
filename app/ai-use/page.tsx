import PageHead from "@/components/PageHead";
import EndCta from "@/components/EndCta";
import { pageMeta } from "@/lib/seo";
import { aiUseRules as rules } from "@/lib/site";
import "./page.css";

export const metadata = pageMeta({
  title: "V01 — AI use and rights",
  description:
    "How VERSION ONE uses generative AI on client work: no training on client material, likeness and voice only with written consent, and who can access your files.",
  path: "/ai-use",
});

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
