import Link from "next/link";
import PageHead from "@/components/PageHead";
import Frame from "@/components/Frame";
import EndCta from "@/components/EndCta";
import { solaProject } from "@/lib/sola";
import { studioProjects } from "@/lib/studio-work";
import { vimeoFilms } from "@/lib/vimeo-films";
import "./page.css";

export const metadata = {
  title: "V01 — Work",
  description: "Commercials, campaign and product films for brands and agencies. Recent work is made with generative tools and finished to feature-film VFX standards.",
};

// How many of the six grid columns each card takes. The first two cards are
// large (half width each), the rest sit three to a row, and a short last row is
// widened so the grid never ends on a gap.
function cardSpans(count: number): number[] {
  const spans = Array<number>(count).fill(2);
  if (count === 1) return [6];
  spans[0] = 3;
  spans[1] = 3;
  const rest = count - 2;
  if (rest % 3 === 2) {
    spans[count - 1] = 3;
    spans[count - 2] = 3;
  } else if (rest % 3 === 1) {
    if (rest >= 4) {
      for (let i = count - 4; i < count; i++) spans[i] = 3;
    } else {
      spans[count - 1] = 6;
    }
  }
  return spans;
}

export default function WorkPage() {
  const featured = solaProject;
  const years = [...studioProjects, ...vimeoFilms].map((p) => p.year);
  const yearSpan = Math.min(...years) === Math.max(...years) ? String(Math.max(...years)) : `${Math.min(...years)} – ${Math.max(...years)}`;

  const cards = [
    ...studioProjects
      .filter((p) => p.id !== featured.id)
      .map((p) => ({
        id: p.id,
        href: p.href,
        title: p.title,
        year: p.year,
        client: p.client,
        runtime: p.runtime,
        img: p.hero_url || p.thumbnail,
        position: undefined as string | undefined,
        go: "Case study",
      })),
    ...vimeoFilms.map((f) => ({
      id: f.id,
      href: f.href,
      title: f.title,
      year: f.year,
      client: f.brand,
      runtime: f.runtime,
      img: f.hero_url,
      position: f.poster_position,
      go: "Watch the film",
    })),
  ];
  const spans = cardSpans(cards.length);

  return (
    <main data-v data-page="work">
      <PageHead
        crumbs={[{ label: "V01", href: "/" }, { label: "Work" }]}
        title="Selected work."
        lede="Commercials, campaign and product films for brands and agencies. Recent work is made with generative tools and finished to feature-film VFX standards."
      >
        <dl className="v-facts">
          <div><dt>Projects</dt><dd>{studioProjects.length + vimeoFilms.length} released</dd></div>
          <div><dt>Years</dt><dd>{yearSpan}</dd></div>
          <div><dt>Focus</dt><dd>AI Picture / VFX Finishing</dd></div>
        </dl>
      </PageHead>

      <section className="v-straddle" id="featured-project">
        <div className="v-wrap">
          <Link href={featured.href} className="v-feat">
            <Frame>
              <img src={featured.hero_url || featured.thumbnail} alt={`${featured.title} commercial key visual`} data-reveal="wipe" />
              <span className="v-chip v-chip--tl">Featured / {featured.year}</span>
            </Frame>
            <div className="v-feat__text">
              <div className="v-feat__title">
                <h2 className="v-h1">{featured.title}</h2>
                <span className="v-tag">{featured.category} / {featured.runtime}</span>
              </div>
              <div className="v-feat__body">
                <p>{featured.summary}</p>
                <span className="v-link">
                  View case study <span className="v-arr" aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="v-sec v-sec--tight-top">
        <div className="v-wrap">
          <div className="v-tag v-more-tag" data-reveal>More work</div>
          <div className="v-work-grid">
            {cards.map((c, i) => (
              <Link
                key={c.id}
                href={c.href}
                className="v-card"
                data-reveal
                style={{ "--span": spans[i], "--i": i % 3 } as React.CSSProperties}
              >
                <span className="v-card__img">
                  <img src={c.img} alt={`${c.title} hero still`} loading="lazy" style={c.position ? { objectPosition: c.position } : undefined} />
                </span>
                <span className="v-card__title">{c.title}</span>
                <span className="v-card__meta">
                  <span>{c.year}</span>
                  <span>{c.client}</span>
                  <span>{c.runtime}</span>
                  <span className="v-card__go">{c.go} <span className="v-arr" aria-hidden="true">&rarr;</span></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EndCta
        title={<>Got a brief? Let&rsquo;s talk.</>}
        text="Send a script, a board, a reference or just an idea, and we’ll come back with a way to make it."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "/about", label: "About the studio" }}
      />
    </main>
  );
}
