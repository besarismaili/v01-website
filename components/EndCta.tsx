import type { ReactNode } from "react";
import Link from "next/link";
import Markers from "@/components/Markers";
import { END_MARKERS } from "@/lib/markers";

type Action = { href: string; label: string; mono?: boolean };

// The blue closing section every page ends on.
export default function EndCta({
  title,
  text,
  primary,
  secondary,
}: {
  title: ReactNode;
  text: string;
  primary: Action;
  secondary?: Action;
}) {
  const isExternal = (href: string) => href.startsWith("mailto:") || href.startsWith("http");

  const button = (a: Action, cls: string) =>
    isExternal(a.href) ? (
      <a className={`v-btn ${cls}${a.mono ? " v-btn--mono" : ""}`} href={a.href}>
        {a.label}
        {!a.mono && <span className="v-arr" aria-hidden="true">&rarr;</span>}
      </a>
    ) : (
      <Link className={`v-btn ${cls}`} href={a.href}>
        {a.label} <span className="v-arr" aria-hidden="true">&rarr;</span>
      </Link>
    );

  return (
    <section className="v-end">
      <Markers points={END_MARKERS} />
      <div className="v-wrap v-end__inner">
        <div className="v-tag v-tag--lime" data-reveal>Your plate</div>
        <h2 className="v-h1" data-reveal style={{ "--i": 1 } as React.CSSProperties}>{title}</h2>
        <p data-reveal style={{ "--i": 2 } as React.CSSProperties}>{text}</p>
        <div className="v-btns" data-reveal style={{ "--i": 3 } as React.CSSProperties}>
          {button(primary, "v-btn--solid")}
          {secondary && button(secondary, "")}
        </div>
      </div>
    </section>
  );
}
