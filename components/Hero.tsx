"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import Markers from "@/components/Markers";
import { HERO_MARKERS } from "@/lib/markers";

type Reel = { src: string; loop?: string; poster: string; posterAlt: string };

// Homepage hero. The reel fills the whole panel inside a thin blue border.
// On load the panel holds as a blue plate, then the reel "keys in" (CSS in
// app/page.css). A short silent loop plays behind the headline; "Play reel
// with sound" swaps in the full reel. With no reel file the poster still
// stands in and the button is not shown.
export default function Hero({ reel, children }: { reel: Reel; children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const vid = useRef<HTMLVideoElement>(null);
  const playBtn = useRef<HTMLButtonElement>(null);
  const hasReel = !!reel.src;
  const loopSrc = reel.loop || reel.src;
  const hasVideo = !!loopSrc;

  // Expanded player: sound on, controls on, Escape or Close returns to the hero.
  useEffect(() => {
    if (!open) return;
    const v = vid.current;
    const btn = playBtn.current;
    if (v) {
      // React has already swapped src to the full reel; start it with sound.
      v.muted = false;
      v.controls = true;
      if (v.currentTime > 0) v.currentTime = 0;
      const p = v.play();
      if (p) p.catch(() => {});
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      if (v) {
        v.muted = true;
        v.controls = false;
        const p = v.play();
        if (p) p.catch(() => {});
      }
      btn?.focus();
    };
  }, [open]);

  return (
    <div className="v-hero">
      <div className="v-hero__pad">
        <span className="v-hero__pin v-hero__pin--tl" aria-hidden="true" />
        <span className="v-hero__pin v-hero__pin--tr" aria-hidden="true" />
        <span className="v-hero__pin v-hero__pin--bl" aria-hidden="true" />
        <span className="v-hero__pin v-hero__pin--br" aria-hidden="true" />

        <div className={`v-hero__panel${open ? " is-open" : ""}`}>
          {hasVideo ? (
            <video
              ref={vid}
              className="v-hero__media"
              src={open ? reel.src : loopSrc}
              poster={reel.poster}
              autoPlay
              muted
              loop={!open}
              playsInline
              preload="metadata"
              onEnded={() => setOpen(false)}
              aria-label="V01 showreel"
            />
          ) : (
            <img className="v-hero__media" src={reel.poster} alt={reel.posterAlt} />
          )}
          <div className="v-hero__scrim" aria-hidden="true" />
          <Markers points={HERO_MARKERS} />

          {open && (
            <button type="button" className="v-btn v-btn--solid v-hero__close" onClick={() => setOpen(false)}>
              Close
            </button>
          )}

          <section className="v-hero__content">
            <div className="v-tag v-tag--lime" style={{ "--i": 0 } as React.CSSProperties}>
              {hasReel ? "Showreel" : "AI-Native VFX Studio"}
            </div>
            <h1 className="v-h1" style={{ "--i": 1 } as React.CSSProperties}>
              AI-native VFX for production, not prototypes.
            </h1>
            <div className="v-hero__row" style={{ "--i": 2 } as React.CSSProperties}>
              <p>
                We make commercials and film sequences with generative tools, then composite, grade and finish every
                shot to feature-film standards.
              </p>
              <div className="v-btns">
                {hasReel && (
                  <button ref={playBtn} type="button" className="v-btn v-btn--lime" onClick={() => setOpen(true)}>
                    <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
                      <path d="M6 3l15 9-15 9z" fill="currentColor" />
                    </svg>
                    Play reel with sound
                  </button>
                )}
                <Link className="v-btn v-btn--solid" href="/work">
                  View work <span className="v-arr" aria-hidden="true">&rarr;</span>
                </Link>
                <Link className="v-btn" href="/contact">
                  Start a project <span className="v-arr" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      {children}
    </div>
  );
}
