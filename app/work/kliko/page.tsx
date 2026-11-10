import VimeoFilm from "@/components/VimeoFilm";
import { klikoFilm } from "@/lib/vimeo-films";

export const metadata = {
  title: "V01 — Kliko Marketplace",
  description: klikoFilm.summary,
};

export default function KlikoPage() {
  return <VimeoFilm film={klikoFilm} />;
}
