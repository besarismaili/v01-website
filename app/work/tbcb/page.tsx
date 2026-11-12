import FilmCaseStudy from "@/components/FilmCaseStudy";
import { tbcbProject } from "@/lib/studio-work";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "V01 — Bonds, Corporate Bonds.",
  description: tbcbProject.summary,
  path: tbcbProject.href,
  image: tbcbProject.hero_url,
  imageAlt: `${tbcbProject.title} hero still`,
});

export default function TbcbPage() {
  return <FilmCaseStudy project={tbcbProject} />;
}
