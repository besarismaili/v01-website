import FounderFilm from "@/components/FounderFilm";
import { klikoFilm } from "@/lib/founder-work";

export const metadata = {
  title: "V01 — Kliko Marketplace",
  description: klikoFilm.summary,
};

export default function KlikoPage() {
  return <FounderFilm film={klikoFilm} />;
}
