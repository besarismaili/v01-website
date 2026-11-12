/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Pages retired when the site was simplified. Temporary redirects so the
    // paths can come back later without browsers holding a permanent cache.
    return [
      { source: "/access", destination: "/contact", permanent: false },
      { source: "/lab", destination: "/about", permanent: false },
      { source: "/systems", destination: "/about", permanent: false },
      { source: "/journal", destination: "/about", permanent: false },
      { source: "/careers", destination: "/about", permanent: false },
      // Founder credits used to have a page each. They are now one section
      // on the homepage.
      { source: "/case-study/:id", destination: "/#founder-credits", permanent: false },
    ];
  },
};

export default nextConfig;
