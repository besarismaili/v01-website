import Link from "next/link";
import "./page.css";

export const metadata = {
  title: "V01 — Journal",
  description: "A running journal of what we're building, breaking, and shipping.",
};

export default function JournalPage() {
  return (
    <main data-page="journal">
      <section className="wrap page-head">
        <div className="breadcrumb"><Link href="/">V01</Link><span>/</span><span>Journal</span></div>
        <h1>Research Notes &amp; Journal.</h1>
        <p className="lede">A running log of what we're building, breaking, and shipping inside the studio lab.</p>
        <div className="page-meta">
          <div className="pm"><h5>Latest Entry</h5><p>May 06, 2026</p></div>
          <div className="pm"><h5>Entries</h5><p>24 Public Notes</p></div>
          <div className="pm"><h5>Focus</h5><p>Pipelines, Tools, Production</p></div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="timeline">
            <div className="tl"><div className="when">06 / 05 / 26</div><div className="kind">Release</div><div><h4>Stack Compositor v0.7</h4><p>Improved hair / fur matte extraction, faster temporal smoothing, and a new node-graph profiler.</p></div><div className="arr">&rarr;</div></div>
            <div className="tl"><div className="when">22 / 04 / 26</div><div className="kind">Note</div><div><h4>Atlas — Character Continuity</h4><p>Notes on training a character model that survives wardrobe and lighting changes across a 90-day shoot.</p></div><div className="arr">&rarr;</div></div>
            <div className="tl"><div className="when">11 / 04 / 26</div><div className="kind">Release</div><div><h4>Ledger Pipeline 2.0</h4><p>Full rewrite of asset versioning, with cross-project search and shot-level lineage diffs.</p></div><div className="arr">&rarr;</div></div>
            <div className="tl"><div className="when">28 / 03 / 26</div><div className="kind">Talk</div><div><h4>Cinematic AI at Scale</h4><p>Internal talk on building production-grade AI without breaking the look.</p></div><div className="arr">&rarr;</div></div>
            <div className="tl"><div className="when">14 / 03 / 26</div><div className="kind">Experiment</div><div><h4>Worldgrid — First Pass</h4><p>Procedural worldbuilding pilot for a narrative short. What worked, what didn't.</p></div><div className="arr">&rarr;</div></div>
            <div className="tl"><div className="when">28 / 02 / 26</div><div className="kind">Update</div><div><h4>Previz Engine Updates</h4><p>Refactored the core diffusion step to improve real-time latency across UE 5.5 environments.</p></div><div className="arr">&rarr;</div></div>
            <div className="tl"><div className="when">10 / 02 / 26</div><div className="kind">Note</div><div><h4>Sound Field Experiments</h4><p>Applying custom foley generative models to early animatics to feel pacing quicker.</p></div><div className="arr">&rarr;</div></div>
            <div className="tl"><div className="when">25 / 01 / 26</div><div className="kind">Release</div><div><h4>Review Loop — Annotation Tools</h4><p>Added frame-accurate drawing and timestamped voice memos inside our review suite.</p></div><div className="arr">&rarr;</div></div>
            <div className="tl"><div className="when">12 / 01 / 26</div><div className="kind">Insight</div><div><h4>The Cost of Synthetic Data</h4><p>Why we continue to invest in our own proprietary datasets rather than scraping.</p></div><div className="arr">&rarr;</div></div>
            <div className="tl"><div className="when">03 / 01 / 26</div><div className="kind">Note</div><div><h4>Year in Review: 2025</h4><p>Looking back at the tools we built, the shots we shipped, and what we learned about ML pipelines.</p></div><div className="arr">&rarr;</div></div>
        </div>
      </section>

      <section className="wrap end-cta">
        <div>
          <h2>Want to see<br/>more?</h2>
          <p>Read all of our detailed lab notes or explore our case studies to see these tools in action.</p>
          <div className="ctas">
            <Link className="btn primary" href="/lab"><span>Explore the Lab</span><span className="arr">&rarr;</span></Link>
            <Link className="btn" href="/work"><span>See the Work</span><span className="arr">&rarr;</span></Link>
          </div>
        </div>
        <div className="ph" data-label="LAB / ENGINEER DESK"><span className="ph-mid">[ STUDIO IMAGE ]</span></div>
      </section>
    </main>
  );
}
