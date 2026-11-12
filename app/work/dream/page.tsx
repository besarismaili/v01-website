import FilmCaseStudy from "@/components/FilmCaseStudy";
import { dreamProject } from "@/lib/studio-work";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "V01 — A Dream in Your Hand",
  description: dreamProject.summary,
  path: dreamProject.href,
  image: dreamProject.hero_url,
  imageAlt: `${dreamProject.title} hero still`,
});

export default function DreamPage() {
  return <FilmCaseStudy project={dreamProject} />;
}
