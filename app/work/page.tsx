import { solaProject } from "@/lib/sola";
import { tbcbProject, tsvcProject, tdbgProject } from "@/lib/studio-work";
import WorkGallery from "./WorkGallery";

export const metadata = {
  title: "V01 — Work",
  description: "A portfolio of cinematic commercials, films, music videos, and VFX work.",
};

const studio = [solaProject, tbcbProject, tsvcProject, tdbgProject];

export default async function WorkPage() {
  const featured = solaProject;
  const counts: Record<string, number> = {
    Commercial: studio.length,
  };

  return (
    <main data-page="work">
      <WorkGallery allProjects={studio} featured={featured} counts={counts} />
    </main>
  );
}
