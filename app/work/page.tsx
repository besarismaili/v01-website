import { getPublishedProjects, getFeaturedProject, getCategoryCounts } from "@/lib/supabase";
import WorkGallery from "./WorkGallery";

export const metadata = {
  title: "V01 — Work",
  description: "A portfolio of cinematic commercials, films, music videos, and VFX work.",
};

export default async function WorkPage() {
  const allProjects = await getPublishedProjects();
  const featured = await getFeaturedProject();
  const counts = await getCategoryCounts();

  return (
    <main data-page="work">
      <WorkGallery allProjects={allProjects} featured={featured} counts={counts} />
    </main>
  );
}
