// Films Besar Ismaili worked on before V01 existed. They are shown on the
// Work page under "Before V01" and must never be presented as V01 projects.
// Facts come from the films' Vimeo pages; leave a field out rather than guess.

export type FounderFilm = {
  id: string;
  href: string;
  title: string;
  // The brand the film is for. Not called "client": whether it was a
  // commission isn't known.
  brand: string;
  category?: string;
  year: number;
  runtime: string;
  summary: string;
  vimeo_id: string;
  hero_url: string;
  // Where the 4:3 card crop sits on the 16:9 poster (CSS object-position).
  poster_position?: string;
};

export const inkmateFilm: FounderFilm = {
  id: "inkmate",
  href: "/work/inkmate",
  title: "Inkmate",
  brand: "Inkmate",
  category: "Product Film",
  year: 2021,
  runtime: "00:45",
  summary: "A 45-second film for the Inkmate app.",
  vimeo_id: "536466940",
  hero_url: "/images/work/inkmate/hero.jpg",
};

export const klikoFilm: FounderFilm = {
  id: "kliko",
  href: "/work/kliko",
  title: "Kliko Marketplace",
  brand: "Kliko",
  category: "Product Film",
  year: 2017,
  runtime: "00:42",
  summary: "A 42-second product film for Kliko, an online marketplace for design resources: fonts, graphics, templates and add-ons.",
  vimeo_id: "248260515",
  hero_url: "/images/work/kliko/hero.jpg",
  poster_position: "25% 50%",
};

// Newest first.
export const founderFilms = [inkmateFilm, klikoFilm];
