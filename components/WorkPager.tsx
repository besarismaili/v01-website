import Link from "next/link";
import { studioProjects } from "@/lib/studio-work";

// Previous / next links between the studio's case studies, in the same order
// as the work list. Wraps around at both ends.
export default function WorkPager({ currentId }: { currentId: string }) {
  const list = studioProjects;
  const i = list.findIndex((p) => p.id === currentId);
  if (i === -1 || list.length < 2) return null;
  const prev = list[(i - 1 + list.length) % list.length];
  const next = list[(i + 1) % list.length];

  return (
    <nav className="v-pager" aria-label="More work">
      <Link href={prev.href}>
        <span className="v-tag"><span aria-hidden="true">&larr; </span>Previous</span>
        <span className="v-pager__title">{prev.title}</span>
      </Link>
      <Link href={next.href}>
        <span className="v-tag">Next<span aria-hidden="true"> &rarr;</span></span>
        <span className="v-pager__title">{next.title}</span>
      </Link>
    </nav>
  );
}
