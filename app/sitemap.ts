import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { studioProjects } from "@/lib/studio-work";
import { vimeoFilms } from "@/lib/vimeo-films";
import { founderCredits } from "@/lib/founder-credits";

// Every public page. New work pages and founder credits are picked up from
// their data files, so this list does not need editing when one is added.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/work",
    "/about",
    "/contact",
    ...studioProjects.map((p) => p.href),
    ...vimeoFilms.map((f) => f.href),
    ...founderCredits.map((c) => `/case-study/${c.id}`),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path === "/" ? "" : path}` }));
}
