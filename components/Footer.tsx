import Link from "next/link";
import { navItems } from "@/lib/site";

export function Footer() {
  return (
    <footer className="v-footer" data-v>
      <div className="v-wrap">
        <div className="v-footer__top">
          <div className="v-footer__brand">
            <Link href="/" className="v-footer__logo">V01</Link>
            <p>AI-native VFX for production, not prototypes. A studio working from Montreal and Prishtina.</p>
          </div>
          <nav className="v-footer__col" aria-label="Footer">
            <h2>Studio</h2>
            {navItems.map((i) => (
              <Link key={i.href} href={i.href}>{i.label}</Link>
            ))}
          </nav>
          <div className="v-footer__col">
            <h2>Contact</h2>
            <a href="mailto:hello@v01.ca">hello@v01.ca</a>
            <a href="https://vimeo.com/besarismaili" target="_blank" rel="noreferrer">Vimeo</a>
            <span style={{ paddingTop: 10 }}>Montreal, Canada</span>
            <span>Prishtina, Kosovo</span>
          </div>
        </div>
        <div className="v-footer__bottom">&copy; 2026 VERSION ONE</div>
      </div>
    </footer>
  );
}
