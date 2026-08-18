import FilmCaseStudy from "@/components/FilmCaseStudy";
import { tsvcProject } from "@/lib/studio-work";
import "../page.css";
import "../../case-study/[id]/page.css";
import "../film-case.css";

export const metadata = {
  title: "V01 — Vice City",
  description: tsvcProject.summary,
};

export default function TsvcPage() {
  return <FilmCaseStudy project={tsvcProject} />;
}
