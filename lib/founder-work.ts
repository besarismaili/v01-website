// Films Besar Ismaili worked on before V01 existed. They are shown on the
// Work page under "Before V01" and must never be presented as V01 projects.
// Facts come from the films' Vimeo pages; leave a field out rather than guess.

export type FounderFilm = {
  id: string;
  href: string;
  title: string;
  client: string;
  category: string;
  year: number;
  runtime: string;
  summary: string;
  vimeo_id: string;
  hero_url: string;
};

export const inkmateFilm: FounderFilm = {
  id: "inkmate",
  href: "/work/inkmate",
  title: "Inkmate",
  client: "Inkmate",
  category: "Product Film",
  year: 2021,
  runtime: "00:45",
  summary: "A 45-second black-and-white film for the Inkmate app.",
  vimeo_id: "536466940",
  hero_url: "/images/work/inkmate/hero.jpg",
};

export const klikoFilm: FounderFilm = {
  id: "kliko",
  href: "/work/kliko",
  title: "Kliko Marketplace",
  client: "Kliko",
  category: "Product Film",
  year: 2017,
  runtime: "00:42",
  summary: "A 42-second product film for Kliko, an online marketplace for design resources: fonts, graphics, templates and add-ons.",
  vimeo_id: "248260515",
  hero_url: "/images/work/kliko/hero.jpg",
};

// Newest first.
export const founderFilms = [inkmateFilm, klikoFilm];
