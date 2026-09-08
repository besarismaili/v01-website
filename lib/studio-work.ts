import { solaProject } from "./sola";

export type StudioProject = {
  id: string;
  href: string;
  title: string;
  client: string;
  agency: string;
  category: string;
  year: number;
  runtime: string;
  status: string;
  featured?: boolean;
  director: string;
  summary: string;
  headline: string;
  overview: string;
  brief: string;
  approach: string;
  pull: string;
  hero_url: string;
  thumbnail: string;
  video_url?: string;
  gallery: { src: string; alt: string; caption: string }[];
  credit_type: string;
  role: string;
  deliverables: string;
};

export const tbcbProject: StudioProject = {
  id: "tbcb",
  href: "/work/tbcb",
  title: "Bonds, Corporate Bonds.",
  client: "Siebert Financial",
  agency: "TOML",
  category: "Commercial",
  year: 2026,
  runtime: "00:30",
  status: "Published",
  director: "TOML / VERSION ONE",
  summary:
    "A 30-second commercial for Siebert Financial, produced with TOML. A small desire gets an extravagant answer in a deadpan Riviera world — built as an AI picture and finished as a cinematic spot.",
  headline: "Make fixed income feel alive.",
  overview:
    "TOML hired VERSION ONE to direct and finish the AI picture for Siebert’s corporate-bond hero film. Financial work is usually visually quiet. This one had to feel distinctive, dry, and expensive — and still land the product.",
  brief:
    "Reframe fixed income as effortless confidence. On a golden-hour yacht, a casual wish for a Negroni is answered by a helicopter. Nobody on screen acknowledges the joke. The line “Bonds, Corporate Bonds.” is the product reveal.",
  approach:
    "The world — yacht, period characters, helicopter, moving props, continuous golden hour — was generated, then selected, composited, graded, and delivered as a 4K commercial master. AI supplied the scale. Direction and finishing supplied the intention. Campaign stills and OOH executions sit around the same hero frame.",
  pull: "A tiny desire. An unreasonable answer. Nobody laughs on camera.",
  hero_url: "/images/work/tbcb/hero.jpg",
  thumbnail: "/images/work/tbcb/hero.jpg",
  video_url: "/videos/work/tbcb/hero.mp4",
  gallery: [
    { src: "/images/work/tbcb/hero.jpg", alt: "Yacht deck, helicopter delivery", caption: "Hero frame — Negroni by air" },
    { src: "/images/work/tbcb/ooh-wall.jpg", alt: "Wall execution of the campaign", caption: "Campaign execution" },
    { src: "/images/work/tbcb/airport.jpg", alt: "Airport hall execution", caption: "Airport execution" },
    { src: "/images/work/tbcb/miami.jpg", alt: "Miami billboard execution", caption: "Miami execution" },
    { src: "/images/work/tbcb/street.jpg", alt: "Street display", caption: "Street display" },
    { src: "/images/work/tbcb/storefront.jpg", alt: "Storefront execution", caption: "Storefront" },
  ],
  credit_type: "V01 Work",
  role: "AI / VFX",
  deliverables: "30s hero film, 4K master, campaign stills.",
};

export const tsvcProject: StudioProject = {
  id: "tsvc",
  href: "/work/tsvc",
  title: "Vice City",
  client: "Siebert Financial",
  agency: "TOML",
  category: "Commercial",
  year: 2026,
  runtime: "00:30",
  status: "Published",
  director: "TOML / VERSION ONE",
  summary:
    "The second Siebert Bonds film with TOML. Mid-80s Miami, a Lincoln in gridlock, a police motorcade that is not a bust — same punchline, different blood. “Bonds. Corporate Bonds.”",
  headline: "They look like trouble. They are the most legitimate men in Miami.",
  overview:
    "A companion 30-second spot to Bonds, Corporate Bonds. Same client, same agency, same dry cadence — staged as GTA Vice City finished by a period DP. VERSION ONE built and finished the AI picture.",
  brief:
    "The brothers are stuck on Ocean Drive. She says they’ll miss the boat. The city clears the road. The danger was always cosplay. The tag stays: Bonds. Corporate Bonds.",
  approach:
    "Every frame is locked to mid-80s Miami Beach: period cars, police, neon, grain. The traffic is the gag. The motorcade is the misdirect. The nod is the turn. Generated, selected, and finished as a 30-second anamorphic commercial — not a game trailer.",
  pull: "The city doesn’t just clear a path. It unjams the one road everyone else is trapped on.",
  hero_url: "/images/work/tsvc/hero.jpg",
  thumbnail: "/images/work/tsvc/hero.jpg",
  video_url: "/videos/work/tsvc/hero.mp4",
  gallery: [
    { src: "/images/work/tsvc/hero.jpg", alt: "Lincoln on Ocean Drive at sunset", caption: "Ocean Drive — the Lincoln" },
    { src: "/images/work/tsvc/still-08.jpg", alt: "Police in the side mirror", caption: "The reveal in the glass" },
    { src: "/images/work/tsvc/still-14.jpg", alt: "Convertible in golden-hour traffic", caption: "The jam breaks" },
    { src: "/images/work/tsvc/still-20.jpg", alt: "Brothers walking the dock at dusk", caption: "They don’t miss the boat" },
    { src: "/images/work/tsvc/still-26.jpg", alt: "Corporate Bonds offer card on the yacht", caption: "Offer card" },
  ],
  credit_type: "V01 Work",
  role: "AI / VFX",
  deliverables: "30s hero film, selected stills.",
};

export const tdbgProject: StudioProject = {
  id: "tdbg",
  href: "/work/tdbg",
  title: "Don’t Be That Guy",
  client: "Siebert",
  agency: "TOML",
  category: "Commercial",
  year: 2026,
  runtime: "00:30",
  status: "Published",
  director: "TOML / VERSION ONE",
  summary:
    "A toy soldier with real-world spending habits. A 30-second Siebert spot with TOML turns a rented convertible, a pool party, and disappearing cash into a blunt invitation to think longer-term.",
  headline: "Small world. Familiar mistakes.",
  overview:
    "TOML brought VERSION ONE in to direct and finish the AI picture for Siebert’s Valor campaign. The spot speaks to young enlisted service members without turning financial planning into a lecture. Its lead is a green plastic army man: dressed for responsibility, still spending like a kid. VERSION ONE’s AI / VFX work brings that contradiction into a bright miniature world.",
  brief:
    "Make ‘Don’t Be That Guy’ feel like advice from someone who has been there. Visual humor carries the message: easy spending, a rented lifestyle, then the moment the party is over. The tone is knowing rather than judgmental.",
  approach:
    "The film moves from a cash-spraying close-up to a toy-scale convertible and an overhead pool party. When the water disappears, the same soldier is left on the pool floor. Keeping the plastic character and miniature setting recognizable across these changes makes the joke read as one story. Bold yellow stages the spending; the green brand close shifts the conversation toward financial planning.",
  pull: "The pool empties. The party ends. Time for a different call.",
  hero_url: "/images/work/tdbg/hero.jpg",
  thumbnail: "/images/work/tdbg/hero.jpg",
  video_url: "/videos/work/tdbg/hero.mp4",
  gallery: [
    { src: "/images/work/tdbg/hero.jpg", alt: "Green toy soldier with a red money gun against yellow", caption: "The call-out" },
    { src: "/images/work/tdbg/convertible.jpg", alt: "Toy soldier driving a red convertible marked 24 Hour Car Rental", caption: "A rented lifestyle" },
    { src: "/images/work/tdbg/pool-party.jpg", alt: "Toy soldier floating in a pool with dolls and scattered banknotes", caption: "The pool party" },
    { src: "/images/work/tdbg/empty-pool.jpg", alt: "Toy soldier alone on the drained pool floor", caption: "The party is over" },
    { src: "/images/work/tdbg/phone.jpg", alt: "Toy soldier looking at a phone against yellow", caption: "The long-term call" },
    { src: "/images/work/tdbg/advisor.jpg", alt: "Toy soldier and miniature financial advisor in a split-screen phone conversation", caption: "A different conversation" },
  ],
  credit_type: "V01 Work",
  role: "AI / VFX",
  deliverables: "30-second film.",
};

export const studioProjects = [solaProject, tbcbProject, tsvcProject, tdbgProject];
