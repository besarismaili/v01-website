import type { Metadata } from "next";

// The one public address of the site. The canonical tag, link previews,
// robots.txt and the sitemap are all built from it.
export const SITE_URL = "https://www.v01.mov";
export const SITE_NAME = "VERSION ONE";

// Shown in link previews when a page has no still of its own.
export const DEFAULT_SHARE_IMAGE = {
  url: "/images/reel-poster.jpg",
  alt: "Aerial view of a yacht at golden hour, from a VERSION ONE commercial.",
};

// The studio in a few facts, shared by the structured data below and by
// /llms.txt. Keep it to what the site already says; leave out what we don't know.
export const STUDIO = {
  name: SITE_NAME,
  shortName: "V01",
  email: "hello@v01.ca",
  tagline: "AI-native VFX for production, not prototypes.",
  description:
    "VERSION ONE (V01) is an AI-native VFX studio. We make commercials and film sequences with generative tools, then composite, grade and finish every shot to feature-film standards.",
  // Square logo for search engines, 512 x 512.
  logo: "/images/logo.png",
};

const ORG_ID = `${SITE_URL}/#organization`;
const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path === "/" ? "" : path}`);

// Structured data (schema.org JSON-LD) that tells search engines and AI tools
// who runs the site. Placed once, on the homepage.
export function studioJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: STUDIO.name,
        alternateName: STUDIO.shortName,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: abs(STUDIO.logo), width: 512, height: 512 },
        image: abs(DEFAULT_SHARE_IMAGE.url),
        description: STUDIO.description,
        slogan: STUDIO.tagline,
        email: STUDIO.email,
        address: [
          { "@type": "PostalAddress", addressLocality: "Montreal", addressRegion: "QC", addressCountry: "CA" },
          { "@type": "PostalAddress", addressLocality: "Prishtina", addressCountry: "XK" },
        ],
        areaServed: "Worldwide",
        knowsAbout: [
          "Visual effects",
          "Generative AI",
          "Compositing",
          "Commercials",
          "Film and episodic sequences",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: STUDIO.name,
        alternateName: STUDIO.shortName,
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

// The breadcrumb trail shown at the top of a page, as structured data. The
// last crumb is the page itself and needs no link.
export function breadcrumbJsonLd(crumbs: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: abs(c.href) } : {}),
    })),
  };
}

// One piece of studio work, as structured data for its case study page. Our
// part is given as the role shown on the page, so a job where we only did the
// VFX is not presented as one we made outright.
export function workJsonLd(work: {
  title: string;
  summary: string;
  href: string;
  image: string;
  year: number;
  category: string;
  // What we did on it, as shown on the page, e.g. "VFX / Finishing".
  role: string;
  // The brand the work was made for, and the agency if there was one.
  client: string;
  agency?: string;
}) {
  const studio = { "@type": "Organization", "@id": ORG_ID, name: STUDIO.name, url: SITE_URL };
  const agency =
    work.agency && work.agency !== work.client ? [{ "@type": "Organization", name: work.agency }] : [];
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: work.title,
    description: work.summary,
    url: abs(work.href),
    image: abs(work.image),
    dateCreated: String(work.year),
    genre: work.category,
    sourceOrganization: { "@type": "Organization", name: work.client },
    contributor: [{ "@type": "Role", roleName: work.role, contributor: studio }, ...agency],
  };
}

// Metadata for one public page: its title and description, its canonical
// address, and the preview card that chat apps and social sites show when the
// link is shared.
export function pageMeta({
  title,
  description,
  path,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  // Path of the page on the site, for example "/work/sola".
  path: string;
  // A still in /public, ideally 16:9. Leave out to use the reel poster.
  image?: string;
  imageAlt?: string;
}): Metadata {
  const share = image ? { url: image, alt: imageAlt || title } : DEFAULT_SHARE_IMAGE;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [share],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [share],
    },
  };
}
