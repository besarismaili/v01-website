// Site-wide content that is not tied to one project.

// The homepage showreel.
//   loop: a short silent cut that plays muted behind the headline.
//   loopSmall: the same cut at 720p, sent to phones instead of `loop`.
//   src:  the full reel with sound, opened by "Play reel with sound".
// Leave `src` empty to hide the button, and `loop` empty to play the full reel
// muted in the background instead. With both empty the hero shows the poster.
export const reel = {
  src: "/videos/reel/v01-reel-2026.mp4",
  loop: "/videos/reel/v01-reel-2026-loop.mp4",
  loopSmall: "/videos/reel/v01-reel-2026-loop-720.mp4",
  poster: "/images/reel-poster.jpg",
  posterAlt: "Aerial view of a yacht at golden hour, from the Siebert film Bonds, Corporate Bonds.",
};

// Silent loop behind the founder credits section on the homepage, cut from
// the founder's own compositing reels (W:/v01/04_library/founder_credits):
// Superman, Transformers: Rise of the Beasts, Atlas, Nope and The Smashing
// Machine, with the reels' name cards and captions cropped out. Leave `loop`
// empty to show the poster wall on a plain background.
export const founderReel = {
  loop: "/videos/founder/founder-reel-loop.mp4",
  poster: "/images/founder/reel-poster.jpg",
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

// The footer lists the main pages plus the two reference pages.
export const footerItems = [
  ...navItems,
  { label: "Test shot", href: "/test-shot" },
  { label: "AI use and rights", href: "/ai-use" },
];
