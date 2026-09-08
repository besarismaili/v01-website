import Link from "next/link";
import type { StudioProject } from "@/lib/studio-work";

export default function FilmCaseStudy({ project }: { project: StudioProject }) {
  return (
    <main data-page="work">
      <section className="wrap cs-head">
        <div className="breadcrumb">
          <Link href="/">V01</Link>
          <span>/</span>
          <Link href="/work">Work</Link>
          <span>/</span>
          <span>{project.title}</span>
        </div>
        <div className="cs-meta">
          <span>Commercial · AI / VFX</span>
          <span className="dot">·</span>
          <span>{project.year}</span>
          <span className="dot">·</span>
          <span>{project.runtime}</span>
        </div>
        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>
        <div className="cs-creds">
          <div className="c">
            <h5>Client</h5>
            <p>{project.client}</p>
          </div>
          {project.agency && <div className="c">
            <h5>Agency</h5>
            <p>{project.agency}</p>
          </div>}
          <div className="c">
            <h5>Category</h5>
            <p>{project.category}</p>
          </div>
          <div className="c">
            <h5>Year</h5>
            <p>{project.year}</p>
          </div>
          <div className="c">
            <h5>Role</h5>
            <p>{project.role}</p>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="cs-intro">
          <div>
            <div className="label">Overview</div>
            <h2>{project.headline}</h2>
          </div>
          <div className="body">
            <p>{project.overview}</p>
            <div className="label">The Brief</div>
            <p>{project.brief}</p>
            <div className="pull">{project.pull}</div>
            <div className="label">Approach</div>
            <p>{project.approach}</p>
          </div>
        </div>
      </section>

      {project.video_url && (
        <section className="wrap cs-hero">
          <video
            className="film-hero"
            src={project.video_url}
            poster={project.hero_url}
            controls
            playsInline
            preload="metadata"
          />
        </section>
      )}

      <section className="wrap sec">
        <div className="sec-head">
          <div className="sec-title">Selected Frames</div>
          <div className="sec-title">{project.runtime}</div>
        </div>
        <div className="film-gallery">
          {project.gallery.map((g) => (
            <figure className="film-still" key={g.src}>
              <img src={g.src} alt={g.alt} />
              <figcaption>{g.caption}</figcaption>
            </figure>
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
              <div className="v">{project.runtime}</div>
              <div className="sub">Hero film</div>
            </div>
          </div>
          <div className="d">
            <span className="l">Craft</span>
            <div>
              <div className="v">{project.role}</div>
              <div className="sub">{project.agency}</div>
            </div>
          </div>
          <div className="d">
            <span className="l">Contribution</span>
            <div>
              <div className="sub">
                VERSION ONE delivered AI picture and finishing{project.agency ? ` for ${project.agency}` : ""} on {project.client}.
              </div>
            </div>
          </div>
          <div className="d">
            <span className="l">Deliverables</span>
            <div>
              <div className="sub">{project.deliverables}</div>
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
        <img src={project.hero_url} alt="" />
      </section>
    </main>
  );
}
