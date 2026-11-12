"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Watches every [data-reveal] element on the page and adds .is-in the first
// time it scrolls into view. The CSS in globals.css does the actual motion.
// Nothing replays when the visitor scrolls back up.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    (window as unknown as { __vReveal?: boolean }).__vReveal = true;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    // A wipe starts fully clipped, and browsers treat a fully clipped element
    // as having no visible area, so it would never count as in view. Watch its
    // parent instead and reveal the wipe when the parent scrolls in.
    const watched = new Map<Element, HTMLElement[]>();
    els.forEach((el) => {
      const watch = el.dataset.reveal === "wipe" && el.parentElement ? el.parentElement : el;
      watched.set(watch, [...(watched.get(watch) || []), el]);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (watched.get(entry.target) || []).forEach((el) => el.classList.add("is-in"));
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    watched.forEach((_, watch) => io.observe(watch));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
