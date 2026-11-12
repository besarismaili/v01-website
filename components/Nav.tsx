"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site";

export function Nav() {
  const pathname = usePathname() || "/";
  // /admin and /login keep their own chrome, so the site nav sits in the flow there.
  const legacy = pathname.startsWith("/admin") || pathname.startsWith("/login");
  const home = pathname === "/";

  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const toggle = useRef<HTMLButtonElement>(null);

  // Hide on scroll down after 80px, return on a solid bar when scrolling up.
  useEffect(() => {
    if (legacy) return;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 80);
      setHidden(y > 80 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [legacy]);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While the menu is open: lock page scroll and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const cls = [
    "v-nav",
    legacy ? "v-nav--static" : "",
    home ? "v-nav--home" : "",
    solid ? "v-nav--solid" : "",
    hidden && !open ? "v-nav--hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={cls} data-v>
        <div className="v-nav__inner">
          <Link href="/" className="v-nav__logo">V01</Link>
          <span className="v-nav__meta">VERSION ONE / AI-Native VFX Studio</span>
          <nav className="v-nav__links" aria-label="Primary">
            {navItems.map((i) => (
              <Link key={i.href} href={i.href} aria-current={pathname.startsWith(i.href) ? "page" : undefined}>
                {i.label}
              </Link>
            ))}
          </nav>
          <button
            ref={toggle}
            type="button"
            className="v-nav__toggle"
            aria-expanded={open}
            aria-controls="v-menu"
            onClick={() => setOpen(true)}
          >
            Menu
            <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22">
              <path d="M3 8h18M3 16h18" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
        </div>
      </header>

      <div id="v-menu" className={`v-menu${open ? " is-open" : ""}`} data-v aria-hidden={!open}>
        <div className="v-menu__top">
          <Link href="/" className="v-nav__logo" tabIndex={open ? 0 : -1}>V01</Link>
          <button type="button" className="v-nav__toggle" style={{ display: "flex" }} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            Close
            <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22">
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
        </div>
        <nav className="v-menu__links" aria-label="Menu">
          {navItems.map((i, n) => (
            <Link
              key={i.href}
              href={i.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              style={{ "--i": n } as React.CSSProperties}
            >
              <span>{String(n + 1).padStart(2, "0")}</span>
              <span>{i.label}</span>
            </Link>
          ))}
        </nav>
        <div className="v-menu__foot">
          <Link className="v-btn v-btn--solid" href="/contact" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            Start a project <span className="v-arr" aria-hidden="true">&rarr;</span>
          </Link>
          <div className="v-menu__info">
            <span>
              <a href="mailto:hello@v01.ca" tabIndex={open ? 0 : -1}>hello@v01.ca</a>
            </span>
            <div>
              <span>Montreal, Canada</span>
              <span>Prishtina, Kosovo</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
