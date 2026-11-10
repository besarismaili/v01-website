import VimeoFilm from "@/components/VimeoFilm";
import { inkmateFilm } from "@/lib/vimeo-films";

export const metadata = {
  title: "V01 — Inkmate",
  description: inkmateFilm.summary,
};

export default function InkmatePage() {
  return <VimeoFilm film={inkmateFilm} />;
}
