import FilmCaseStudy from "@/components/FilmCaseStudy";
import { tbcbProject } from "@/lib/studio-work";
import "../page.css";
import "../../case-study/[id]/page.css";
import "../film-case.css";

export const metadata = {
  title: "V01 — Bonds, Corporate Bonds.",
  description: tbcbProject.summary,
};

export default function TbcbPage() {
  return <FilmCaseStudy project={tbcbProject} />;
}
