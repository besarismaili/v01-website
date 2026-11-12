import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { studioProjects } from "@/lib/studio-work";
import { vimeoFilms } from "@/lib/vimeo-films";

// Every public page. New work pages are picked up from their data files, so this list does not need editing when one is added.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/work",
    "/about",
    "/contact",
    ...studioProjects.map((p) => p.href),
    ...vimeoFilms.map((f) => f.href),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path === "/" ? "" : path}` }));
}
