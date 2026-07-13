import { notFound } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import "./page.css";

export const dynamic = "force-dynamic";

function vimeoId(url = "") {
  return url.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1] || "";
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data } = await supabase.from("projects").select("title, summary").eq("id", id).single();
  return data ? { title: `V01 — ${data.title}`, description: data.summary || undefined } : { title: "Project Not Found" };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data: project } = await supabase.from("projects").select("*").eq("id", id).single();
  if (!project) notFound();

  const { data: nextProjects } = await supabase
    .from("projects")
    .select("id, title, category, year, client, runtime, thumbnail, hero_url")
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
    <main data-page="work">
      <section className="wrap cs-head">
        <div className="breadcrumb"><Link href="/">V01</Link><span>/</span><Link href="/work">Work</Link><span>/</span><span>{project.title}</span></div>
        <div className="cs-meta">
          <span>{study.eyebrow || (founder ? "Founder Prior Work" : project.category)}</span><span className="dot">·</span>
          <span>{project.year}</span><span className="dot">·</span><span>{project.runtime || "Film"}</span>
        </div>
        <h1>{project.title}.</h1>
        <p className="lede">{project.summary}</p>
        <div className="cs-creds">
          <div className="c"><h5>{founder ? "Role" : "Client"}</h5><p>{founder ? project.role : project.client}</p></div>
          <div className="c"><h5>{founder ? "Studio" : "Director"}</h5><p>{founder ? project.studio : project.director || "V01"}</p></div>
          <div className="c"><h5>Category</h5><p>{project.category}</p></div>
          <div className="c"><h5>Year</h5><p>{project.year}</p></div>
          <div className="c"><h5>Runtime</h5><p>{project.runtime || "—"}</p></div>
        </div>
        {founder && <div className="disclaimer">{study.disclaimer || "This credit represents work completed by V01 founder Besar Ismaili before founding V01. V01 was not engaged as a vendor on this production."}</div>}
      </section>

      <section className="wrap cs-hero">
        {video ? (
          <div className="video-frame">
            <iframe src={`https://player.vimeo.com/video/${video}?title=0&byline=0&portrait=0`} title={`${project.title} video`} allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" allowFullScreen />
          </div>
        ) : (
          <div className="ph" style={image ? { backgroundImage: `url(${image})` } : {}} data-label={!image ? `HERO FRAME — ${project.title.toUpperCase()}` : ""}>
            {!image && <span className="ph-mid">[ FILM FRAME ]</span>}
          </div>
        )}
      </section>

      <section className="wrap sec">
        <div className="cs-intro">
          <div><div className="label">Overview</div><h2>{study.headline || project.summary}</h2></div>
          <div className="body">
            <p>{study.overview || project.summary}</p>
            {study.brief && <><div className="label">The Brief</div><p>{study.brief}</p></>}
            <div className="pull">{contribution}</div>
            {study.approach && <><div className="label">Approach</div><p>{study.approach}</p></>}
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Project Details</div></div>
        <div className="deliv">
          <div className="d"><span className="l">Format</span><div><div className="v">{project.runtime || "Film"}</div><div className="sub">Vimeo master</div></div></div>
          <div className="d"><span className="l">Craft</span><div><div className="v">{project.role || project.category}</div><div className="sub">{project.studio || project.client}</div></div></div>
          <div className="d"><span className="l">Contribution</span><div><div className="sub">{contribution}</div></div></div>
          <div className="d"><span className="l">Deliverables</span><div><div className="sub">{study.deliverables || "Hero film; master; selected stills."}</div></div></div>
        </div>
        {(project.source_url || project.video_url) && <div className="source-links">
          {project.video_url && <a className="btn" href={project.video_url} target="_blank" rel="noreferrer"><span>View on Vimeo</span><span>↗</span></a>}
          {project.source_url && project.source_url !== project.video_url && <a className="btn" href={project.source_url} target="_blank" rel="noreferrer"><span>Production source</span><span>↗</span></a>}
        </div>}
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Next Work</div></div>
        <div className="next-case">
          {nextProjects?.map(np => <Link key={np.id} href={`/case-study/${np.id}`} className="nc">
            {np.hero_url || np.thumbnail ? <img src={np.hero_url || np.thumbnail} alt={np.title} /> : <div className="ph"><span className="ph-mid">[ STILL ]</span></div>}
            <div className="body"><span className="l">{np.category} · {np.year}</span><h4>{np.title}</h4><div className="meta">{np.client} · {np.runtime || "—"}</div><div className="arr"><span>View Project</span><span>→</span></div></div>
          </Link>)}
        </div>
      </section>

      <section className="wrap end-cta"><div><h2>Make something<br/>worth replaying.</h2><p>Bring the brief. We’ll shape the world, the workflow, and the finish.</p><div className="ctas"><Link className="btn primary" href="/access"><span>Start a Project</span><span>→</span></Link><Link className="btn" href="/work"><span>All Work</span><span>→</span></Link></div></div>{image ? <img src={image} alt="" /> : <div className="ph" />}</section>
    </main>
  );
}
