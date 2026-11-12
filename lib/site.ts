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

export const clients = ["Sola", "Shift", "Siebert", "TOML", "Beige Flag", "Beki Cars"];

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
