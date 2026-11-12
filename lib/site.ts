// Site-wide content that is not tied to one project.

// The homepage showreel. Leave `src` empty until the reel file exists: the hero
// then shows the poster still and hides the "Play reel with sound" button.
// To switch the reel on, put the file in public/videos and set e.g.
//   src: "/videos/reel.mp4"
export const reel = {
  src: "",
  poster: "/images/work/sola/hero.jpg",
  posterAlt: "Sola commercial key visual",
};

export type Client = {
  name: string;
  /** Optional logo, dropped in public/images/clients. No file = wordmark. */
  logo?: string;
  /** Optical height in px; marks and wordmarks need different sizes to balance. */
  h?: number;
};

export const clients: Client[] = [
  { name: "Sola", logo: "/images/clients/sola.png", h: 26 },
  { name: "Shift" },
  { name: "Siebert", logo: "/images/clients/siebert.png", h: 20 },
  { name: "TOML" },
  { name: "Beige Flag", logo: "/images/clients/beige-flag.png", h: 34 },
  { name: "Beki Cars" },
];

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
