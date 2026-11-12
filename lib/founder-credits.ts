// Films and series our founder worked on in roles at other studios.
// These are not VERSION ONE projects: every place that shows them must label
// them as founder credits.
//
// They appear on the homepage as a wall of posters. Titles, years and roles
// follow the founder's IMDb page (nm6289484, read 2026-11-12). Studios come
// from the founder (FX3X for Maleficent, Captain America, Covert Affairs and
// Lucky 7, confirmed 2026-11-12), the captions on the founder's own reels and
// earlier site copy; where none of those names one, it is left out rather
// than guessed.
//
// To add a title, put its poster in public/images/founder (600x900, 2:3) and
// add an entry here. The wall shows the list as two rows, split in the
// middle, so the order below is arranged to give each row a mix of titles.

export type FounderCredit = {
  id: string;
  title: string;
  year: number;
  role: string;
  studio?: string;
  // Set for anything that is not a feature film.
  kind?: "TV series" | "Short film";
  poster: string;
};

const poster = (id: string) => `/images/founder/${id}.jpg`;

export const founderCredits: FounderCredit[] = [
  // first row
  { id: "superman", title: "Superman", year: 2025, role: "Compositor", studio: "Framestore", poster: poster("superman") },
  { id: "iron-man-3", title: "Iron Man 3", year: 2013, role: "Digital compositor", studio: "Framestore", poster: poster("iron-man-3") },
  { id: "nope", title: "Nope", year: 2022, role: "Digital compositor", studio: "MPC", poster: poster("nope") },
  { id: "maleficent", title: "Maleficent", year: 2014, role: "Paint & prep artist", studio: "FX3X", poster: poster("maleficent") },
  { id: "covert-affairs", title: "Covert Affairs", year: 2013, role: "Paint & prep artist", studio: "FX3X", kind: "TV series", poster: poster("covert-affairs") },
  { id: "apocalypse", title: "Apocalypse", year: 2017, role: "Compositor", poster: poster("apocalypse") },
  { id: "starman", title: "Starman", year: 2016, role: "Lead VFX compositor", kind: "Short film", poster: poster("starman") },
  // second row
  {
    id: "transformers-rise-of-the-beasts",
    title: "Transformers: Rise of the Beasts",
    year: 2023,
    role: "Digital compositor",
    studio: "MPC / Framestore",
    poster: poster("transformers-rise-of-the-beasts"),
  },
  {
    id: "captain-america-the-winter-soldier",
    title: "Captain America: The Winter Soldier",
    year: 2014,
    role: "Paint & prep artist",
    studio: "FX3X",
    poster: poster("captain-america-the-winter-soldier"),
  },
  { id: "atlas", title: "Atlas", year: 2024, role: "Compositor", studio: "MPC", poster: poster("atlas") },
  {
    id: "the-smashing-machine",
    title: "The Smashing Machine",
    year: 2025,
    role: "Compositor",
    studio: "Dream Machine FX",
    poster: poster("the-smashing-machine"),
  },
  { id: "lucky-7", title: "Lucky 7", year: 2013, role: "Digital compositor", studio: "FX3X", kind: "TV series", poster: poster("lucky-7") },
  { id: "the-event", title: "The Event", year: 2014, role: "Key roto", kind: "Short film", poster: poster("the-event") },
];
