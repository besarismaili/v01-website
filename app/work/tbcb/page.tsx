import FilmCaseStudy from "@/components/FilmCaseStudy";
import { tbcbProject } from "@/lib/studio-work";

export const metadata = {
  title: "V01 — Bonds, Corporate Bonds.",
  description: tbcbProject.summary,
};

export default function TbcbPage() {
  return <FilmCaseStudy project={tbcbProject} />;
}
