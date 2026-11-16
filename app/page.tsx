import Link from "next/link";
import "./page.css";
import Hero from "@/components/Hero";
import WorkCard from "@/components/WorkCard";
import EndCta from "@/components/EndCta";
import FounderWall from "@/components/FounderWall";
import { founderCredits } from "@/lib/founder-credits";
import { studioProjects, workFacts } from "@/lib/studio-work";
import { clients, reel, founderReel, services } from "@/lib/site";
import { pageMeta, studioJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "V01 — AI-Native VFX Studio",
  description:
    "AI-native VFX for production, not prototypes. Commercials and film sequences, finished to feature-film standards.",
  path: "/",
});

export default function Home() {
  const projects = studioProjects;

  return (
    <main data-v data-page="home">
      <JsonLd data={studioJsonLd()} />
      <Hero reel={reel}>
        <section className="v-wrap v-clients" id="clients" aria-label="Clients and agencies">
          <span className="v-tag v-tag--dim">Clients &amp; Agencies</span>
          <div className="v-marquee">
            <div className="v-marquee__track">
              {[0, 1, 2, 3].map((copy) => (
                <ul
                  key={copy}
                  className="v-marquee__set"
                  aria-hidden={copy > 0 ? true : undefined}
                >
                  {clients.map((c) => (
                    <li key={c.name} className="v-marquee__item">
                      {c.logo ? (
                        <img src={c.logo} alt={c.name} style={{ height: c.h ?? 24 }} />
                      ) : (
                        <span className="v-marquee__word">{c.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
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
          <div className="v-work-grid">
            {projects.map((p, i) => {
              const facts = workFacts[p.id];
              return (
                <WorkCard
                  key={p.id}
                  href={p.href}
                  title={p.title}
                  img={p.hero_url || p.thumbnail}
                  alt={`${p.title} hero still`}
                  video={"video_url" in p ? p.video_url : undefined}
                  meta={facts ? [facts.who, facts.length, facts.fact] : [p.category]}
                  go="Case study"
                  span={3}
                  order={i % 2}
                />
              );
            })}
          </div>
          <div className="v-btns" style={{ paddingTop: 40 }}>
            <Link className="v-btn" href="/work">
              All work <span className="v-arr" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {founderCredits.length > 0 && <FounderWall credits={founderCredits} reel={founderReel} />}

      <EndCta
        title={<>Have a shot in mind?</>}
        text="Send a few lines about the project, the timeline and any references."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "mailto:hello@v01.ca", label: "hello@v01.ca", mono: true }}
      />
    </main>
  );
}
