import { notFound } from "next/navigation";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Frame from "@/components/Frame";
import EndCta from "@/components/EndCta";
import Markers from "@/components/Markers";
import { END_MARKERS } from "@/lib/markers";
import { pageMeta } from "@/lib/seo";
import {
  founderCredits,
  getFounderCredit,
  FOUNDER_CREDIT_EYEBROW,
  FOUNDER_CREDIT_DISCLAIMER,
} from "@/lib/founder-credits";
import "./page.css";

// One page per founder credit, built ahead of time from lib/founder-credits.
// Any other address under /case-study is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return founderCredits.map((c) => ({ id: c.id }));
}

function vimeoId(url = "") {
  return url.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1] || "";
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const credit = getFounderCredit(id);
  if (!credit) return { title: "V01 — Page Not Found" };
  // No film artwork in the preview card: it is another studio's picture.
  return pageMeta({
    title: `V01 — ${credit.title} (founder credit)`,
    description: credit.summary,
    path: `/case-study/${credit.id}`,
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getFounderCredit(id);
  if (!project) notFound();

  // The two credits that follow this one, wrapping round at the end of the list.
  const at = founderCredits.indexOf(project);
  const nextProjects = [1, 2].map((step) => founderCredits[(at + step) % founderCredits.length]);

  const video = vimeoId(project.video_url);

  return (
    <main data-v data-page="case">
      <PageHead
        crumbs={[{ label: "V01", href: "/" }, { label: "Founder credits", href: "/#founder-credits" }, { label: project.title }]}
        title={<>{project.title}.</>}
        lede={project.summary}
        meta={
          <>
            <span>{FOUNDER_CREDIT_EYEBROW}</span><span aria-hidden="true">/</span>
            <span>{project.year}</span><span aria-hidden="true">/</span>
            <strong>{project.runtime}</strong>
          </>
        }
      >
        <div className="v-case-disclaimer">
          <span className="v-credit">Founder credit</span>
          <span>{FOUNDER_CREDIT_DISCLAIMER}</span>
        </div>
      </PageHead>

      <section className="v-straddle" aria-label={video ? "Film" : "Film frame"}>
        <div className="v-wrap">
          <Frame>
            {video ? (
              <iframe
                src={`https://player.vimeo.com/video/${video}?title=0&byline=0&portrait=0`}
                title={`${project.title} video`}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
              />
            ) : (
              <img src={project.hero_url} alt={`${project.title} film frame`} data-reveal="wipe" />
            )}
            <span className="v-chip v-chip--tl">Founder credit</span>
          </Frame>
        </div>
      </section>

      <div className="v-wrap v-case-facts">
        <dl className="v-facts v-facts--dark">
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Studio</dt><dd>{project.studio}</dd></div>
          <div><dt>Category</dt><dd>{project.category}</dd></div>
          <div><dt>Year</dt><dd>{project.year}</dd></div>
          <div><dt>Runtime</dt><dd>{project.runtime}</dd></div>
        </dl>
      </div>

      <section className="v-sec v-sec--white">
        <div className="v-wrap">
          <div className="v-tag v-tag--ink v-sec__tag" data-reveal>01 / Overview</div>
          <h2 className="v-h2 v-case-headline" data-reveal style={{ "--i": 1 } as React.CSSProperties}>{project.headline}</h2>
          <div className="v-split v-case-intro">
            <p className="v-split__a v-case-lead" data-reveal>{project.overview}</p>
          </div>
        </div>
      </section>

      <section className="v-sec v-sec--blue" aria-label="Contribution">
        <Markers points={END_MARKERS} />
        <div className="v-wrap" style={{ position: "relative" }}>
          <p className="v-case-pull" data-reveal>{project.contribution}</p>
        </div>
      </section>

      <section className="v-sec v-sec--white">
        <div className="v-wrap">
          <div className="v-tag v-tag--ink v-sec__tag" data-reveal>Credit details</div>
          <div className="v-details">
            <div className="v-detail" data-reveal>
              <span className="v-tag v-tag--ink">Reel</span>
              <span className="v-detail__big">{project.runtime}</span>
              <span>On Vimeo</span>
            </div>
            <div className="v-detail" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <span className="v-tag v-tag--ink">Craft</span>
              <span className="v-detail__big">{project.role}</span>
              <span>{project.studio}</span>
            </div>
            <div className="v-detail" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
              <span className="v-tag v-tag--ink">Contribution</span>
              <span className="v-detail__text">{project.contribution}</span>
            </div>
          </div>
          <div className="v-case-source">
            <a className="v-btn v-btn--ink" href={project.video_url} target="_blank" rel="noreferrer">
              View on Vimeo <span className="v-arr" aria-hidden="true">&#8599;</span>
            </a>
            {project.source_url !== project.video_url && (
              <a className="v-btn v-btn--ink" href={project.source_url} target="_blank" rel="noreferrer">
                Production source <span className="v-arr" aria-hidden="true">&#8599;</span>
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="v-sec">
        <div className="v-wrap">
          <div className="v-tag v-sec__tag" data-reveal>More founder credits</div>
          <div className="v-next-grid">
            {nextProjects.map((np, i) => (
              <Link key={np.id} href={`/case-study/${np.id}`} className="v-card" data-reveal style={{ "--i": i } as React.CSSProperties}>
                <span className="v-card__img">
                  <img src={np.hero_url} alt={`${np.title} film still`} loading="lazy" />
                </span>
                <span className="v-card__title">{np.title}</span>
                <span className="v-card__meta">
                  <span>Founder credit</span>
                  <span>{np.year}</span>
                  <span>{np.studio}</span>
                  <span className="v-card__go">View credit <span className="v-arr" aria-hidden="true">&rarr;</span></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EndCta
        title={<>Make something worth replaying.</>}
        text="Bring the brief. We’ll shape the world, the workflow, and the finish."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "/work", label: "All work" }}
      />
    </main>
  );
}
