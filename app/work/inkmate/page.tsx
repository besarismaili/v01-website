import FounderFilm from "@/components/FounderFilm";
import { inkmateFilm } from "@/lib/founder-work";

export const metadata = {
  title: "V01 — Inkmate",
  description: inkmateFilm.summary,
};

export default function InkmatePage() {
  return <FounderFilm film={inkmateFilm} />;
}
