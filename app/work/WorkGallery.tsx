"use client";

import Link from "next/link";
import { useState } from "react";
import "./page.css";

type Project = any; // We can use proper type from Supabase later

export default function WorkGallery({
  allProjects,
  featured,
  counts,
}: {
  allProjects: Project[];
  featured: Project | null;
  counts: Record<string, number>;
}) {
  const [filter, setFilter] = useState("All");

  const v01Work = allProjects.filter((p) => p.credit_type !== "Founder Prior Work");
  const founderWork = allProjects.filter((p) => p.credit_type === "Founder Prior Work");

  const cats = [
    { num: "01", label: "Commercials", key: "Commercial", filter: "Commercials", image: "/images/work/carrier-9.png", copy: "Character-led campaigns, product films, and AI-native spots." },
    { num: "02", label: "Films / Shorts", key: "Short Film", filter: "Films", image: "/images/work/the-light-between.png", copy: "Narrative work built around atmosphere, performance, and world." },
    { num: "03", label: "Music Videos", key: "Music Video", filter: "Music Videos", image: "/images/work/halflight.png", copy: "Performance worlds, visual identities, and rhythm-first storytelling." },
    { num: "04", label: "VFX / Post", key: "VFX / Post", filter: "VFX / Post", image: "/images/work/outpost-7.png", copy: "Feature compositing, design, cleanup, integration, and final finish." },
  ];
  const brandCount = counts["Brand Film"] || 0;

  let displayProjects = v01Work;
  let displayFeatured = featured;
  let secTitle = "All Projects";

  if (filter === "All") {
    // defaults
  } else if (filter === "Founder Credits") {
    displayFeatured = null;
    displayProjects = founderWork;
    secTitle = "Founder Film Credits";
  } else if (/^\d{4}$/.test(filter)) {
    displayFeatured = null;
    displayProjects = v01Work.filter((p) => p.year === parseInt(filter));
    secTitle = `${filter} Projects`;
  } else {
    displayFeatured = null;
    const catMap: Record<string, string> = {
      Commercials: "Commercial",
      Films: "Short Film",
      "Music Videos": "Music Video",
      "VFX / Post": "VFX / Post",
    };
    const cat = catMap[filter] || filter;
    displayProjects = v01Work.filter((p) => p.category === cat);
    secTitle = filter;
  }

  // Remove featured from the grid if it's being displayed at the top
  const gridProjects = displayFeatured
    ? displayProjects.filter((p) => p.id !== displayFeatured?.id)
    : displayProjects;

  return (
    <>
      <section className="wrap page-head">
        <div className="breadcrumb">
          <span>V01</span>
          <span>/</span>
          <span>Work</span>
        </div>
        <h1>
          Selected<br />
          Work.
        </h1>
        <p className="lede">
          A portfolio of cinematic commercials, films, music videos, and VFX work — built at the intersection of AI-native craft and Hollywood-level finishing.
        </p>
        <div className="page-meta">
          <div className="pm">
            <h5>Total Projects</h5>
            <p>{v01Work.length} / Released</p>
          </div>
          <div className="pm">
            <h5>Categories</h5>
            <p>Commercials &middot; Films &middot; Music &middot; VFX</p>
          </div>
          <div className="pm">
            <h5>Recognition</h5>
            <p>21 awards &middot; 8 festivals</p>
          </div>
          <div className="pm">
            <h5>Active Region</h5>
            <p>Montreal / Prishtina / Worldwide</p>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="filters">
          {[
            "All",
            "Commercials",
            "Films",
            "Music Videos",
            "VFX / Post",
            "Founder Credits",
            "2026",
            "2025",
            "2024",
          ].map((f) => (
            <button
              key={f}
              className={`filter ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="wrap">
        <div className="featured" id="featured-project" style={{ display: displayFeatured ? "" : "none" }}>
          {displayFeatured && (
            <>
              <img src={displayFeatured.hero_url || displayFeatured.thumbnail || "/images/work/echoes-of-tomorrow.png"} style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover" }} alt={displayFeatured.title} />
              <div className="feat-meta">
                <div>
                  <div className="num">Featured &middot; {displayFeatured.year}</div>
                  <h2>{displayFeatured.title}</h2>
                  <div className="tags">
                    <span>{displayFeatured.category}</span>
                    <span>&middot;</span>
                    <span>{displayFeatured.runtime}</span>
                  </div>
                  <p>{displayFeatured.summary || ""}</p>
                </div>
                <Link className="btn" href={displayFeatured.href || `/case-study/${displayFeatured.id}`}>
                  <span>View Case Study</span>
                  <span className="arr">&rarr;</span>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head">
          <div className="sec-title">{secTitle}</div>
          <div className="sec-title">Sort: Recent &darr;</div>
        </div>
        <div className="work-grid" id="work-grid">
          {gridProjects.map((p) => {
            const isFC = p.credit_type === "Founder Prior Work";
            const meta = isFC ? `${p.role || "Compositor"} · ${p.studio || ""}` : `${p.category} · ${p.runtime || "—"}`;
            const linkLabel = isFC ? "View Credit" : "View Case Study";
            return (
              <article className="work-card" key={p.id}>
                <Link href={p.href || `/case-study/${p.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                  <img src={p.hero_url || p.thumbnail || "/images/work/echoes-of-tomorrow.png"} className="ph" style={{ aspectRatio: "4/3", width: "100%", objectFit: "cover", marginBottom: "16px" }} alt={p.title} />
                  <div className="row">
                    <h3>{p.title}</h3>
                    <span className="yr">{p.year}</span>
                  </div>
                  <div className="meta">{meta}</div>
                  <div className="link">
                    <span>{linkLabel}</span>
                    <span>&rarr;</span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="wrap">
        <div className="cat-strip" id="cat-strip">
          {cats.map((c) => {
            let count = counts[c.key] || 0;
            if (c.key === "Commercial") count += brandCount;
            return (
              <button className="cat" key={c.key} onClick={() => { setFilter(c.filter); window.scrollTo({ top: 480, behavior: "smooth" }); }}>
                <img src={c.image} alt={`${c.label} category`} />
                <div className="num">{c.num}</div>
                <h4>{c.label}</h4>
                <p>{c.copy}</p>
                <div className="count">{String(count).padStart(2, "0")} projects</div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="wrap end-cta">
        <div>
          <h2>
            Got a brief?<br />
            Let's talk.
          </h2>
          <p>Send us a creative direction, a script, or just a feeling. We'll come back with a way to make it.</p>
          <div className="ctas">
            <Link className="btn primary" href="/access">
              <span>Start a Project</span>
              <span className="arr">&rarr;</span>
            </Link>
            <Link className="btn" href="/lab">
              <span>See the Lab</span>
              <span className="arr">&rarr;</span>
            </Link>
          </div>
        </div>
        <img className="media-img" src="/images/work/room-24.png" alt="V01 studio reel frame" />
      </section>
    </>
  );
}
