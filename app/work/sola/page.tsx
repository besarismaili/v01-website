import Link from "next/link";
import WipeCompare from "@/components/WipeCompare";
import { solaProject, solaWipes } from "@/lib/sola";
import "../../case-study/[id]/page.css";
import "./page.css";

export const metadata = {
  title: "V01 — Sola",
  description: solaProject.summary,
};

export default function SolaCaseStudy() {
  return (
    <main data-page="case">
      <section className="wrap cs-head">
        <div className="breadcrumb">
          <Link href="/">V01</Link>
          <span>/</span>
          <Link href="/work">Work</Link>
          <span>/</span>
          <span>Sola</span>
        </div>
        <div className="cs-meta">
          <span>Commercial · VFX</span>
          <span className="dot">·</span>
          <span>{solaProject.year}</span>
          <span className="dot">·</span>
          <span>Campaign</span>
        </div>
        <h1>Sola.</h1>
        <p className="lede">{solaProject.summary}</p>
        <div className="cs-creds">
          <div className="c">
            <h5>Client</h5>
            <p>Sola</p>
          </div>
          <div className="c">
            <h5>Agency</h5>
            <p>Shift</p>
          </div>
          <div className="c">
            <h5>Category</h5>
            <p>Commercial</p>
          </div>
          <div className="c">
            <h5>Year</h5>
            <p>2026</p>
          </div>
          <div className="c">
            <h5>Role</h5>
            <p>VFX / Finishing</p>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="cs-intro">
          <div>
            <div className="label">Overview</div>
            <h2>Photographed places. Finished worlds.</h2>
          </div>
          <div className="body">
            <p>
              Shift hired VERSION ONE to finish a multi-spot campaign for Sola, the regional soda brand.
              The spots move through sport, summer, nightlife, and social — Çele Lojen, Çele Verën, Çele
              Momentin, Çele Trendin, and Sola 100.
            </p>
            <div className="label">The Brief</div>
            <p>
              Keep the performances and the product real. Change only what the plate could not give:
              a skyline that is not there, a beach that is not there, a can that has to appear, a
              stream that has to feel live.
            </p>
            <div className="pull">Production plates in. Final pixels out. No prototype look.</div>
            <div className="label">Approach</div>
            <p>
              Each sequence was treated as a VFX show, not a filter pass. Environment replacements
              were locked to the photographed court, rooftop, horse, and tree. CG product and sports
              elements were tracked to the performance. Social and optical treatments sat on top of
              the live action instead of replacing it. Finishing stayed in the same discipline as
              feature compositing: edges, contact, light, and delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head">
          <div className="sec-title">Before / After</div>
          <div className="sec-title">Drag to wipe</div>
        </div>
        <div className="sola-wipes">
          {solaWipes.map((w) => (
            <WipeCompare
              key={w.id}
              before={w.before}
              after={w.after}
              media={"media" in w ? w.media : "image"}
              title={w.title}
              craft={w.craft}
              note={w.note}
              beforeAlt={`${w.title} plate`}
              afterAlt={`${w.title} delivery`}
            />
          ))}
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head">
          <div className="sec-title">Project Details</div>
        </div>
        <div className="deliv">
          <div className="d">
            <span className="l">Format</span>
            <div>
              <div className="v">Campaign</div>
              <div className="sub">Multiple spots, one brand system</div>
            </div>
          </div>
          <div className="d">
            <span className="l">Craft</span>
            <div>
              <div className="v">VFX / Finishing</div>
              <div className="sub">Environment, CG, graphics</div>
            </div>
          </div>
          <div className="d">
            <span className="l">Contribution</span>
            <div>
              <div className="sub">
                VERSION ONE delivered shot VFX and finishing for Shift on Sola.
              </div>
            </div>
          </div>
          <div className="d">
            <span className="l">Deliverables</span>
            <div>
              <div className="sub">Final shot versions across the SS sequences. Selected stills.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap end-cta">
        <div>
          <h2>
            Make something
            <br />
            worth replaying.
          </h2>
          <p>Bring the brief. We’ll shape the world, the workflow, and the finish.</p>
          <div className="ctas">
            <Link className="btn primary" href="/access">
              <span>Start a Project</span>
              <span>→</span>
            </Link>
            <Link className="btn" href="/work">
              <span>All Work</span>
              <span>→</span>
            </Link>
          </div>
        </div>
        <img src="/images/work/sola/western-after.jpg" alt="" />
      </section>
    </main>
  );
}
