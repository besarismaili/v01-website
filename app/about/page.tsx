import Link from "next/link";
import "./page.css";

export const metadata = {
  title: "V01 — About",
  description: "VERSION ONE is a founder-led AI-native VFX studio. AI-native VFX for production, not prototypes.",
};

export default function AboutPage() {
  return (
    <main data-page="about">
      <section className="wrap page-head">
        <div className="breadcrumb"><span>V01</span><span>/</span><span>About</span></div>
        <h1>Small studio.<br/>Feature-film VFX.</h1>
        <p className="lede">VERSION ONE (V01) is an AI-native VFX studio led by Besar Ismaili. We make commercials and film sequences with generative tools, and finish them with the care of a feature-film VFX pipeline.</p>
        <div className="page-meta">
          <div className="pm"><h5>Founder</h5><p>Besar Ismaili</p></div>
          <div className="pm"><h5>Team</h5><p>Founder-led, with specialists per project</p></div>
          <div className="pm"><h5>Based</h5><p>Montreal &middot; Prishtina</p></div>
          <div className="pm"><h5>Working</h5><p>Worldwide</p></div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="manifesto">
          <div>
            <div className="eyebrow" style={{marginBottom:"14px"}}>Approach</div>
            <h2>Production,<br/>not prototypes.</h2>
          </div>
          <div>
            <p>Getting a model to make an image is easy now. Getting a shot a director will sign off on, one that matches the shot before it and holds up in the grade, is the hard part. <strong>That is the part V01 works on.</strong></p>
            <p>We use whichever models suit the shot and switch when something better arrives. Generated frames are then composited in Nuke, edited, graded and delivered as a finished master, and a person signs off every important creative and technical step.</p>
            <p>V01 is not a prompt agency and doesn&rsquo;t make volume content. Each project is run by someone who has spent years finishing shots for feature films.</p>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="manifesto">
          <div>
            <div className="eyebrow" style={{marginBottom:"14px"}}>Founder</div>
            <h2>Besar<br/>Ismaili.</h2>
          </div>
          <div>
            <p>Besar has more than 15 years of feature-film VFX experience, including compositing work at MPC, Framestore and FX3X. V01 takes that finishing discipline into generative filmmaking.</p>
            <p>Besar leads every V01 project directly and brings in specialist artists, editors and producers when a job calls for them.</p>
            <p><em>Film credits from that period are Besar&rsquo;s own, shown on the home page as founder credits rather than V01 work.</em></p>
          </div>
        </div>
      </section>

      <section className="wrap end-cta">
        <div>
          <h2>Working<br/>worldwide.</h2>
          <p>V01 works with directors, agencies, production companies and VFX vendors in any timezone. If you have a sequence that needs to hold up, get in touch.</p>
          <div className="ctas">
            <Link className="btn primary" href="/contact"><span>Start a Project</span><span className="arr">&rarr;</span></Link>
            <Link className="btn" href="/work"><span>See the Work</span><span className="arr">&rarr;</span></Link>
          </div>
        </div>
        <img className="media-img" src="/images/work/tbcb/ooh-wall.jpg" alt="Bonds, Corporate Bonds campaign on a city wall" />
      </section>
    </main>
  );
}
