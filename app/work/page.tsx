import Link from "next/link";
import PageHead from "@/components/PageHead";
import Frame from "@/components/Frame";
import EndCta from "@/components/EndCta";
import { solaProject } from "@/lib/sola";
import WorkCard from "@/components/WorkCard";
import { studioProjects, workFacts } from "@/lib/studio-work";
import { vimeoFilms } from "@/lib/vimeo-films";
import { pageMeta } from "@/lib/seo";
import "./page.css";

export const metadata = pageMeta({
  title: "V01 — Work",
  description: "Commercials, campaign and product films for brands and agencies, made in a VFX pipeline with AI built in and held to feature-film standards.",
  path: "/work",
  image: solaProject.hero_url,
  imageAlt: "Sola commercial key visual",
});

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
  // Recent work is the studio's current way of working; the header counts only that.
  const years = studioProjects.map((p) => p.year);
  const yearSpan = Math.min(...years) === Math.max(...years) ? String(Math.max(...years)) : `${Math.min(...years)} – ${Math.max(...years)}`;

  const recent = studioProjects.filter((p) => p.id !== featured.id);
  const spans = cardSpans(recent.length);

  return (
    <main data-v data-page="work">
      <PageHead
        crumbs={[{ label: "V01", href: "/" }, { label: "Work" }]}
        title="Selected work."
        lede="Commercials, campaign and product films for brands and agencies, made in a VFX pipeline with AI built in and held to feature-film standards."
      >
        <dl className="v-facts">
          <div><dt>Recent projects</dt><dd>{studioProjects.length}</dd></div>
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
            {recent.map((p, i) => {
              const facts = workFacts[p.id];
              return (
                <WorkCard
                  key={p.id}
                  href={p.href}
                  title={p.title}
                  img={p.hero_url || p.thumbnail}
                  alt={`${p.title} hero still`}
                  video={"video_url" in p ? p.video_url : undefined}
                  meta={facts ? [facts.who, facts.length, facts.fact] : [p.year, p.client, p.runtime]}
                  go="Case study"
                  span={spans[i]}
                  order={i % 3}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="v-sec v-sec--tight-top" aria-label="Earlier work">
        <div className="v-wrap">
          <div className="v-tag v-more-tag" data-reveal>Earlier work</div>
          <div className="v-work-grid">
            {vimeoFilms.map((f, i) => (
              <WorkCard
                key={f.id}
                href={f.href}
                title={f.title}
                img={f.hero_url}
                alt={`${f.title} hero still`}
                meta={[f.year, f.brand, f.runtime]}
                go="Watch the film"
                span={2}
                order={i}
                imgPosition={f.poster_position}
              />
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
