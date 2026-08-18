import { getPublishedProjects, getCategoryCounts } from "@/lib/supabase";
import { solaProject } from "@/lib/sola";
import { tbcbProject, tsvcProject } from "@/lib/studio-work";
import WorkGallery from "./WorkGallery";

export const metadata = {
  title: "V01 — Work",
  description: "A portfolio of cinematic commercials, films, music videos, and VFX work.",
};

const studio = [solaProject, tbcbProject, tsvcProject];

export default async function WorkPage() {
  const cmsProjects = await getPublishedProjects();
  const studioIds = new Set(studio.map((p) => p.id));
  const allProjects = [...studio, ...cmsProjects.filter((p) => !studioIds.has(p.id))];
  const featured = solaProject;
  const counts = await getCategoryCounts();
  counts["Commercial"] = (counts["Commercial"] || 0) + studio.length;

  return (
    <main data-page="work">
      <WorkGallery allProjects={allProjects} featured={featured} counts={counts} />
    </main>
  );
}
