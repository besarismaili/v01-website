// Feature-film credits earned by our founder in credited roles at other
// studios. These are not VERSION ONE projects: every place that shows them
// must label them as founder credits.
//
// The copy was moved here from the site database (migrations 003 to 006) so
// the homepage and the credit pages no longer need the database to load.

export type FounderCredit = {
  // Used in the page address: /case-study/<id>
  id: string;
  title: string;
  studio: string;
  role: string;
  category: string;
  year: number;
  // Length of the linked reel.
  runtime: string;
  summary: string;
  hero_url: string;
  video_url: string;
  source_url: string;
  headline: string;
  overview: string;
  contribution: string;
};

export const FOUNDER_CREDIT_EYEBROW = "Founder film credit";
export const FOUNDER_CREDIT_DISCLAIMER =
  "This is an individual founder credit. V01 was not engaged as a vendor on the production.";

export const founderCredits: FounderCredit[] = [
  {
    id: "superman",
    title: "Superman",
    studio: "Framestore",
    role: "Compositor",
    category: "VFX / Post",
    year: 2025,
    runtime: "01:06",
    summary:
      "Our founder contributed feature-film compositing as part of Framestore’s Montreal team, helping integrate complex environments, characters, and effects into James Gunn’s Superman.",
    hero_url:
      "https://www.framestore.com/sites/default/files/styles/image_gallery_mob_688x_387_/public/2025-10/AWS0151_comp_FRM_v0596_1052.jpg?h=242776bc&itok=WKmGR8--",
    video_url: "https://vimeo.com/1159635552",
    source_url: "https://www.framestore.com/work/superman",
    headline: "Feature compositing at blockbuster scale.",
    overview: "A production-side credit from our founder’s work with Framestore.",
    contribution:
      "Compositing support across Framestore’s Superman delivery, with the wider team responsible for the Fortress of Solitude, Krypto, the Engineer and Kryptonian holograms.",
  },
  {
    id: "transformers-rise-of-the-beasts",
    title: "Transformers: Rise of the Beasts",
    studio: "MPC / Framestore",
    role: "Compositor",
    category: "VFX / Post",
    year: 2023,
    runtime: "01:15",
    summary:
      "Feature-film compositing by our founder across MPC and Framestore for the live-action Transformers franchise.",
    hero_url: "https://upload.wikimedia.org/wikipedia/en/1/1c/Transformers-_Rise_of_the_Beasts.jpg",
    video_url: "https://vimeo.com/906420046",
    source_url: "https://vimeo.com/906420046",
    headline: "Robots, plates and precision integration.",
    overview:
      "A dedicated reel highlighting our founder’s compositing contribution to Transformers: Rise of the Beasts.",
    contribution:
      "Digital compositing and shot integration delivered within MPC and Framestore feature pipelines.",
  },
  {
    id: "iron-man-3",
    title: "Iron Man 3",
    studio: "Framestore",
    role: "Compositor",
    category: "VFX / Post",
    year: 2013,
    runtime: "01:15",
    summary:
      "Our founder contributed compositing work to Marvel Studios’ Iron Man 3 as part of the Framestore team.",
    hero_url: "https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg",
    video_url: "https://vimeo.com/943691700",
    source_url: "https://en.wikipedia.org/wiki/Iron_Man_3",
    headline: "Invisible compositing for a Marvel feature.",
    overview: "Feature-film work completed by our founder at Framestore.",
    contribution: "Compositing and final shot integration inside Framestore’s feature-film pipeline.",
  },
  {
    id: "captain-america-the-winter-soldier",
    title: "Captain America: The Winter Soldier",
    studio: "Framestore",
    role: "Compositor",
    category: "VFX / Post",
    year: 2014,
    runtime: "01:15",
    summary:
      "Our founder contributed feature compositing to Captain America: The Winter Soldier as part of Framestore.",
    hero_url: "https://upload.wikimedia.org/wikipedia/en/9/9e/Captain_America_The_Winter_Soldier_poster.jpg",
    video_url: "https://vimeo.com/943691700",
    source_url: "https://en.wikipedia.org/wiki/Captain_America:_The_Winter_Soldier",
    headline: "Grounded action, finished frame by frame.",
    overview: "A founder credit from compositing work at Framestore.",
    contribution: "Feature compositing and seamless integration for a large-scale action production.",
  },
  {
    id: "maleficent",
    title: "Maleficent",
    studio: "MPC",
    role: "Compositor",
    category: "VFX / Post",
    year: 2014,
    runtime: "01:15",
    summary:
      "Our founder contributed feature-film compositing to Disney’s Maleficent as part of the MPC team.",
    hero_url: "https://upload.wikimedia.org/wikipedia/en/5/55/Maleficent_poster.jpg",
    video_url: "https://vimeo.com/943691700",
    source_url: "https://en.wikipedia.org/wiki/Maleficent_(film)",
    headline: "Fantasy worlds, integrated with restraint.",
    overview: "Feature compositing completed by our founder at MPC.",
    contribution: "Compositing support for live-action plates, digital environments and fantasy effects.",
  },
];

export function getFounderCredit(id: string) {
  return founderCredits.find((c) => c.id === id);
}
