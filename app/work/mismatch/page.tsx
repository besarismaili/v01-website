import FilmCaseStudy from "@/components/FilmCaseStudy";
import { mismatchProject } from "@/lib/studio-work";

export const metadata = {
  title: "V01 — The Perfect Mismatch",
  description: mismatchProject.summary,
};

export default function MismatchPage() {
  return <FilmCaseStudy project={mismatchProject} />;
}
