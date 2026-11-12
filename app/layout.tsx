import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import RevealObserver from "@/components/Reveal";

export const metadata = {
  metadataBase: new URL("https://v01.ca"),
  title: "V01 — AI-Native VFX Studio",
  description: "AI-native VFX for production, not prototypes. Commercials and film sequences, finished to feature-film standards.",
};

// Marks the page as JS-capable so scroll reveals can hide content before it
// animates in. If the reveal observer never starts, the class is removed again
// after three seconds so nothing stays hidden.
const revealBoot =
  "document.documentElement.classList.add('js');setTimeout(function(){if(!window.__vReveal){document.documentElement.classList.remove('js')}},3000);";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBoot }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&family=Unbounded:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
