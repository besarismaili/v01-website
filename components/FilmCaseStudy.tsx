import PageHead from "@/components/PageHead";
import Frame from "@/components/Frame";
import EndCta from "@/components/EndCta";
import Markers from "@/components/Markers";
import WorkPager from "@/components/WorkPager";
import Breakdown from "@/components/Breakdown";
import { END_MARKERS } from "@/lib/markers";
import type { StudioProject } from "@/lib/studio-work";
import "@/app/case-study/[id]/page.css";

export default function FilmCaseStudy({ project }: { project: StudioProject }) {
  return (
    <main data-v data-page="case">
      <PageHead
        crumbs={[{ label: "V01", href: "/" }, { label: "Work", href: "/work" }, { label: project.title }]}
        title={project.title}
        lede={project.summary}
        meta={
          <>
            <span>Commercial</span><span aria-hidden="true">/</span>
            <span>AI / VFX</span><span aria-hidden="true">/</span>
            <span>{project.year}</span><span aria-hidden="true">/</span>
            <strong>{project.runtime}</strong>
          </>
        }
      />

      <section className="v-straddle" aria-label="Film">
        <div className="v-wrap">
          <figure className="v-case-film">
            <Frame>
              {project.video_url ? (
                <video src={project.video_url} poster={project.hero_url} controls playsInline preload="metadata" />
              ) : (
                <img src={project.hero_url} alt={project.gallery[0]?.alt || project.title} data-reveal="wipe" />
              )}
            </Frame>
            {project.gallery[0] && <figcaption className="v-cap">{project.gallery[0].caption}</figcaption>}
          </figure>
        </div>
      </section>

      <div className="v-wrap v-case-facts">
        <dl className="v-facts v-facts--dark">
          <div><dt>Client</dt><dd>{project.client}</dd></div>
          {project.agency && <div><dt>Agency</dt><dd>{project.agency}</dd></div>}
          <div><dt>Category</dt><dd>{project.category}</dd></div>
          <div><dt>Year</dt><dd>{project.year}</dd></div>
          <div><dt>Role</dt><dd>{project.role}</dd></div>
        </dl>
      </div>

      <section className="v-sec v-sec--white">
        <div className="v-wrap">
          <div className="v-tag v-tag--ink v-sec__tag" data-reveal>01 / Overview</div>
          <h2 className="v-h2 v-case-headline" data-reveal style={{ "--i": 1 } as React.CSSProperties}>{project.headline}</h2>
          <div className="v-split v-case-intro">
            <p className="v-split__a v-case-lead" data-reveal>{project.overview}</p>
            <div className="v-split__a v-case-brief" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <h3 className="v-tag v-tag--ink">The brief</h3>
              <p>{project.brief}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="v-sec v-sec--blue" aria-label="Idea">
        <Markers points={END_MARKERS} />
        <div className="v-wrap" style={{ position: "relative" }}>
          <p className="v-case-pull" data-reveal>{project.pull}</p>
        </div>
      </section>

      <section className="v-sec">
        <div className="v-wrap">
          <div className="v-tag v-sec__tag" data-reveal>02 / Approach</div>
          <p className="v-case-approach" data-reveal style={{ "--i": 1 } as React.CSSProperties}>{project.approach}</p>
          <Breakdown lines={project.breakdown} />
        </div>
      </section>

      <section className="v-sec v-sec--tight-top">
        <div className="v-wrap">
          <div className="v-case-frames-head v-sec__tag" data-reveal>
            <span className="v-tag">03 / Selected frames</span>
            <span className="v-tag">{project.runtime}</span>
          </div>
          <div className="v-case-frames">
            {project.gallery.map((g, i) => (
              <figure key={g.src} data-reveal style={{ "--i": i % 3 } as React.CSSProperties}>
                <img src={g.src} alt={g.alt} loading="lazy" />
                <figcaption>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span>{g.caption}</span>
                </figcaption>
              </figure>
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
              <span className="v-detail__big">{project.runtime}</span>
              <span>Hero film</span>
            </div>
            <div className="v-detail" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <span className="v-tag v-tag--ink">Craft</span>
              <span className="v-detail__big">{project.role}</span>
              {project.agency && <span>{project.agency}</span>}
            </div>
            <div className="v-detail" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
              <span className="v-tag v-tag--ink">Contribution</span>
              <span className="v-detail__text">
                VERSION ONE delivered AI picture and finishing{project.agency ? ` for ${project.agency}` : ""} on {project.client}.
              </span>
            </div>
            <div className="v-detail" data-reveal style={{ "--i": 3 } as React.CSSProperties}>
              <span className="v-tag v-tag--ink">Deliverables</span>
              <span className="v-detail__text">{project.deliverables}</span>
            </div>
          </div>
        </div>
      </section>

      <WorkPager currentId={project.id} />

      <EndCta
        title={<>Make something worth replaying.</>}
        text="Bring the brief. We’ll shape the world, the workflow, and the finish."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "/work", label: "All work" }}
      />
    </main>
  );
}
