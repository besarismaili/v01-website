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

export const clients = ["Sola", "Shift", "Siebert", "TOML", "Beige Flag", "Beki Cars"];

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
