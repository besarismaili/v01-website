import FilmCaseStudy from "@/components/FilmCaseStudy";
import { tdbgProject } from "@/lib/studio-work";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "V01 — Don’t Be That Guy",
  description: tdbgProject.summary,
  path: tdbgProject.href,
  image: tdbgProject.hero_url,
  imageAlt: `${tdbgProject.title} hero still`,
});

export default function TdbgPage() {
  return <FilmCaseStudy project={tdbgProject} />;
}
