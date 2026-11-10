import Link from "next/link";
import { solaProject } from "@/lib/sola";
import { studioProjects } from "@/lib/studio-work";
import { founderFilms } from "@/lib/founder-work";
import "./page.css";

export const metadata = {
  title: "V01 — Work",
  description: "Commercials and campaign films made with generative tools and finished to feature-film VFX standards.",
};

export default function WorkPage() {
  const featured = solaProject;
  const projects = studioProjects.filter((p) => p.id !== featured.id);
  const years = studioProjects.map((p) => p.year);
  const yearSpan = Math.min(...years) === Math.max(...years) ? String(Math.max(...years)) : `${Math.min(...years)} – ${Math.max(...years)}`;

  return (
    <main data-page="work">
      <section className="wrap page-head">
        <div className="breadcrumb"><span>V01</span><span>/</span><span>Work</span></div>
        <h1>Selected<br />Work.</h1>
        <p className="lede">Commercials and campaign films for brands and agencies, made with generative tools and finished to feature-film VFX standards.</p>
        <div className="page-meta">
          <div className="pm"><h5>Projects</h5><p>{studioProjects.length} released</p></div>
          <div className="pm"><h5>Years</h5><p>{yearSpan}</p></div>
          <div className="pm"><h5>Focus</h5><p>AI Picture &middot; VFX Finishing</p></div>
        </div>
      </section>

      <section className="wrap">
        <div className="featured" id="featured-project">
          <img src={featured.hero_url || featured.thumbnail} style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover" }} alt={featured.title} />
          <div className="feat-meta">
            <div>
              <div className="num">Featured &middot; {featured.year}</div>
              <h2>{featured.title}</h2>
              <div className="tags">
                <span>{featured.category}</span>
                <span>&middot;</span>
                <span>{featured.runtime}</span>
              </div>
              <p>{featured.summary}</p>
            </div>
            <Link className="btn" href={featured.href}>
              <span>View Case Study</span>
              <span className="arr">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">More Work</div></div>
        <div className="work-grid">
          {projects.map((p) => (
            <article className="work-card" key={p.id}>
              <Link href={p.href} style={{ color: "inherit", textDecoration: "none" }}>
                <img src={p.hero_url || p.thumbnail} className="ph" style={{ aspectRatio: "4/3", width: "100%", objectFit: "cover", marginBottom: "16px" }} alt={p.title} />
                <div className="row">
                  <h3>{p.title}</h3>
                  <span className="yr">{p.year}</span>
                </div>
                <div className="meta">{[p.client, p.runtime].filter(Boolean).join(" · ")}</div>
                <div className="link">
                  <span>View Case Study</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Before V01</div></div>
        <p className="before-note">Earlier work by founder Besar Ismaili, made before V01. These are not V01 projects.</p>
        <div className="work-grid">
          {founderFilms.map((f) => (
            <article className="work-card" key={f.id}>
              <Link href={f.href} style={{ color: "inherit", textDecoration: "none" }}>
                <img src={f.hero_url} className="ph" style={{ aspectRatio: "4/3", width: "100%", objectFit: "cover", marginBottom: "16px" }} alt={f.title} />
                <div className="row">
                  <h3>{f.title}</h3>
                  <span className="yr">{f.year}</span>
                </div>
                <div className="meta">{[f.client, f.runtime].filter(Boolean).join(" · ")}</div>
                <div className="link">
                  <span>Watch the Film</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap end-cta">
        <div>
          <h2>Got a brief?<br />Let&rsquo;s talk.</h2>
          <p>Send a script, a board, a reference or just an idea, and we&rsquo;ll come back with a way to make it.</p>
          <div className="ctas">
            <Link className="btn primary" href="/contact"><span>Start a Project</span><span className="arr">&rarr;</span></Link>
            <Link className="btn" href="/about"><span>About the Studio</span><span className="arr">&rarr;</span></Link>
          </div>
        </div>
        <img className="media-img" src="/images/work/tsvc/hero.jpg" alt="Vice City commercial hero frame" />
      </section>
    </main>
  );
}
