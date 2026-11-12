import PageHead from "@/components/PageHead";
import EndCta from "@/components/EndCta";
import { pageMeta } from "@/lib/seo";
import "@/app/case-study/[id]/page.css";

export const metadata = pageMeta({
  title: "V01 — Test shot",
  description:
    "Before a full job, VERSION ONE takes one of your shots to a finished result in 5 working days. The fee is quoted per shot and comes off the full job.",
  path: "/test-shot",
});

// The terms Besar set on 2026-11-12. Change them here and the page follows.
const terms = [
  { tag: "Time", big: "5 working days", text: "For one finished shot." },
  { tag: "Fee", big: "Quoted per shot", text: "You get the price before we start." },
  { tag: "If you go ahead", big: "Fee credited", text: "The test fee comes off the price of the full job." },
  { tag: "Reviews", big: "2 rounds", text: "Two rounds of your notes are included." },
];

const steps = [
  {
    title: "Send one shot",
    text: "A plate from your edit or a frame from your boards, with the brief and any references.",
  },
  { title: "We quote it", text: "You get a price for that shot. Nothing starts until you agree to it." },
  {
    title: "We make it",
    text: "The shot goes through the same pipeline as a full job, with AI and VFX working together and supervised like every shot we deliver. You give notes twice.",
  },
  {
    title: "You decide",
    text: "You judge the finished shot on your own material. If the full job goes ahead, the test fee comes off its price.",
  },
];

export default function TestShotPage() {
  return (
    <main data-v data-page="test-shot">
      <PageHead
        crumbs={[{ label: "V01", href: "/" }, { label: "Test shot" }]}
        title="One shot first."
        lede="Before you commit a budget, we take one of your own shots to a finished result. You see the quality and the control on your material, not on ours."
      />

      <section className="v-sec v-sec--white">
        <div className="v-wrap">
          <div className="v-tag v-tag--ink v-sec__tag" data-reveal>01 / The terms</div>
          <div className="v-details">
            {terms.map((t, i) => (
              <div className="v-detail" key={t.tag} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <span className="v-tag v-tag--ink">{t.tag}</span>
                <span className="v-detail__big">{t.big}</span>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v-sec v-sec--pure" aria-label="How it works">
        <div className="v-wrap">
          <div className="v-tag v-sec__tag" data-reveal>02 / How it works</div>
          <ol className="v-steps">
            {steps.map((s, i) => (
              <li className="v-step" key={s.title} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <span className="v-step__n">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="v-h3">{s.title}</h2>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <EndCta
        title={<>Have a shot in mind?</>}
        text="Send the shot, the brief and the date you need it by."
        primary={{ href: "/contact", label: "Ask for a test shot" }}
        secondary={{ href: "/work", label: "See the work" }}
      />
    </main>
  );
}
