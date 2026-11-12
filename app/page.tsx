import Link from "next/link";
import "./page.css";
import { getFounderCredits } from "@/lib/supabase";
import { studioProjects } from "@/lib/studio-work";

export default async function Home() {
  const projects = studioProjects;
  const founderCredits = await getFounderCredits();

  return (
    <main data-page="home">
      <section className="wrap hero">
        <div className="hero-left">
          <div className="eyebrow">AI-Native VFX Studio</div>
          <h1>
            <span className="lead">AI-native VFX</span>
            <span className="lead">for production,</span>
            <span className="lead">not prototypes.</span>
          </h1>
          <p className="hero-sub">
            V01 makes commercials and film sequences with generative tools, then composites, grades and finishes every shot to feature-film standards.
          </p>
          <div className="ctas">
            <Link className="btn primary" href="/work">
              <span>View Work</span><span className="arr">&rarr;</span>
            </Link>
            <Link className="btn" href="/contact">
              <span>Start a Project</span><span className="arr">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <img className="hero-img media-img" src="/images/work/sola/hero.jpg" alt="Sola commercial key visual" />
        </div>
      </section>

      <section className="wrap partners">
        <div className="eyebrow">Clients &amp; Agencies</div>
        <div className="partners-row">
          <div className="partner">SOLA</div>
          <div className="partner alt">SHIFT</div>
          <div className="partner">SIEBERT</div>
          <div className="partner alt">TOML</div>
          <div className="partner">BEIGE FLAG</div>
          <div className="partner alt">BEKI CARS</div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">What We Do</div></div>
        <div className="ww-grid">
          <article className="ww-card">
            <div className="num">01</div>
            <img className="ww-img media-img" src="/images/work/tbcb/hero.jpg" alt="Bonds, Corporate Bonds commercial hero frame" />
            <h3>Sequence Production</h3>
            <p>Commercials and film sequences taken from first frames to final master: generated, composited in Nuke, graded and delivered.</p>
            <Link className="explore" href="/work"><span>See the Work</span><span>&rarr;</span></Link>
          </article>
          <article className="ww-card">
            <div className="num">02</div>
            <img className="ww-img media-img" src="/images/work/sola/spin-after.jpg" alt="Sola basketball VFX finishing frame" />
            <h3>Feasibility Sprints</h3>
            <p>A short test on one of your shots or scenes, so you know what AI can and can&rsquo;t deliver before you commit a budget.</p>
            <Link className="explore" href="/contact"><span>Ask About a Sprint</span><span>&rarr;</span></Link>
          </article>
          <article className="ww-card">
            <div className="num">03</div>
            <img className="ww-img media-img" src="/images/work/tdbg/hero.jpg" alt="Don’t Be That Guy commercial hero frame" />
            <h3>Workflow R&amp;D</h3>
            <p>Custom generative workflows for productions and VFX vendors that need them to fit inside an existing pipeline.</p>
            <Link className="explore" href="/contact"><span>Get in Touch</span><span>&rarr;</span></Link>
          </article>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Selected Work</div></div>
        <div className="sw-grid">
          {projects.map(p => (
            <article className="sw-card" key={p.id}>
              <Link href={"href" in p && p.href ? p.href : `/case-study/${p.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                <img src={p.hero_url || p.thumbnail || "/images/work/sola/hero.jpg"} className="sw-img" style={{ aspectRatio: "4/4.6", width: "100%", objectFit: "cover", marginBottom: "14px" }} alt={p.title} />
                <h4>{p.title}</h4>
                <div className="sw-meta">{p.category}</div>
                <div className="sw-link"><span>View Case Study</span><span>&rarr;</span></div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap sec founder">
        <div className="sec-head"><div className="sec-title">Founder</div></div>
        <div className="founder-intro">
          <div>
            <h2>Feature-Film<br/>Pedigree.</h2>
          </div>
          <div>
            <p>Founder Besar Ismaili has more than 15 years of feature-film VFX experience, including compositing work at MPC, Framestore and FX3X.</p>
            <p>V01 is founder-led. Besar runs every project and brings in specialist artists when a job needs them, so the people who pitch the work are the people who finish it.</p>
          </div>
        </div>
        {founderCredits && founderCredits.length > 0 && (
          <>
            <div className="fc-grid">
              {founderCredits.map(p => (
                <article className="fc" key={p.id}>
                  <Link href={`/case-study/${p.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                    <img src={p.hero_url || p.thumbnail || "/images/work/sola/hero.jpg"} className="fc-img" style={{ aspectRatio: "4/4.6", width: "100%", objectFit: "cover", marginBottom: "14px" }} alt={p.title} />
                    <h4>{p.title}</h4>
                    <div className="fc-role">{[p.role || 'Compositor', p.studio].filter(Boolean).join(' · ')}</div>
                    <div className="fc-link"><span>Founder Credit</span><span>&rarr;</span></div>
                  </Link>
                </article>
              ))}
            </div>
            <div className="founder-note">Founder credits are Besar&rsquo;s own work in credited roles at other studios, not V01 projects.</div>
          </>
        )}
      </section>

      <section className="wrap big-cta">
        <div>
          <h2>Have a shot<br/>in mind?</h2>
          <p>Send a few lines about the project, the timeline and any references.</p>
          <div className="ctas">
            <Link className="btn primary" href="/contact"><span>Start a Project</span><span className="arr">&rarr;</span></Link>
            <a className="btn" href="mailto:hello@v01.ca"><span>hello@v01.ca</span><span className="arr">&rarr;</span></a>
          </div>
        </div>
        <img className="big-cta-img media-img" src="/images/work/tbcb/ooh-wall.jpg" alt="VERSION ONE campaign visual" />
      </section>
    </main>
  );
}
