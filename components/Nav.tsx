"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  const navItems = [
    { k: "work", l: "Work", h: "/work" },
    { k: "about", l: "About", h: "/about" },
    { k: "contact", l: "Contact", h: "/contact" },
  ];

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <div className="logo">
          <Link href="/">V01</Link>
        </div>
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((i) => {
            const isActive = pathname?.startsWith(i.h);
            return (
              <Link key={i.k} href={i.h} className={isActive ? "active" : ""}>
                {i.l}
              </Link>
            );
          })}
        </nav>
        <div className="nav-meta">
          VERSION ONE<br />AI / VFX STUDIO
        </div>
      </div>
    </header>
  );
}
