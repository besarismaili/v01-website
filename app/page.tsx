import Link from "next/link";
import "./page.css";
import Hero from "@/components/Hero";
import Row from "@/components/Row";
import EndCta from "@/components/EndCta";
import { founderCredits } from "@/lib/founder-credits";
import { studioProjects } from "@/lib/studio-work";
import { clients, reel } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "V01 — AI-Native VFX Studio",
  description:
    "AI-native VFX for production, not prototypes. Commercials and film sequences, finished to feature-film standards.",
  path: "/",
});

const services = [
  {
    title: "Sequence Production",
    text: "Commercials and film sequences taken from first frames to final master: generated, composited in Nuke, graded and delivered.",
    href: "/work",
    link: "See the work",
  },
  {
    title: "Feasibility Sprints",
    text: "A short test on one of your shots or scenes, so you know what AI can and can’t deliver before you commit a budget.",
    href: "/contact",
    link: "Ask about a sprint",
  },
  {
    title: "Workflow R&D",
    text: "Custom generative workflows for productions and VFX vendors that need them to fit inside an existing pipeline.",
    href: "/contact",
    link: "Get in touch",
  },
];

export default function Home() {
  const projects = studioProjects;

  return (
    <main data-v data-page="home">
      <Hero reel={reel}>
        <section className="v-wrap v-clients" aria-label="Clients and agencies">
          <span className="v-tag v-tag--dim">Clients &amp; Agencies</span>
          {clients.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </section>
      </Hero>

      <section className="v-sec v-sec--pure">
        <div className="v-wrap">
          <div className="v-tag v-sec__tag" data-reveal>01 / What we do</div>
          <div className="v-svcs">
            {services.map((s, i) => (
              <article className="v-svc" key={s.title} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <div className="v-svc__head">
                  <span className="v-svc__n">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="v-h3">{s.title}</h2>
                </div>
                <p>{s.text}</p>
                <Link className="v-link" href={s.href}>
                  {s.link} <span className="v-arr" aria-hidden="true">&rarr;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="v-sec">
        <div className="v-wrap">
          <div className="v-tag v-sec__tag" data-reveal>02 / Selected work</div>
          <div className="v-rows v-rows--lead">
            {projects.map((p, i) => (
              <Row
                key={p.id}
                n={i + 1}
                href={p.href}
                title={p.title}
                meta={p.category}
                img={p.hero_url || p.thumbnail}
                alt={`${p.title} hero still`}
                video={"video_url" in p ? p.video_url : undefined}
              />
            ))}
          </div>
          <div className="v-btns" style={{ paddingTop: 32 }}>
            <Link className="v-btn" href="/work">
              All work <span className="v-arr" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {founderCredits.length > 0 && (
        <section className="v-sec v-sec--tight-top" id="founder-credits">
          <div className="v-wrap">
            <div className="v-tag" data-reveal style={{ paddingBottom: 12 }}>03 / Founder film credits</div>
            <p className="v-founder-intro" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              Our founder has more than 15 years of feature-film VFX experience, including compositing at MPC,
              Framestore and FX3X. Our small core team runs every project and brings in specialist artists when a job
              needs them. The people who pitch the work are the people who finish it.
            </p>
            <div className="v-rows">
              {founderCredits.map((p, i) => (
                <Row
                  key={p.id}
                  n={i + 1}
                  href={`/case-study/${p.id}`}
                  title={p.title}
                  meta={`${p.role} / ${p.studio}`}
                  img={p.hero_url}
                  alt={`${p.title} film still`}
                  credit
                />
              ))}
            </div>
            <div className="v-founder-note">
              <p>These credits are our founder&rsquo;s own work in credited roles at other studios, not V01 projects.</p>
              <Link className="v-btn" href="/about">
                About the studio <span className="v-arr" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      <EndCta
        title={<>Have a shot in mind?</>}
        text="Send a few lines about the project, the timeline and any references."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "mailto:hello@v01.ca", label: "hello@v01.ca", mono: true }}
      />
    </main>
  );
}
