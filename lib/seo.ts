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
