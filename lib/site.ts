// Site-wide content that is not tied to one project.

// The homepage showreel.
//   loop: a short silent cut that plays muted behind the headline.
//   src:  the full reel with sound, opened by "Play reel with sound".
// Leave `src` empty to hide the button, and `loop` empty to play the full reel
// muted in the background instead. With both empty the hero shows the poster.
export const reel = {
  src: "/videos/reel/v01-reel-2026.mp4",
  loop: "/videos/reel/v01-reel-2026-loop.mp4",
  poster: "/images/reel-poster.jpg",
  posterAlt: "Aerial view of a yacht at golden hour, from the Siebert film Bonds, Corporate Bonds.",
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
