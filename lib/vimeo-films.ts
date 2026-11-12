// V01 films that are hosted on Vimeo rather than in public/videos. Besar
// confirmed on 2026-11-10 that V01 made both start to finish.
// Facts come from the films' Vimeo pages; leave a field out rather than guess.

export type VimeoFilm = {
  id: string;
  href: string;
  title: string;
  // The brand the film is for.
  brand: string;
  category: string;
  year: number;
  runtime: string;
  role: string;
  summary: string;
  vimeo_id: string;
  hero_url: string;
  // Where the 4:3 card crop sits on the 16:9 poster (CSS object-position).
  poster_position?: string;
};

export const inkmateFilm: VimeoFilm = {
  id: "inkmate",
  href: "/work/inkmate",
  title: "Inkmate",
  brand: "Inkmate",
  category: "Product Film",
  year: 2021,
  runtime: "00:45",
  role: "Concept to Finish",
  summary: "A 45-second film for the Inkmate app, made by V01 from concept to finished master.",
  vimeo_id: "536466940",
  hero_url: "/images/work/inkmate/hero.jpg",
};

export const klikoFilm: VimeoFilm = {
  id: "kliko",
  href: "/work/kliko",
  title: "Kliko Marketplace",
  brand: "Kliko",
  category: "Product Film",
  year: 2017,
  runtime: "00:42",
  role: "Concept to Finish",
  summary: "A 42-second product film for Kliko, an online marketplace for design resources: fonts, graphics, templates and add-ons. Made by V01 from concept to finished master.",
  vimeo_id: "248260515",
  hero_url: "/images/work/kliko/hero.jpg",
  poster_position: "25% 50%",
};

// Newest first.
export const vimeoFilms = [inkmateFilm, klikoFilm];
