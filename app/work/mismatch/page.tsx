import FilmCaseStudy from "@/components/FilmCaseStudy";
import { mismatchProject } from "@/lib/studio-work";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "V01 — The Perfect Mismatch",
  description: mismatchProject.summary,
  path: mismatchProject.href,
  image: mismatchProject.hero_url,
  imageAlt: `${mismatchProject.title} hero still`,
});

export default function MismatchPage() {
  return <FilmCaseStudy project={mismatchProject} />;
}
