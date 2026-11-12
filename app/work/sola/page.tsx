import PageHead from "@/components/PageHead";
import Frame from "@/components/Frame";
import EndCta from "@/components/EndCta";
import Markers from "@/components/Markers";
import WorkPager from "@/components/WorkPager";
import WipeCompare from "@/components/WipeCompare";
import { END_MARKERS } from "@/lib/markers";
import { solaProject, solaReel, solaWipes } from "@/lib/sola";
import "../../case-study/[id]/page.css";
import { pageMeta } from "@/lib/seo";
import "./page.css";

export const metadata = pageMeta({
  title: "V01 — Sola",
  description: solaProject.summary,
  path: solaProject.href,
  image: solaProject.hero_url,
  imageAlt: `${solaProject.title} hero still`,
});

export default function SolaCaseStudy() {
  return (
    <main data-v data-page="case">
      <PageHead
        crumbs={[{ label: "V01", href: "/" }, { label: "Work", href: "/work" }, { label: "Sola" }]}
        title="Sola."
        lede={solaProject.summary}
        meta={
          <>
            <span>Commercial</span><span aria-hidden="true">/</span>
            <span>VFX</span><span aria-hidden="true">/</span>
            <span>{solaProject.year}</span><span aria-hidden="true">/</span>
            <strong>Campaign</strong>
          </>
        }
      />

      <section className="v-straddle" aria-label="Project reel">
        <div className="v-wrap">
          <div className="v-reel-head">
            <span className="v-tag v-tag--lime">Project reel</span>
            <span className="v-tag">{solaReel.runtime} / music</span>
          </div>
          <Frame>
            <video
              src={solaReel.src}
              poster={solaReel.poster}
              controls
              playsInline
              preload="none"
              aria-label="Sola project showreel"
            />
          </Frame>
          <p className="v-reel-note">{solaReel.note}</p>
        </div>
      </section>

      <div className="v-wrap v-case-facts">
        <dl className="v-facts v-facts--dark">
          <div><dt>Client</dt><dd>Sola</dd></div>
          <div><dt>Agency</dt><dd>Shift</dd></div>
          <div><dt>Category</dt><dd>Commercial</dd></div>
          <div><dt>Year</dt><dd>2026</dd></div>
          <div><dt>Role</dt><dd>VFX / Finishing</dd></div>
        </dl>
      </div>

      <section className="v-sec v-sec--white">
        <div className="v-wrap">
          <div className="v-tag v-tag--ink v-sec__tag" data-reveal>01 / Overview</div>
          <h2 className="v-h2 v-case-headline" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            Photographed places. Finished worlds.
          </h2>
          <div className="v-split v-case-intro">
            <p className="v-split__a v-case-lead" data-reveal>
              Shift hired VERSION ONE to finish a multi-spot campaign for Sola, the regional soda brand.
              The spots move through sport, summer, nightlife, and social — Çele Lojen, Çele Verën, Çele
              Momentin, Çele Trendin, and Sola 100.
            </p>
            <div className="v-split__a v-case-brief" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <h3 className="v-tag v-tag--ink">The brief</h3>
              <p>
                Keep the performances and the product real. Change only what the plate could not give:
                a skyline that is not there, a beach that is not there, a can that has to appear, a
                stream that has to feel live.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="v-sec v-sec--blue" aria-label="Idea">
        <Markers points={END_MARKERS} />
        <div className="v-wrap" style={{ position: "relative" }}>
          <p className="v-case-pull" data-reveal>Production plates in. Final pixels out. No prototype look.</p>
        </div>
      </section>

      <section className="v-sec">
        <div className="v-wrap">
          <div className="v-tag v-sec__tag" data-reveal>02 / Approach</div>
          <p className="v-case-approach" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            Each sequence was treated as a VFX show, not a filter pass. Environment replacements
            were locked to the photographed court, rooftop, horse, and tree. CG product and sports
            elements were tracked to the performance. Social and optical treatments sat on top of
            the live action instead of replacing it. Finishing stayed in the same discipline as
            feature compositing: edges, contact, light, and delivery.
          </p>
        </div>
      </section>

      <section className="v-sec v-sec--tight-top">
        <div className="v-wrap">
          <div className="v-case-frames-head v-sec__tag" data-reveal>
            <span className="v-tag">03 / Before / after</span>
            <span className="v-tag v-tag--lime">Drag to wipe</span>
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
        </div>
      </section>

      <section className="v-sec v-sec--white">
        <div className="v-wrap">
          <div className="v-tag v-tag--ink v-sec__tag" data-reveal>04 / Project details</div>
          <div className="v-details">
            <div className="v-detail" data-reveal>
              <span className="v-tag v-tag--ink">Format</span>
              <span className="v-detail__big">Campaign</span>
              <span>Multiple spots, one brand system</span>
            </div>
            <div className="v-detail" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <span className="v-tag v-tag--ink">Craft</span>
              <span className="v-detail__big">VFX / Finishing</span>
              <span>Environment, CG, graphics</span>
            </div>
            <div className="v-detail" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
              <span className="v-tag v-tag--ink">Contribution</span>
              <span className="v-detail__text">VERSION ONE delivered shot VFX and finishing for Shift on Sola.</span>
            </div>
            <div className="v-detail" data-reveal style={{ "--i": 3 } as React.CSSProperties}>
              <span className="v-tag v-tag--ink">Deliverables</span>
              <span className="v-detail__text">Final shot versions across the SS sequences. Selected stills.</span>
            </div>
          </div>
        </div>
      </section>

      <WorkPager currentId={solaProject.id} />

      <EndCta
        title={<>Make something worth replaying.</>}
        text="Bring the brief. We’ll shape the world, the workflow, and the finish."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "/work", label: "All work" }}
      />
    </main>
  );
}
