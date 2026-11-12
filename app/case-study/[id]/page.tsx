import { notFound } from "next/navigation";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Frame from "@/components/Frame";
import EndCta from "@/components/EndCta";
import Markers from "@/components/Markers";
import { END_MARKERS } from "@/lib/markers";
import { supabase } from "@/lib/supabase";
import "./page.css";

export const dynamic = "force-dynamic";

function vimeoId(url = "") {
  return url.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1] || "";
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data } = await supabase.from("projects").select("title, summary").eq("id", id).single();
  return data ? { title: `V01 — ${data.title}`, description: data.summary || undefined } : { title: "V01 — Page Not Found" };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data: project } = await supabase.from("projects").select("*").eq("id", id).single();
  if (!project) notFound();

  const { data: nextProjects } = await supabase
    .from("projects")
    .select("id, title, category, year, client, runtime, thumbnail, hero_url, credit_type")
    .eq("status", "Published")
    .neq("id", id)
    .order("sort_order", { ascending: true })
    .limit(2);

  const founder = project.credit_type === "Founder Prior Work";
  const study = project.case_study || {};
  const video = vimeoId(project.video_url);
  const image = project.hero_url || project.thumbnail;
  const contribution = study.contribution || (founder
    ? `${project.role || "Compositor"} work completed as part of the ${project.studio || "production"} team.`
    : `Direction and finishing by ${project.director || "V01"}.`);

  return (
    <main data-v data-page="case">
      <PageHead
        crumbs={[{ label: "V01", href: "/" }, { label: "Work", href: "/work" }, { label: project.title }]}
        title={<>{project.title}.</>}
        lede={project.summary}
        meta={
          <>
            <span>{study.eyebrow || (founder ? "Founder Prior Work" : project.category)}</span><span aria-hidden="true">/</span>
            <span>{project.year}</span><span aria-hidden="true">/</span>
            <strong>{project.runtime || "Film"}</strong>
          </>
        }
      >
        {founder && (
          <div className="v-case-disclaimer">
            <span className="v-credit">Founder credit</span>
            <span>{study.disclaimer || "This credit is our founder’s own work at another studio. V01 was not engaged as a vendor on this production."}</span>
          </div>
        )}
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
            ) : image ? (
              <img src={image} alt={`${project.title} film frame`} data-reveal="wipe" />
            ) : null}
            {founder && <span className="v-chip v-chip--tl">Founder credit</span>}
          </Frame>
        </div>
      </section>

      <div className="v-wrap v-case-facts">
        <dl className="v-facts v-facts--dark">
          <div><dt>{founder ? "Role" : "Client"}</dt><dd>{founder ? project.role : project.client}</dd></div>
          <div><dt>{founder ? "Studio" : "Director"}</dt><dd>{founder ? project.studio : project.director || "V01"}</dd></div>
          <div><dt>Category</dt><dd>{project.category}</dd></div>
          <div><dt>Year</dt><dd>{project.year}</dd></div>
          <div><dt>Runtime</dt><dd>{project.runtime || "—"}</dd></div>
        </dl>
      </div>

      <section className="v-sec v-sec--white">
        <div className="v-wrap">
          <div className="v-tag v-tag--ink v-sec__tag" data-reveal>01 / Overview</div>
          <h2 className="v-h2 v-case-headline" data-reveal style={{ "--i": 1 } as React.CSSProperties}>{study.headline || project.summary}</h2>
          <div className="v-split v-case-intro">
            <p className="v-split__a v-case-lead" data-reveal>{study.overview || project.summary}</p>
            {study.brief && (
              <div className="v-split__a v-case-brief" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
                <h3 className="v-tag v-tag--ink">The brief</h3>
                <p>{study.brief}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="v-sec v-sec--blue" aria-label="Contribution">
        <Markers points={END_MARKERS} />
        <div className="v-wrap" style={{ position: "relative" }}>
          <p className="v-case-pull" data-reveal>{contribution}</p>
        </div>
      </section>

      {study.approach && (
        <section className="v-sec">
          <div className="v-wrap">
            <div className="v-tag v-sec__tag" data-reveal>02 / Approach</div>
            <p className="v-case-approach" data-reveal style={{ "--i": 1 } as React.CSSProperties}>{study.approach}</p>
          </div>
        </section>
      )}

      <section className="v-sec v-sec--white">
        <div className="v-wrap">
          <div className="v-tag v-tag--ink v-sec__tag" data-reveal>Project details</div>
          <div className="v-details">
            <div className="v-detail" data-reveal>
              <span className="v-tag v-tag--ink">Format</span>
              <span className="v-detail__big">{project.runtime || "Film"}</span>
              <span>Vimeo master</span>
            </div>
            <div className="v-detail" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <span className="v-tag v-tag--ink">Craft</span>
              <span className="v-detail__big">{project.role || project.category}</span>
              <span>{project.studio || project.client}</span>
            </div>
            <div className="v-detail" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
              <span className="v-tag v-tag--ink">Contribution</span>
              <span className="v-detail__text">{contribution}</span>
            </div>
            <div className="v-detail" data-reveal style={{ "--i": 3 } as React.CSSProperties}>
              <span className="v-tag v-tag--ink">Deliverables</span>
              <span className="v-detail__text">{study.deliverables || "Hero film; master; selected stills."}</span>
            </div>
          </div>
          {(project.source_url || project.video_url) && (
            <div className="v-case-source">
              {project.video_url && (
                <a className="v-btn v-btn--ink" href={project.video_url} target="_blank" rel="noreferrer">
                  View on Vimeo <span className="v-arr" aria-hidden="true">&#8599;</span>
                </a>
              )}
              {project.source_url && project.source_url !== project.video_url && (
                <a className="v-btn v-btn--ink" href={project.source_url} target="_blank" rel="noreferrer">
                  Production source <span className="v-arr" aria-hidden="true">&#8599;</span>
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {nextProjects && nextProjects.length > 0 && (
        <section className="v-sec">
          <div className="v-wrap">
            <div className="v-tag v-sec__tag" data-reveal>Next work</div>
            <div className="v-next-grid">
              {nextProjects.map((np, i) => (
                <Link key={np.id} href={`/case-study/${np.id}`} className="v-card" data-reveal style={{ "--i": i } as React.CSSProperties}>
                  <span className="v-card__img">
                    {(np.hero_url || np.thumbnail) && <img src={np.hero_url || np.thumbnail} alt={`${np.title} still`} loading="lazy" />}
                  </span>
                  <span className="v-card__title">{np.title}</span>
                  <span className="v-card__meta">
                    <span>{np.credit_type === "Founder Prior Work" ? "Founder credit" : np.category}</span>
                    <span>{np.year}</span>
                    {np.client && <span>{np.client}</span>}
                    <span className="v-card__go">View project <span className="v-arr" aria-hidden="true">&rarr;</span></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <EndCta
        title={<>Make something worth replaying.</>}
        text="Bring the brief. We’ll shape the world, the workflow, and the finish."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "/work", label: "All work" }}
      />
    </main>
  );
}
