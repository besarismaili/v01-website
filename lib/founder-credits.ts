// Feature films our founder worked on in credited roles at other studios.
// These are not VERSION ONE projects: every place that shows them must label
// them as founder credits.
//
// They appear on the homepage as a wall of posters. To add a film, put its
// poster in public/images/founder (portrait, 2:3) and add an entry here.
// From twelve films up the wall splits into two rows.

export type FounderCredit = {
  id: string;
  title: string;
  year: number;
  role: string;
  studio: string;
  poster: string;
};

export const founderCredits: FounderCredit[] = [
  {
    id: "superman",
    title: "Superman",
    year: 2025,
    role: "Compositor",
    studio: "Framestore",
    poster: "/images/founder/superman.jpg",
  },
  {
    id: "transformers-rise-of-the-beasts",
    title: "Transformers: Rise of the Beasts",
    year: 2023,
    role: "Compositor",
    studio: "MPC / Framestore",
    poster: "/images/founder/transformers-rise-of-the-beasts.jpg",
  },
  {
    id: "iron-man-3",
    title: "Iron Man 3",
    year: 2013,
    role: "Compositor",
    studio: "Framestore",
    poster: "/images/founder/iron-man-3.jpg",
  },
  {
    id: "captain-america-the-winter-soldier",
    title: "Captain America: The Winter Soldier",
    year: 2014,
    role: "Compositor",
    studio: "Framestore",
    poster: "/images/founder/captain-america-the-winter-soldier.jpg",
  },
  {
    id: "maleficent",
    title: "Maleficent",
    year: 2014,
    role: "Compositor",
    studio: "MPC",
    poster: "/images/founder/maleficent.jpg",
  },
];
