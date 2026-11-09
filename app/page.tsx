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
          <div className="eyebrow">AI / VFX Creative Studio</div>
          <h1>
            <span className="lead">High-End AI / VFX</span>
            <span className="lead">Commercials.</span>
            <span className="lead">Films. Music Videos.</span>
          </h1>
          <p className="hero-sub">
            V01 creates cinematic work at the intersection of{" "}<br />
            AI, filmmaking craft, and Hollywood-level VFX.{" "}<br />
            Our internal systems and AI-native workflows{" "}<br />
            exist to serve the work — not the other way around.
          </p>
          <div className="ctas">
            <Link className="btn primary" href="/work">
              <span>View Work</span><span className="arr">&rarr;</span>
            </Link>
            <Link className="btn" href="/access">
              <span>Start a Project</span><span className="arr">&rarr;</span>
            </Link>
          </div>
          <div className="hero-tags">
            <span>Cinematic Storytelling.</span>
            <span>Visual Craft.</span>
            <span>Emotional Impact.</span>
          </div>
        </div>
        <div className="hero-right">
          <img className="hero-img media-img" src="/images/work/sola/hero.jpg" alt="Sola commercial key visual" />
        </div>
      </section>

      <section className="wrap partners">
        <div className="eyebrow">Trusted By Visionary Partners</div>
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
            <h3>Commercials / Brand Films</h3>
            <p>Cinematic campaigns and brand stories, built for culture, crafted to perform, and designed to leave a lasting mark.</p>
            <Link className="explore" href="/work"><span>Explore</span><span>&rarr;</span></Link>
          </article>
          <article className="ww-card">
            <div className="num">02</div>
            <img className="ww-img media-img" src="/images/work/tsvc/hero.jpg" alt="Vice City commercial hero frame" />
            <h3>Films / Short Films</h3>
            <p>Original stories, proof-of-concepts, and narrative worlds developed with cinematic precision.</p>
            <Link className="explore" href="/work"><span>Explore</span><span>&rarr;</span></Link>
          </article>
          <article className="ww-card">
            <div className="num">03</div>
            <img className="ww-img media-img" src="/images/work/tdbg/hero.jpg" alt="Don’t Be That Guy commercial hero frame" />
            <h3>Stylized Motion / Campaign</h3>
            <p>Stylized, character-driven visuals, performance worlds, and dynamic visual campaigns.</p>
            <Link className="explore" href="/work"><span>Explore</span><span>&rarr;</span></Link>
          </article>
          <article className="ww-card">
            <div className="num">04</div>
            <img className="ww-img media-img" src="/images/work/sola/spin-after.jpg" alt="Sola basketball VFX finishing frame" />
            <h3>VFX / Post-Production</h3>
            <p>Hollywood-level compositing, cleanup, finishing, enhancement, and AI-assisted post workflows.</p>
            <Link className="explore" href="/work"><span>Explore</span><span>&rarr;</span></Link>
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

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Why V01</div></div>
        <div className="why-grid">
          <div className="why-card"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15"/></svg><h4>Hollywood-Level VFX</h4><p>Feature-quality visual effects, compositing, and finishing built to high cinematic standards.</p></div>
          <div className="why-card"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M4 8h16M4 12h16M4 16h10"/><circle cx="20" cy="16" r="1.4"/></svg><h4>AI-Native Workflows</h4><p>Proprietary pipelines that accelerate ideation, previsualization, production, and iteration.</p></div>
          <div className="why-card"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18"/></svg><h4>Cinematic Storytelling</h4><p>Directors, writers, and designers who understand emotion, tension, rhythm, and atmosphere.</p></div>
          <div className="why-card"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><ellipse cx="12" cy="12" rx="10" ry="4"/><circle cx="12" cy="12" r="3"/></svg><h4>Original Worldbuilding</h4><p>From characters to entire universes — imagined, built, and staged with depth and detail.</p></div>
          <div className="why-card"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="6" width="18" height="3"/><rect x="3" y="11" width="18" height="3"/><rect x="3" y="16" width="18" height="3"/></svg><h4>In-House Systems Advantage</h4><p>Custom tools, datasets, and workflows that improve consistency, control quality, and scale creative output.</p></div>
          <div className="why-card"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M5 7l7 5 7-5M5 12l7 5 7-5M5 17l7 5 7-5"/></svg><h4>Fast Iteration Without Compromise</h4><p>Move from idea to final with structured feedback loops, clear reviews, and scalable execution.</p></div>
        </div>
      </section>

      {founderCredits && founderCredits.length > 0 && (
        <section className="wrap sec founder">
          <div className="sec-head"><div className="sec-title">Built on Feature-Film VFX Craft</div></div>
          <div className="founder-intro">
            <div>
              <h2>Feature-Film<br/>Pedigree.</h2>
            </div>
            <div>
              <p>Before V01, founder Besar Ismaili contributed as a compositor on major studio productions at leading VFX houses including MPC, Framestore, and FX3X.</p>
              <p>That discipline now shapes how V01 approaches AI: not as a shortcut, but as a production language guided by cinematic taste, compositing craft, and final-frame quality.</p>
            </div>
          </div>
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
          <div className="founder-note">Founder credits represent prior work completed through credited studio roles before V01.</div>
        </section>
      )}

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">How We Work</div></div>
        <div className="hw-grid">
          <div className="hw-card"><div className="num">01</div><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15"/></svg><h4>Concept</h4><p>Big idea, creative direction, visual exploration.</p></div>
          <div className="hw-card"><div className="num">02</div><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="5" y="3" width="14" height="18"/><path d="M8 8h8M8 12h8M8 16h5"/></svg><h4>Development</h4><p>Story, boards, worldbuilding, look development, AI previsuals.</p></div>
          <div className="hw-card"><div className="num">03</div><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg><h4>Previz &amp; Plan</h4><p>Shot design, production strategy, technical approach.</p></div>
          <div className="hw-card"><div className="num">04</div><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="6" width="13" height="12" rx="1"/><path d="M16 10l5-3v10l-5-3z"/></svg><h4>Production</h4><p>On-set, virtual, AI, hybrid, or fully synthetic production.</p></div>
          <div className="hw-card"><div className="num">05</div><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 6l9-4 9 4-9 4-9-4zM3 12l9 4 9-4M3 18l9 4 9-4"/></svg><h4>VFX / Post</h4><p>Simulation, compositing, color, sound, cleanup, finishing.</p></div>
          <div className="hw-card"><div className="num">06</div><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg><h4>Delivery</h4><p>Final master in any format. Ready for campaign, broadcast, web, or festival.</p></div>
        </div>
      </section>

      <section className="wrap sec" id="lab">
        <div className="lab">
          <div>
            <h2>The Systems Lab</h2>
            <p>Our in-house systems are the engine behind the work — not the product.</p>
            <p>We build because it helps us make better work.</p>
            <ul>
              <li>Proprietary AI models &amp; datasets</li>
              <li>Custom pipelines &amp; automation</li>
              <li>Real-time collaboration tools</li>
              <li>Secure, scalable render infrastructure</li>
              <li>Review &amp; iteration systems</li>
              <li>Workflow frameworks for production</li>
            </ul>
            <Link className="explore-lab" href="/lab"><span>Explore the Lab</span><span>&rarr;</span></Link>
          </div>
          <img className="lab-img media-img" src="/images/work/sola/western-after.jpg" alt="V01 systems lab visual" />
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Who It's For</div></div>
        <div className="who-grid">
          <div className="who-card"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="9" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg><h4>Brands &amp; Agencies</h4><p>Campaigns, brand films, commercials, product launches, and cinematic visual content.</p></div>
          <div className="who-card"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M4 12a8 8 0 0116 0v4a2 2 0 01-2 2h-2v-6h4M4 12v4a2 2 0 002 2h2v-6H4"/></svg><h4>Artists &amp; Musicians</h4><p>Music videos, visual identities, performance worlds, and stylized motion pieces.</p></div>
          <div className="who-card"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="6" width="18" height="3"/><rect x="3" y="11" width="18" height="3"/><rect x="3" y="16" width="18" height="3"/></svg><h4>Studios &amp; Streamers</h4><p>Film, series, originals, post-production, AI-assisted development, and VFX support.</p></div>
          <div className="who-card"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="9"/><path d="M9 9l6 3-6 3z"/></svg><h4>Directors &amp; Creators</h4><p>A creative and technical partner for ambitious ideas that need craft, speed, and execution.</p></div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Common Questions</div></div>
        <div className="faq-grid">
          <div className="faq-item"><span>What types of projects do you take on?</span><span className="plus">+</span></div>
          <div className="faq-item"><span>Do you offer VFX or post as a standalone service?</span><span className="plus">+</span></div>
          <div className="faq-item"><span>Do you handle full production?</span><span className="plus">+</span></div>
          <div className="faq-item"><span>Do you build custom workflows for a project?</span><span className="plus">+</span></div>
          <div className="faq-item"><span>Can you work with our agency or production team?</span><span className="plus">+</span></div>
          <div className="faq-item"><span>Where are you based and do you work globally?</span><span className="plus">+</span></div>
        </div>
      </section>

      <section className="wrap big-cta">
        <div>
          <h2>Let's Build<br/>What's Next.</h2>
          <p>Have a project in mind? Let's talk.</p>
          <div className="ctas">
            <Link className="btn primary" href="/access"><span>Start a Project</span><span className="arr">&rarr;</span></Link>
            <Link className="btn" href="/access"><span>Request Access</span><span className="arr">&rarr;</span></Link>
          </div>
        </div>
        <img className="big-cta-img media-img" src="/images/work/tbcb/ooh-wall.jpg" alt="VERSION ONE campaign visual" />
      </section>
    </main>
  );
}
