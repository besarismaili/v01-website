import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="foot-logo">V01</div>
            <p className="foot-about">
              AI-native VFX for production, not prototypes. A studio working from Montreal and Prishtina.
            </p>
          </div>
          <div className="foot-col">
            <h5>Studio</h5>
            <ul>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:hello@v01.ca">hello@v01.ca</a></li>
              <li>Montreal, Canada</li>
              <li>Prishtina, Kosovo</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="socials" aria-label="Social">
            <a href="https://vimeo.com/besarismaili" target="_blank" rel="noreferrer" aria-label="Vimeo"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 8c2-2 4-2 5 0s2 8 4 8 5-6 6-9-1-4-4-3"/></svg></a>
          </div>
          <div>&copy; 2026 VERSION ONE</div>
        </div>
      </div>
    </footer>
  );
}
