import Link from "next/link";
import PageHead from "@/components/PageHead";
import { pageMeta } from "@/lib/seo";
import "./page.css";

export const metadata = pageMeta({
  title: "V01 — Contact",
  description: "Start a project with VERSION ONE. Email hello@v01.ca.",
  path: "/contact",
});

const ways = [
  {
    title: "Feasibility Sprint",
    text: "A short test on one of your shots or scenes. You see what AI can and can’t do for it before committing a budget.",
    who: "For: Producers / Directors / Agencies",
  },
  {
    title: "Sequence Production",
    text: "A commercial or film sequence from first frames to final master, composited, graded and delivered in the formats you need.",
    who: "For: Brands / Agencies / Producers",
  },
  {
    title: "Workflow R&D",
    text: "Custom generative workflows built to sit inside your existing pipeline, for a single project or as ongoing support.",
    who: "For: Productions / VFX Vendors",
  },
];

export default function ContactPage() {
  return (
    <main data-v data-page="contact">
      <PageHead
        crumbs={[{ label: "V01", href: "/" }, { label: "Contact" }]}
        title="Start a project."
        lede="Email a few lines about what you’re making: the project, the timeline, the deliverables and any references. We read every message."
      >
        <a className="v-mail" href="mailto:hello@v01.ca?subject=New%20project">
          hello@v01.ca <span className="v-arr" aria-hidden="true">&rarr;</span>
        </a>
        <dl className="v-facts">
          <div><dt>Email</dt><dd><a href="mailto:hello@v01.ca">hello@v01.ca</a></dd></div>
          <div><dt>Based</dt><dd>Montreal / Prishtina</dd></div>
          <div><dt>Working</dt><dd>Worldwide</dd></div>
        </dl>
      </PageHead>

      <section className="v-sec v-sec--pure">
        <div className="v-wrap">
          <div className="v-tag v-sec__tag" data-reveal>Ways to work together</div>
          <div className="v-svcs">
            {ways.map((w, i) => (
              <article className="v-svc" key={w.title} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <div className="v-svc__head">
                  <span className="v-svc__n">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="v-h3">{w.title}</h2>
                </div>
                <p>{w.text}</p>
                <div className="v-svc__for">{w.who}</div>
              </article>
            ))}
          </div>
          <p className="v-see-work" data-reveal>
            <span>Want to see what we&rsquo;ve made first?</span>
            <Link className="v-btn" href="/work">
              See the work <span className="v-arr" aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
