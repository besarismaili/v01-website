import FilmCaseStudy from "@/components/FilmCaseStudy";
import { tsvcProject } from "@/lib/studio-work";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "V01 — Vice City",
  description: tsvcProject.summary,
  path: tsvcProject.href,
  image: tsvcProject.hero_url,
  imageAlt: `${tsvcProject.title} hero still`,
});

export default function TsvcPage() {
  return <FilmCaseStudy project={tsvcProject} />;
}
