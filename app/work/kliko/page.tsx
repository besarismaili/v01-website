import VimeoFilm from "@/components/VimeoFilm";
import { klikoFilm } from "@/lib/vimeo-films";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "V01 — Kliko Marketplace",
  description: klikoFilm.summary,
  path: klikoFilm.href,
  image: klikoFilm.hero_url,
  imageAlt: `${klikoFilm.title} hero still`,
});

export default function KlikoPage() {
  return <VimeoFilm film={klikoFilm} />;
}
