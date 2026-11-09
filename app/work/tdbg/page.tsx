import FilmCaseStudy from "@/components/FilmCaseStudy";
import { tdbgProject } from "@/lib/studio-work";

export const metadata = {
  title: "V01 — Don’t Be That Guy",
  description: tdbgProject.summary,
};

export default function TdbgPage() {
  return <FilmCaseStudy project={tdbgProject} />;
}
