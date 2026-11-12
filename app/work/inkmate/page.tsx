import VimeoFilm from "@/components/VimeoFilm";
import { inkmateFilm } from "@/lib/vimeo-films";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "V01 — Inkmate",
  description: inkmateFilm.summary,
  path: inkmateFilm.href,
  image: inkmateFilm.hero_url,
  imageAlt: `${inkmateFilm.title} hero still`,
});

export default function InkmatePage() {
  return <VimeoFilm film={inkmateFilm} />;
}
