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

// The three things the studio offers, on the homepage and in /llms.txt.
export const services = [
  {
    title: "Commercials and Branded Films",
    text: "Spots, campaign films and product films made in a VFX pipeline with AI built into every stage, supervised shot by shot and delivered as a finished master. The Perfect Mismatch went from brief to master in three days.",
    href: "/work",
    link: "See the work",
  },
  {
    title: "Film and Episodic Sequences",
    text: "Environments, period reconstruction, crowds, dream sequences and missing coverage, built to cut with photographed plates and hold up to feature-film scrutiny. Every job starts with a test on one of your own shots.",
    href: "/test-shot",
    link: "How the test shot works",
  },
  {
    title: "Workflow R&D",
    text: "Custom generative workflows for productions and VFX vendors that need them to fit inside an existing pipeline.",
    href: "/contact",
    link: "Get in touch",
  },
];

// The test shot terms Besar set on 2026-11-12, shown on /test-shot and in
// /llms.txt. Change them here and both follow. The page's meta description in
// app/test-shot/page.tsx repeats the time and fee, so check it too.
export const testShotTerms = [
  { tag: "Time", big: "5 working days", text: "For one finished shot." },
  { tag: "Fee", big: "Quoted per shot", text: "You get the price before we start." },
  { tag: "If you go ahead", big: "Fee credited", text: "The test fee comes off the price of the full job." },
  { tag: "Reviews", big: "2 rounds", text: "Two rounds of your notes are included." },
];

// The AI use and rights rules, shown on /ai-use and in /llms.txt. Each rule is
// one of Besar's answers of 2026-11-12. Ownership on delivery is not here yet:
// it waits for his answer and a lawyer's read.
export const aiUseRules = [
  {
    title: "How we use AI",
    text: "Generative AI is built into our VFX pipeline. A person directs every shot and signs it off. Each case study on this site says what was photographed, what was AI-generated and what the VFX work covered.",
  },
  {
    title: "Training",
    text: "We do not use client material to train AI models.",
  },
  {
    title: "Likeness and voice",
    text: "We use a real person’s likeness or voice only with their written consent.",
  },
  {
    title: "Your files",
    text: "We archive a project’s files after delivery. If you would rather we delete them, tell us and we will.",
  },
  {
    title: "Access",
    text: "A project’s files are open to the client and to the people at VERSION ONE working on that job.",
  },
];

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
