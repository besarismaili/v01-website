import Link from "next/link";
import "./page.css";

export const metadata = {
  title: "V01 — Contact",
  description: "Start a project with VERSION ONE. Email hello@v01.ca.",
};

export default function ContactPage() {
  return (
    <main data-page="contact">
      <section className="wrap page-head">
        <div className="breadcrumb"><span>V01</span><span>/</span><span>Contact</span></div>
        <h1>Start a<br/>project.</h1>
        <p className="lede">Email a few lines about what you&rsquo;re making: the project, the timeline, the deliverables and any references. We read every message.</p>
        <a className="mail" href="mailto:hello@v01.ca?subject=New%20project">hello@v01.ca<span className="arr">&rarr;</span></a>
        <div className="page-meta">
          <div className="pm"><h5>Email</h5><p><a href="mailto:hello@v01.ca">hello@v01.ca</a></p></div>
          <div className="pm"><h5>Based</h5><p>Montreal &middot; Prishtina</p></div>
          <div className="pm"><h5>Working</h5><p>Worldwide</p></div>
          <div className="pm"><h5>Social</h5><p><a href="https://vimeo.com/besarismaili" target="_blank" rel="noreferrer">Vimeo &#8599;</a></p></div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Ways to Work Together</div></div>
        <div className="tracks">
          <div className="track">
            <div className="num">01</div>
            <h3>Feasibility Sprint</h3>
            <p>A short test on one of your shots or scenes. You see what AI can and can&rsquo;t do for it before committing a budget.</p>
            <div className="who">For: Producers &middot; Directors &middot; Agencies</div>
          </div>
          <div className="track">
            <div className="num">02</div>
            <h3>Sequence Production</h3>
            <p>A commercial or film sequence from first frames to final master, composited, graded and delivered in the formats you need.</p>
            <div className="who">For: Brands &middot; Agencies &middot; Producers</div>
          </div>
          <div className="track">
            <div className="num">03</div>
            <h3>Workflow R&amp;D</h3>
            <p>Custom generative workflows built to sit inside your existing pipeline, for a single project or as ongoing support.</p>
            <div className="who">For: Productions &middot; VFX Vendors</div>
          </div>
        </div>
        <p className="see-work">Want to see what we&rsquo;ve made first? <Link href="/work">See the work &rarr;</Link></p>
      </section>
    </main>
  );
}
