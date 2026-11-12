"use client";

import { useEffect, useRef } from "react";
import type { MarkerPoint } from "@/lib/markers";

// Tracking markers, as on a bluescreen plate. They drift a few pixels against
// the scroll, and the one nearest the cursor "locks": it turns lime and eases
// toward the pointer. Positions are percentages of the parent section, which
// must be position:relative.
export default function Markers({ points }: { points: MarkerPoint[] }) {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = layer.current;
    const host = el?.parentElement;
    if (!el || !host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const marks = Array.from(el.querySelectorAll<HTMLElement>(".v-marker"));
    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = host.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const t = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh));
        el.style.setProperty("--drift", `${(t * 12).toFixed(1)}px`);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const release = () => {
      marks.forEach((m) => {
        m.classList.remove("is-locked");
        m.style.removeProperty("--lx");
        m.style.removeProperty("--ly");
      });
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      let best = -1;
      let bestDist = 140;
      let bx = 0;
      let by = 0;
      points.forEach((p, i) => {
        const dx = e.clientX - (r.left + (r.width * p.x) / 100 + 12);
        const dy = e.clientY - (r.top + (r.height * p.y) / 100 + 12);
        const d = Math.hypot(dx, dy);
        if (d < bestDist) {
          best = i;
          bestDist = d;
          bx = dx;
          by = dy;
        }
      });
      marks.forEach((m, i) => {
        if (i === best) {
          m.classList.add("is-locked");
          m.style.setProperty("--lx", `${Math.max(-16, Math.min(16, bx * 0.25)).toFixed(1)}px`);
          m.style.setProperty("--ly", `${Math.max(-16, Math.min(16, by * 0.25)).toFixed(1)}px`);
        } else {
          m.classList.remove("is-locked");
          m.style.removeProperty("--lx");
          m.style.removeProperty("--ly");
        }
      });
    };

    const canHover = window.matchMedia("(hover: hover)").matches;
    if (canHover) {
      host.addEventListener("pointermove", onMove);
      host.addEventListener("pointerleave", release);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", release);
    };
  }, [points]);

  return (
    <div ref={layer} className="v-markers" aria-hidden="true">
      {points.map((p, i) => (
        <svg
          key={i}
          className={`v-marker${p.lime ? " v-marker--lime" : ""}`}
          viewBox="0 0 24 24"
          style={{ "--x": `${p.x}%`, "--y": `${p.y}%` } as React.CSSProperties}
        >
          <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ))}
    </div>
  );
}
