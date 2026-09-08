import FilmCaseStudy from "@/components/FilmCaseStudy";
import { dreamProject } from "@/lib/studio-work";
import "../film-case.css";

export const metadata = {
  title: "V01 — A Dream in Your Hand",
  description: dreamProject.summary,
};

export default function DreamPage() {
  return <FilmCaseStudy project={dreamProject} />;
}
