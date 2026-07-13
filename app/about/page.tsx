import Link from "next/link";
import "./page.css";

export const metadata = {
  title: "V01 — About",
  description: "A studio for what's next. We are filmmakers who build systems.",
};

export default function AboutPage() {
  return (
    <main data-page="about">
      <section className="wrap page-head">
        <div className="breadcrumb"><span>V01</span><span>/</span><span>About</span></div>
        <h1>A studio<br/>for what's next.</h1>
        <p className="lede">V01 is an AI / VFX creative studio building cinematic work for brands, artists, and storytellers. We're filmmakers who build systems, and engineers who care about frames.</p>
        <div className="page-meta">
          <div className="pm"><h5>Founded</h5><p>2023 / Montreal</p></div>
          <div className="pm"><h5>Team</h5><p>42 across 4 disciplines</p></div>
          <div className="pm"><h5>Studios</h5><p>Montreal · Prishtina</p></div>
          <div className="pm"><h5>Working</h5><p>Worldwide</p></div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="manifesto">
          <div>
            <div className="eyebrow" style={{marginBottom:"14px"}}>Manifesto</div>
            <h2>Craft over<br/>shortcuts.</h2>
          </div>
          <div>
            <p>V01 was built on a simple idea: <strong>the systems should serve the work — not the other way around</strong>.</p>
            <p>We make commercials, films, music videos, and VFX. The AI and pipelines we build inside the studio exist to help us tell better stories, faster, with more control. They are tools. The work is the point.</p>
            <p>We hire filmmakers who care about frames and engineers who care about taste. We train on data we own or have license to. We finish to broadcast standards, every time.</p>
            <p><em>Cinematic storytelling. Visual craft. Emotional impact. Built for what's next.</em></p>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">What We Believe</div></div>
        <div className="values">
          <div className="val">
            <div className="num">01</div>
            <h3>The Frame is the Product</h3>
            <p>We're not in the business of selling tools or showing off models. The output is a finished frame, on screen, in front of an audience.</p>
          </div>
          <div className="val">
            <div className="num">02</div>
            <h3>Human Direction, Always</h3>
            <p>Directors and artists drive every decision. AI accelerates them. It does not replace taste, story, or judgment.</p>
          </div>
          <div className="val">
            <div className="num">03</div>
            <h3>Owned Data, No Shortcuts</h3>
            <p>Our models train on licensed, owned, or fully synthetic data. Provenance is a feature, not a footnote.</p>
          </div>
          <div className="val">
            <div className="num">04</div>
            <h3>Iterate in Public</h3>
            <p>We share what we learn from real productions — what shipped, what didn't, what we're still figuring out.</p>
          </div>
          <div className="val">
            <div className="num">05</div>
            <h3>Hollywood Standards</h3>
            <p>Compositing, finishing, and delivery built to the same bar feature pipelines hold themselves to.</p>
          </div>
          <div className="val">
            <div className="num">06</div>
            <h3>Long-Term Partners</h3>
            <p>We say no to fit-for-the-moment work. We build relationships with people we want to make a body of work with.</p>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Leadership</div></div>
        <div className="team">
          <div className="person">
            <div className="ph" data-label="PORTRAIT — DIRECTOR"><span className="ph-mid">[ PORTRAIT ]</span></div>
            <h4>Mara Voss</h4>
            <div className="role">Founder &middot; Director</div>
            <p className="bio">Filmmaker. Previously directed commercials and shorts at independent studios across LA and London.</p>
          </div>
          <div className="person">
            <div className="ph" data-label="PORTRAIT — VFX SUP"><span className="ph-mid">[ PORTRAIT ]</span></div>
            <h4>Idris Khoury</h4>
            <div className="role">VFX Supervisor</div>
            <p className="bio">Twenty years across feature films and broadcast. Leads compositing and finishing.</p>
          </div>
          <div className="person">
            <div className="ph" data-label="PORTRAIT — HEAD OF AI"><span className="ph-mid">[ PORTRAIT ]</span></div>
            <h4>Sora Lin</h4>
            <div className="role">Head of AI Systems</div>
            <p className="bio">ML researcher turned production engineer. Owns the lab and the data posture.</p>
          </div>
          <div className="person">
            <div className="ph" data-label="PORTRAIT — EP"><span className="ph-mid">[ PORTRAIT ]</span></div>
            <h4>Elliot Pace</h4>
            <div className="role">Executive Producer</div>
            <p className="bio">Production from sketch to delivery. Runs the studio's project flow and partnerships.</p>
          </div>
          <div className="person">
            <div className="ph" data-label="PORTRAIT — CD"><span className="ph-mid">[ PORTRAIT ]</span></div>
            <h4>June Aoki</h4>
            <div className="role">Creative Director</div>
            <p className="bio">Worldbuilding, look development, and visual identity for every campaign.</p>
          </div>
          <div className="person">
            <div className="ph" data-label="PORTRAIT — TD"><span className="ph-mid">[ PORTRAIT ]</span></div>
            <h4>Theo Marlow</h4>
            <div className="role">Pipeline TD Lead</div>
            <p className="bio">Designs the connective tissue between the creative and engineering sides of the studio.</p>
          </div>
          <div className="person">
            <div className="ph" data-label="PORTRAIT — STORY"><span className="ph-mid">[ PORTRAIT ]</span></div>
            <h4>Nadia Reyes</h4>
            <div className="role">Head of Story</div>
            <p className="bio">Treatments, scripts, and narrative development across short and long form.</p>
          </div>
          <div className="person">
            <div className="ph" data-label="PORTRAIT — OPS"><span className="ph-mid">[ PORTRAIT ]</span></div>
            <h4>Felix Quan</h4>
            <div className="role">Head of Operations</div>
            <p className="bio">Studio operations, hiring, finance, and the unglamorous things that keep work shipping.</p>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Studio History</div></div>
        <div className="history">
          <div className="hist"><div className="yr">2023</div><p className="ev">Studio founded in Montreal. First three commercial campaigns ship.</p></div>
          <div className="hist"><div className="yr">2024</div><p className="ev">Lab spun up. Atlas Models v1 enters production. Prishtina studio opens.</p></div>
          <div className="hist"><div className="yr">2025</div><p className="ev">First feature-quality VFX pass delivered. Stack Compositor goes live.</p></div>
          <div className="hist"><div className="yr">2026</div><p className="ev">Echoes of Tomorrow ships. Worldgrid research begins. SOC 2 Type II certified.</p></div>
          <div className="hist"><div className="yr">Next</div><p className="ev">Original short-form slate, in development with select partner studios.</p></div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Recognition</div></div>
        <div className="rec">
          <div className="rec-item"><div className="top"><div className="award">Cannes Lions &middot; Bronze</div><div className="yr">2026</div></div><div className="meta">Echoes of Tomorrow &middot; Brand Film</div></div>
          <div className="rec-item"><div className="top"><div className="award">Ciclope &middot; Best AI</div><div className="yr">2026</div></div><div className="meta">Carrier-9 &middot; Commercial</div></div>
          <div className="rec-item"><div className="top"><div className="award">SXSW &middot; Selected</div><div className="yr">2026</div></div><div className="meta">The Light Between &middot; Short</div></div>
          <div className="rec-item"><div className="top"><div className="award">UKMVA &middot; Best VFX</div><div className="yr">2025</div></div><div className="meta">Halflight &middot; Music Video</div></div>
          <div className="rec-item"><div className="top"><div className="award">D&amp;AD &middot; Wood Pencil</div><div className="yr">2025</div></div><div className="meta">Signal Lost &middot; Brand Film</div></div>
          <div className="rec-item"><div className="top"><div className="award">VES &middot; Nominated</div><div className="yr">2025</div></div><div className="meta">Outpost 7 &middot; VFX / Series</div></div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Press</div></div>
        <div className="press">
          <div className="item">CINEFRAME</div>
          <div className="item">FAST CO.</div>
          <div className="item">SHOTLIST</div>
          <div className="item">THE DRUM</div>
          <div className="item">LITTLE BLACK</div>
          <div className="item">FILM SCHOOL</div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Studios</div></div>
        <div className="studios">
          <div className="studio">
            <img className="media-img" src="/images/work/room-24.png" alt="V01 Montreal studio" />
            <div className="body">
              <h4>Montreal</h4>
              <div className="city">HQ &middot; Downtown</div>
              <p className="lines">Production, client collaboration, and finishing. Open by appointment.</p>
              <p className="lines">Montreal, Quebec<br/>Canada</p>
            </div>
          </div>
          <div className="studio">
            <img className="media-img" src="/images/work/echoes-of-tomorrow.png" alt="V01 Prishtina studio" />
            <div className="body">
              <h4>Prishtina</h4>
              <div className="city">Studio · Kosovo</div>
              <p className="lines">Creative development, VFX, AI systems, and production collaboration.</p>
              <p className="lines">Prishtina<br/>Kosovo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap end-cta">
        <div>
          <h2>Working<br/>worldwide.</h2>
          <p>We collaborate with directors, brands, agencies, and studios across every timezone. If you're making something ambitious, we should talk.</p>
          <div className="ctas">
            <Link className="btn primary" href="/access"><span>Start a Project</span><span className="arr">&rarr;</span></Link>
            <Link className="btn" href="/work"><span>See the Work</span><span className="arr">&rarr;</span></Link>
          </div>
        </div>
        <img className="media-img" src="/images/work/northbound.png" alt="V01 works worldwide from Montreal and Prishtina" />
      </section>
    </main>
  );
}
