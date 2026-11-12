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

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
