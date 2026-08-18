import { getPublishedProjects, getCategoryCounts } from "@/lib/supabase";
import { solaProject } from "@/lib/sola";
import WorkGallery from "./WorkGallery";

export const metadata = {
  title: "V01 — Work",
  description: "A portfolio of cinematic commercials, films, music videos, and VFX work.",
};

export default async function WorkPage() {
  const cmsProjects = await getPublishedProjects();
  const allProjects = [solaProject, ...cmsProjects.filter((p) => p.id !== solaProject.id)];
  const featured = solaProject;
  const counts = await getCategoryCounts();
  counts["Commercial"] = (counts["Commercial"] || 0) + 1;

  return (
    <main data-page="work">
      <WorkGallery allProjects={allProjects} featured={featured} counts={counts} />
    </main>
  );
}
