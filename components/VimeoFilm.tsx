import PageHead from "@/components/PageHead";
import Frame from "@/components/Frame";
import EndCta from "@/components/EndCta";
import type { VimeoFilm as Film } from "@/lib/vimeo-films";
import "@/app/case-study/[id]/page.css";

export default function VimeoFilm({ film }: { film: Film }) {
  return (
    <main data-v data-page="case">
      <PageHead
        crumbs={[{ label: "V01", href: "/" }, { label: "Work", href: "/work" }, { label: film.title }]}
        title={film.title}
        lede={film.summary}
        meta={
          <>
            <span>{film.category}</span><span aria-hidden="true">/</span>
            <span>{film.year}</span><span aria-hidden="true">/</span>
            <strong>{film.runtime}</strong>
          </>
        }
      />

      <section className="v-straddle" aria-label="Film">
        <div className="v-wrap">
          <Frame>
            <iframe
              src={`https://player.vimeo.com/video/${film.vimeo_id}?title=0&byline=0&portrait=0`}
              title={`${film.title} film`}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </Frame>
        </div>
      </section>

      <div className="v-wrap v-case-facts">
        <dl className="v-facts v-facts--dark">
          <div><dt>Brand</dt><dd>{film.brand}</dd></div>
          <div><dt>Category</dt><dd>{film.category}</dd></div>
          <div><dt>Year</dt><dd>{film.year}</dd></div>
          <div><dt>Runtime</dt><dd>{film.runtime}</dd></div>
          <div><dt>Role</dt><dd>{film.role}</dd></div>
        </dl>
        <div className="v-case-source">
          <a className="v-btn" href={`https://vimeo.com/${film.vimeo_id}`} target="_blank" rel="noreferrer">
            View on Vimeo <span className="v-arr" aria-hidden="true">&#8599;</span>
          </a>
        </div>
      </div>

      <EndCta
        title={<>Make something worth replaying.</>}
        text="Bring the brief. We’ll shape the world, the workflow, and the finish."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "/work", label: "All work" }}
      />
    </main>
  );
}
