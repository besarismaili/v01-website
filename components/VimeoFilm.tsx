import Link from "next/link";
import type { VimeoFilm as Film } from "@/lib/vimeo-films";
import "@/app/case-study/[id]/page.css";

export default function VimeoFilm({ film }: { film: Film }) {
  return (
    <main data-page="case">
      <section className="wrap cs-head">
        <div className="breadcrumb">
          <Link href="/">V01</Link>
          <span>/</span>
          <Link href="/work">Work</Link>
          <span>/</span>
          <span>{film.title}</span>
        </div>
        <div className="cs-meta">
          <span>{film.category}</span>
          <span className="dot">·</span>
          <span>{film.year}</span>
          <span className="dot">·</span>
          <span>{film.runtime}</span>
        </div>
        <h1>{film.title}</h1>
        <p className="lede">{film.summary}</p>
        <div className="cs-creds">
          <div className="c">
            <h5>Brand</h5>
            <p>{film.brand}</p>
          </div>
          <div className="c">
            <h5>Category</h5>
            <p>{film.category}</p>
          </div>
          <div className="c">
            <h5>Year</h5>
            <p>{film.year}</p>
          </div>
          <div className="c">
            <h5>Runtime</h5>
            <p>{film.runtime}</p>
          </div>
          <div className="c">
            <h5>Role</h5>
            <p>{film.role}</p>
          </div>
        </div>
      </section>

      <section className="wrap cs-hero">
        <div className="video-frame">
          <iframe
            src={`https://player.vimeo.com/video/${film.vimeo_id}?title=0&byline=0&portrait=0`}
            title={`${film.title} film`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="source-links">
          <a className="btn" href={`https://vimeo.com/${film.vimeo_id}`} target="_blank" rel="noreferrer">
            <span>View on Vimeo</span>
            <span>↗</span>
          </a>
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
            <Link className="btn primary" href="/contact">
              <span>Start a Project</span>
              <span>→</span>
            </Link>
            <Link className="btn" href="/work">
              <span>All Work</span>
              <span>→</span>
            </Link>
          </div>
        </div>
        <img src={film.hero_url} style={{ objectPosition: film.poster_position }} alt="" />
      </section>
    </main>
  );
}
