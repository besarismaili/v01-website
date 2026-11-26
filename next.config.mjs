// The site's one main address. The same site is also reachable at the
// addresses below; each request there is sent permanently to the same path on
// the main address, so search engines and AI tools list only v01.ca. Keep this
// in step with SITE_URL in lib/seo.ts. If the hosting is ever set to send
// v01.ca to www.v01.ca, remove www.v01.ca here or the two will loop.
// As of 2026-11-16 the hosting answers v01.mov itself with a redirect to
// www.v01.mov, which then lands here; the v01.mov entry is a fallback.
const MAIN_HOST = "v01.ca";
const OTHER_HOSTS = ["www.v01.ca", "v01.mov", "www.v01.mov"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      ...OTHER_HOSTS.map((host) => ({
        source: "/:path*",
        // The value is a regular expression, so the dots are escaped.
        has: [{ type: "host", value: host.replace(/\./g, "\\.") }],
        destination: `https://${MAIN_HOST}/:path*`,
        permanent: true,
      })),
      // Pages retired when the site was simplified. Temporary redirects so the
      // paths can come back later without browsers holding a permanent cache.
      { source: "/access", destination: "/contact", permanent: false },
      { source: "/lab", destination: "/about", permanent: false },
      { source: "/systems", destination: "/about", permanent: false },
      { source: "/journal", destination: "/about", permanent: false },
      { source: "/careers", destination: "/about", permanent: false },
      // Founder credits used to have a page each. They are now one section
      // on the homepage.
      { source: "/case-study/:id", destination: "/#founder-credits", permanent: false },
      // Addresses from the old v01.ca site that search engines still know.
      { source: "/work/a-dream-in-your-hand", destination: "/work/dream", permanent: true },
    ];
  },
};

export default nextConfig;
