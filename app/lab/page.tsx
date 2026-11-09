import Link from "next/link";
import "./page.css";

export const metadata = {
  title: "V01 — Lab",
  description: "An internal R&D environment where we design the AI models, pipelines, and review systems.",
};

export default function LabPage() {
  return (
    <main data-page="lab">
      <section className="wrap page-head">
        <div className="breadcrumb"><span>V01</span><span>/</span><span>Lab</span></div>
        <h1>The Systems<br/>Lab.</h1>
        <p className="lede">An internal R&amp;D environment where we design the AI models, pipelines, and review systems that power V01's creative work. Not a product. An engine.</p>
        <div className="page-meta">
          <div className="pm"><h5>Active Tools</h5><p>14 in production</p></div>
          <div className="pm"><h5>In Research</h5><p>06 experiments</p></div>
          <div className="pm"><h5>Datasets</h5><p>04 curated &middot; proprietary</p></div>
          <div className="pm"><h5>Status</h5><p>Continuously deployed</p></div>
        </div>
      </section>

      <section className="wrap">
        <div className="lab-hero">
          <img className="media-img" src="/images/work/sola/western-after.jpg" alt="V01 systems lab and visual reference environment" />
          <div className="stat">
            <div className="stat-grid">
              <div><div className="stat-num">14</div><div className="stat-label">Active Tools</div></div>
              <div><div className="stat-num">06</div><div className="stat-label">In Research</div></div>
              <div><div className="stat-num">04</div><div className="stat-label">Datasets</div></div>
              <div><div className="stat-num">21</div><div className="stat-label">Engineers</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head">
          <div className="sec-title">In-House Tools</div>
          <div className="sec-title">14 Active</div>
        </div>
        <div className="tools">
          <div className="tool">
            <div className="status"><span className="dot"></span>Live</div>
            <div className="num">01</div>
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18"/></svg>
            <h3>Previz Engine</h3>
            <p>Real-time AI previsualization for shot design, blocking, and look development. Built on top of Unreal + custom diffusion stacks.</p>
            <div className="tags"><span className="tag">Realtime</span><span className="tag">UE 5.5</span><span className="tag">Diffusion</span></div>
          </div>
          <div className="tool">
            <div className="status"><span className="dot"></span>Live</div>
            <div className="num">02</div>
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="6" width="18" height="3"/><rect x="3" y="11" width="18" height="3"/><rect x="3" y="16" width="18" height="3"/></svg>
            <h3>Ledger Pipeline</h3>
            <p>End-to-end shot tracking and asset versioning across previz, on-set, VFX, and finishing. Single source of truth for every project.</p>
            <div className="tags"><span className="tag">Production</span><span className="tag">Versioning</span></div>
          </div>
          <div className="tool">
            <div className="status beta"><span className="dot"></span>Beta</div>
            <div className="num">03</div>
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M5 7l7 5 7-5M5 12l7 5 7-5M5 17l7 5 7-5"/></svg>
            <h3>Stack Compositor</h3>
            <p>Node-based compositor with AI-assisted matte extraction, cleanup, and look matching. Plays nicely with Nuke.</p>
            <div className="tags"><span className="tag">Compositing</span><span className="tag">Cleanup</span></div>
          </div>
          <div className="tool">
            <div className="status"><span className="dot"></span>Live</div>
            <div className="num">04</div>
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>
            <h3>Atlas Models</h3>
            <p>A library of trained character, environment, and texture models — all licensed, owned, or fully synthetic. No web-scraped data.</p>
            <div className="tags"><span className="tag">Licensed</span><span className="tag">Owned</span><span className="tag">Synthetic</span></div>
          </div>
          <div className="tool">
            <div className="status"><span className="dot"></span>Live</div>
            <div className="num">05</div>
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 6l9-4 9 4-9 4-9-4zM3 12l9 4 9-4M3 18l9 4 9-4"/></svg>
            <h3>Render Mesh</h3>
            <p>Distributed render and inference fabric across cloud + on-prem. Cost-aware scheduling, per-shot.</p>
            <div className="tags"><span className="tag">Hybrid</span><span className="tag">GPU</span></div>
          </div>
          <div className="tool">
            <div className="status beta"><span className="dot"></span>Beta</div>
            <div className="num">06</div>
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="5" y="3" width="14" height="18"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>
            <h3>Review Loop</h3>
            <p>Frame-accurate review with timecoded notes, annotation, and AI summarization for fast turnarounds.</p>
            <div className="tags"><span className="tag">Annotation</span><span className="tag">Sync</span></div>
          </div>
          <div className="tool">
            <div className="status research"><span className="dot"></span>Research</div>
            <div className="num">07</div>
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><ellipse cx="12" cy="12" rx="10" ry="4"/><circle cx="12" cy="12" r="3"/></svg>
            <h3>Worldgrid</h3>
            <p>Procedural worldbuilding for narrative continuity — characters, environments, and props that stay consistent across shots.</p>
            <div className="tags"><span className="tag">Continuity</span><span className="tag">R&amp;D</span></div>
          </div>
          <div className="tool">
            <div className="status"><span className="dot"></span>Live</div>
            <div className="num">08</div>
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="6" width="13" height="12" rx="1"/><path d="M16 10l5-3v10l-5-3z"/></svg>
            <h3>Live Capture</h3>
            <p>On-set tooling for virtual production — camera tracking, real-time AI lookdev, and instant playback.</p>
            <div className="tags"><span className="tag">On-Set</span><span className="tag">Realtime</span></div>
          </div>
          <div className="tool">
            <div className="status research"><span className="dot"></span>Research</div>
            <div className="num">09</div>
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15"/></svg>
            <h3>Sound Field</h3>
            <p>Generative ambience, foley assistance, and AI-aided spotting — supervised by human sound designers.</p>
            <div className="tags"><span className="tag">Audio</span><span className="tag">R&amp;D</span></div>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="research-notes">
          <div>
            <h2>Research<br/>Notes.</h2>
            <p className="lede">A running journal of what we're building, breaking, and shipping inside the lab.</p>
            <Link className="explore-lab" href="/journal"><span>Read All Notes</span><span>&rarr;</span></Link>
          </div>
          <div className="timeline">
            <div className="tl"><div className="when">06 / 05 / 26</div><div className="kind">Release</div><div><h4>Stack Compositor v0.7</h4><p>Improved hair / fur matte extraction, faster temporal smoothing, and a new node-graph profiler.</p></div><div className="arr">&rarr;</div></div>
            <div className="tl"><div className="when">22 / 04 / 26</div><div className="kind">Note</div><div><h4>Atlas — Character Continuity</h4><p>Notes on training a character model that survives wardrobe and lighting changes across a 90-day shoot.</p></div><div className="arr">&rarr;</div></div>
            <div className="tl"><div className="when">11 / 04 / 26</div><div className="kind">Release</div><div><h4>Ledger Pipeline 2.0</h4><p>Full rewrite of asset versioning, with cross-project search and shot-level lineage diffs.</p></div><div className="arr">&rarr;</div></div>
            <div className="tl"><div className="when">28 / 03 / 26</div><div className="kind">Talk</div><div><h4>Cinematic AI at Scale</h4><p>Internal talk on building production-grade AI without breaking the look.</p></div><div className="arr">&rarr;</div></div>
            <div className="tl"><div className="when">14 / 03 / 26</div><div className="kind">Experiment</div><div><h4>Worldgrid — First Pass</h4><p>Procedural worldbuilding pilot for a narrative short. What worked, what didn't.</p></div><div className="arr">&rarr;</div></div>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Lab Principles</div></div>
        <div className="princ">
          <div className="p"><div className="num">01</div><h4>Craft First</h4><p>The system serves the work. If a tool doesn't make the final frame better, it doesn't ship.</p></div>
          <div className="p"><div className="num">02</div><h4>Owned Data</h4><p>Models are trained on licensed, owned, or fully synthetic data. No web-scraped shortcuts.</p></div>
          <div className="p"><div className="num">03</div><h4>Human-Led</h4><p>Directors and artists drive every decision. AI is collaborator, never author.</p></div>
          <div className="p"><div className="num">04</div><h4>Ship to Learn</h4><p>Tools live on real productions before they're called done. Theory is for slides.</p></div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="wide-feature">
          <img className="media-img" src="/images/work/tsvc/still-08.jpg" alt="V01 creative technology development frame" />
          <div className="body">
            <div className="eyebrow" style={{marginBottom:"14px"}}>Inside the Lab</div>
            <h2>Built by people<br/>who ship film.</h2>
            <p>The lab is staffed by VFX supervisors, ML engineers, technical directors, and pipeline TDs who've spent careers shipping features and series.</p>
            <p>We hire generalists with taste — and pair them with specialists who can take a tool from sketch to shot.</p>
            <Link className="btn" href="/about" style={{marginTop:"14px"}}><span>Meet the Team</span><span className="arr">&rarr;</span></Link>
          </div>
        </div>
      </section>

      <section className="wrap end-cta">
        <div>
          <h2>Want a tour<br/>of the lab?</h2>
          <p>Selective partner program for studios and brands who want a deeper look at how we build. Limited slots per quarter.</p>
          <div className="ctas">
            <Link className="btn primary" href="/access"><span>Request Access</span><span className="arr">&rarr;</span></Link>
            <Link className="btn" href="/work"><span>See the Work</span><span className="arr">&rarr;</span></Link>
          </div>
        </div>
        <img className="media-img" src="/images/work/tdbg/empty-pool.jpg" alt="V01 systems lab concept frame" />
      </section>
    </main>
  );
}
