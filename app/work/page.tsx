import { solaProject } from "@/lib/sola";
import { studioProjects } from "@/lib/studio-work";
import WorkGallery from "./WorkGallery";

export const metadata = {
  title: "V01 — Work",
  description: "A portfolio of cinematic commercials, films, music videos, and VFX work.",
};

export default async function WorkPage() {
  const featured = solaProject;
  const counts: Record<string, number> = {
    Commercial: studioProjects.length,
  };

  return (
    <main data-page="work">
      <WorkGallery allProjects={studioProjects} featured={featured} counts={counts} />
    </main>
  );
}
