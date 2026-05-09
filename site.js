// V01 — shared nav + footer injector
(function(){
  const page = document.body.dataset.page || '';
  const navItems = [
    {k:'work',l:'Work',h:'work.html'},
    {k:'lab',l:'Lab',h:'lab.html'},
    {k:'systems',l:'Systems',h:'systems.html'},
    {k:'about',l:'About',h:'about.html'},
    {k:'access',l:'Access',h:'access.html'},
  ];
  const navHtml = `
    <header class="nav">
      <div class="wrap nav-inner">
        <div class="logo"><a href="index.html">V01</a></div>
        <nav class="nav-links" aria-label="Primary">
          ${navItems.map(i=>`<a href="${i.h}" class="${page===i.k?'active':''}">${i.l}</a>`).join('')}
        </nav>
        <div class="nav-meta">VERSION ONE<br/>AI / VFX STUDIO</div>
      </div>
    </header>`;
  const footHtml = `
    <footer>
      <div class="wrap">
        <div class="foot-top">
          <div>
            <div class="foot-logo">V01</div>
            <p class="foot-about">A creative studio at the intersection of AI, filmmaking, and VFX. Built for storytellers. Driven by craft. Designed for what's next.</p>
          </div>
          <div class="foot-col">
            <h5>Navigation</h5>
            <ul>
              <li><a href="work.html">Work</a></li>
              <li><a href="lab.html">Lab</a></li>
              <li><a href="systems.html">Systems</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="access.html">Access</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h5>Services</h5>
            <ul>
              <li>Commercials</li><li>Short Films</li><li>Music Videos</li><li>VFX / Post</li><li>Originals</li>
            </ul>
          </div>
          <div class="foot-col">
            <h5>Studio</h5>
            <ul>
              <li><a href="about.html">About V01</a></li><li><a href="careers.html">Careers</a></li><li>Journal</li><li><a href="access.html">Contact</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h5>Contact</h5>
            <ul>
              <li>hello@v01.ca</li><li>Montreal, QC</li><li>Working Worldwide</li><li>24 / 7 Collaboration</li>
            </ul>
          </div>
        </div>
        <div class="foot-bottom">
          <div class="socials" aria-label="Social">
            <a href="#" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7"/></svg></a>
            <a href="#" aria-label="YouTube"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2.5" y="6" width="19" height="12" rx="3"/><path d="M10 9.5v5l4-2.5z" fill="currentColor"/></svg></a>
            <a href="#" aria-label="Vimeo"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 8c2-2 4-2 5 0s2 8 4 8 5-6 6-9-1-4-4-3"/></svg></a>
            <a href="#" aria-label="X"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 4l16 16M20 4L4 20"/></svg></a>
          </div>
          <div>&copy; 2026 Version One, Inc. All Rights Reserved.</div>
          <div style="display:flex;gap:32px"><span>Creative Without Limits.</span><span>Privacy</span><span>Terms</span></div>
        </div>
      </div>
    </footer>`;
  const navMount = document.querySelector('[data-mount="nav"]');
  const footMount = document.querySelector('[data-mount="footer"]');
  if(navMount) navMount.outerHTML = navHtml;
  if(footMount) footMount.outerHTML = footHtml;
})();
