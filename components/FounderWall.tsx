"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { FounderCredit } from "@/lib/founder-credits";

type Reel = { loop: string; poster?: string };

// Homepage section for the founder's feature-film credits: a slow, endless
// wall of film posters set edge to edge, so the films are recognised at a
// glance. A poster's title, role, studio and year appear over it on hover, on
// keyboard focus, or on a tap (a second tap, or a tap elsewhere, hides them
// again). With a reel
// loop set (lib/site.ts) a band of that footage plays silently above the
// posters, behind the section's label and intro.
//
// The loop is only downloaded once the section is close to the screen, pauses
// when it scrolls away, and is skipped for visitors who ask for reduced motion.
export default function FounderWall({ credits, reel }: { credits: FounderCredit[]; reel: Reel }) {
  const root = useRef<HTMLElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  // The poster whose details were opened by a tap or click, if any.
  const [open, setOpen] = useState<string | null>(null);
  const hasLoop = !!reel.loop;

  // A tap or click anywhere outside the posters closes the open one.
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (!(e.target as Element).closest?.(".v-poster")) setOpen(null);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  useEffect(() => {
    const el = root.current;
    if (!hasLoop || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        const inView = entries[0].isIntersecting;
        if (inView) setNear(true);
        const v = vid.current;
        if (!v) return;
        if (inView) {
          const p = v.play();
          if (p) p.catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: "300px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hasLoop]);

  // One row for a short list, two rows drifting in opposite directions for a long one.
  const half = Math.ceil(credits.length / 2);
  const rows = credits.length >= 12 ? [credits.slice(0, half), credits.slice(half)] : [credits];

  return (
    <section
      ref={root}
      className={`v-sec v-wall${hasLoop ? " v-wall--video" : " v-sec--tight-top"}${rows.length > 1 ? " v-wall--rows2" : ""}`}
      id="founder-credits"
      aria-label="Founder film credits"
    >
      {/* The stage: with a loop it is a band of footage with the label and
          intro over its lower edge; without one it is just the text. */}
      <div className="v-wall__stage">
        {hasLoop &&
          (near ? (
            <video
              ref={vid}
              className="v-wall__media"
              src={reel.loop}
              poster={reel.poster || undefined}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          ) : (
            reel.poster && <img className="v-wall__media" src={reel.poster} alt="" loading="lazy" />
          ))}
        {hasLoop && <div className="v-wall__scrim" aria-hidden="true" />}

        <div className="v-wrap">
          <div className="v-wall__label" data-reveal>
            <span className="v-tag">03 / Founder film credits</span>
            <span className="v-credit">Founder credits</span>
          </div>
          <p className="v-founder-intro" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            Our founder has more than 15 years of feature-film VFX experience, including compositing at MPC,
            Framestore and FX3X. Our small core team runs every project and brings in specialist artists when a job
            needs them. The people who pitch the work are the people who finish it.
          </p>
        </div>
      </div>

      {rows.map((row, r) => (
        <div
          className={`v-marquee v-marquee--posters${r % 2 ? " v-marquee--rev" : ""}${open?.startsWith(`${r}-`) ? " is-held" : ""}`}
          key={r}
        >
          {/* Four copies of the row, shifted by one copy's width, make the loop seamless. */}
          <div className="v-marquee__track" style={{ animationDuration: `${Math.max(row.length, 4) * 8}s` }}>
            {[0, 1, 2, 3].map((copy) => (
              <ul key={copy} className="v-marquee__set" aria-hidden={copy > 0 ? true : undefined}>
                {row.map((c) => {
                  const key = `${r}-${copy}-${c.id}`;
                  return (
                    <li key={c.id} className={`v-poster${open === key ? " is-open" : ""}`}>
                      <button
                        type="button"
                        className="v-poster__btn"
                        tabIndex={copy === 0 ? 0 : -1}
                        onClick={() => setOpen(open === key ? null : key)}
                      >
                        <img src={c.poster} alt={copy === 0 ? `${c.title} poster` : ""} loading="lazy" />
                        <span className="v-poster__info">
                          <span className="v-poster__title">{c.title}</span>
                          <span className="v-poster__meta">
                            {[c.role, c.studio, c.kind, c.year].filter(Boolean).map((m) => (
                              <span key={m}>{m}</span>
                            ))}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      ))}

      <div className="v-wrap">
        <div className="v-founder-note">
          <p>These credits are our founder&rsquo;s own work in credited roles at other studios, not V01 projects.</p>
          <Link className="v-btn" href="/about">
            About the studio <span className="v-arr" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
