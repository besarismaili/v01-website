import type { ReactNode } from "react";
import Link from "next/link";
import Markers from "@/components/Markers";
import { HEAD_MARKERS } from "@/lib/markers";

export type Crumb = { label: string; href?: string };

// The blue header block at the top of every page except the homepage.
export default function PageHead({
  crumbs,
  title,
  lede,
  meta,
  children,
}: {
  crumbs: Crumb[];
  title: ReactNode;
  lede?: ReactNode;
  // A small mono line under the lede (e.g. category, year, runtime).
  meta?: ReactNode;
  // Usually a <dl className="v-facts">, or a call to action.
  children?: ReactNode;
}) {
  return (
    <section className="v-head">
      <Markers points={HEAD_MARKERS} />
      <div className="v-wrap v-head__inner">
        <nav className="v-crumbs" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={c.label} style={{ display: "contents" }}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="v-h1">{title}</h1>
        {lede && <p className="v-lede">{lede}</p>}
        {meta && <div className="v-meta">{meta}</div>}
        {children}
      </div>
    </section>
  );
}
