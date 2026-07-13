import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="foot-logo">V01</div>
            <p className="foot-about">
              A creative studio at the intersection of AI, filmmaking, and VFX. Built for storytellers. Driven by craft. Designed for what's next.
            </p>
          </div>
          <div className="foot-col">
            <h5>Navigation</h5>
            <ul>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/lab">Lab</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/access">Access</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li>Commercials</li><li>Short Films</li><li>Music Videos</li><li>VFX / Post</li><li>Originals</li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Studio</h5>
            <ul>
              <li><Link href="/about">About V01</Link></li><li><Link href="/careers">Careers</Link></li><li><Link href="/journal">Journal</Link></li><li><Link href="/access">Contact</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:hello@v01.ca">hello@v01.ca</a></li>
              <li>Montreal, Canada</li><li>Prishtina, Kosovo</li>
              <li><a href="https://v01.ca">v01.ca</a> &middot; <a href="https://v01.mov">v01.mov</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="socials" aria-label="Social">
            <a href="https://vimeo.com/besarismaili" target="_blank" rel="noreferrer" aria-label="Vimeo"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 8c2-2 4-2 5 0s2 8 4 8 5-6 6-9-1-4-4-3"/></svg></a>
          </div>
          <div>&copy; 2026 Version One, Inc. All Rights Reserved.</div>
          <div style={{ display: "flex", gap: "32px" }}>
            <span>Creative Without Limits.</span><span>Privacy</span><span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
