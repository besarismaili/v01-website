"use client";

import Link from "next/link";
import { useState } from "react";
import "./page.css";

export default function AccessPage() {
  const [success, setSuccess] = useState(false);
  const [refId, setRefId] = useState("");

  const [activeChipsType, setActiveChipsType] = useState<string[]>([]);
  const [activeChipsServices, setActiveChipsServices] = useState<string[]>([]);
  const [activeBudget, setActiveBudget] = useState<string | null>(null);

  const toggleChip = (setState: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setState(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const ok = form.checkValidity();
    if (!ok) {
      form.reportValidity();
      return;
    }
    const ref = String(Math.floor(1000 + Math.random() * 8999));
    setRefId(ref);
    setSuccess(true);
  };

  const projectTypes = ["Commercial", "Brand Film", "Short Film", "Feature", "Music Video", "VFX / Post Only", "Series", "Other"];
  const serviceTypes = ["Concept & Treatment", "Direction", "Previz", "Production", "VFX / Compositing", "Color & Finishing", "AI Pipeline Build", "Not Sure Yet"];
  const budgetTypes = ["< 50K", "50K — 150K", "150K — 500K", "500K — 1M", "1M+"];

  return (
    <main data-page="access">
      <section className="wrap page-head">
        <div className="breadcrumb"><span>V01</span><span>/</span><span>Access</span></div>
        <h1>Start a project<br/>with V01.</h1>
        <p className="lede">Tell us what you're making. The more you share — references, deadlines, deliverables — the faster we can come back with a real plan.</p>
        <div className="page-meta">
          <div className="pm"><h5>Response Time</h5><p>Within 48 hours</p></div>
          <div className="pm"><h5>Min Engagement</h5><p>$50K USD</p></div>
          <div className="pm"><h5>Booking</h5><p>Q3 / Q4 — open</p></div>
          <div className="pm"><h5>Direct</h5><p>hello@v01.ca</p></div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="access-grid">

          <aside className="left">
            <div className="eyebrow" style={{marginBottom:"14px"}}>Get In Touch</div>
            <h2>Three ways<br/>to reach us.</h2>
            <p>Fill out the project form, send a direct email, or book a call with our executive producer. Whichever lands fastest.</p>
            <div className="cards">
              <div className="card">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 7 9-7"/></svg>
                <div><span className="l">Email</span><span className="v">hello@v01.ca</span></div>
              </div>
              <div className="card">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>
                <div><span className="l">Web</span><span className="v">v01.ca · v01.mov</span></div>
              </div>
              <div className="card">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>
                <div><span className="l">Press &amp; Partnerships</span><span className="v">press@v01.ca</span></div>
              </div>
              <div className="card">
                <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="10" r="3"/><path d="M12 2c5 0 8 4 8 8 0 6-8 12-8 12S4 16 4 10c0-4 3-8 8-8z"/></svg>
                <div><span className="l">Studios</span><span className="v">Montreal · Prishtina</span></div>
              </div>
            </div>
          </aside>

          <form className="form" id="brief" noValidate onSubmit={handleSubmit}>

            <div className="row two">
              <div>
                <label>Your Name <span className="req">*</span></label>
                <input type="text" name="name" placeholder="First and last" required disabled={success} />
              </div>
              <div>
                <label>Company / Studio</label>
                <input type="text" name="company" placeholder="Optional" disabled={success} />
              </div>
            </div>

            <div className="row two">
              <div>
                <label>Email <span className="req">*</span></label>
                <input type="email" name="email" placeholder="you@studio.com" required disabled={success} />
              </div>
              <div>
                <label>Role</label>
                <select name="role" disabled={success}>
                  <option>Director</option>
                  <option>Producer</option>
                  <option>Brand / Marketing</option>
                  <option>Agency Lead</option>
                  <option>Studio / Streamer</option>
                  <option>Artist Management</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="row">
              <label>Project Type — select any that apply</label>
              <div className="chips">
                {projectTypes.map(type => (
                  <button
                    key={type}
                    type="button"
                    className={`chip ${activeChipsType.includes(type) ? 'active' : ''}`}
                    onClick={() => toggleChip(setActiveChipsType, type)}
                    disabled={success}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="row">
              <label>Services — what do you need from V01?</label>
              <div className="chips">
                {serviceTypes.map(type => (
                  <button
                    key={type}
                    type="button"
                    className={`chip ${activeChipsServices.includes(type) ? 'active' : ''}`}
                    onClick={() => toggleChip(setActiveChipsServices, type)}
                    disabled={success}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="row">
              <label>Estimated Budget (USD)</label>
              <div className="budget">
                {budgetTypes.map(b => (
                  <div
                    key={b}
                    className={`b ${activeBudget === b ? 'active' : ''}`}
                    onClick={() => { if (!success) setActiveBudget(b); }}
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <div className="row two">
              <div>
                <label>Target Start</label>
                <select name="start" disabled={success}>
                  <option>ASAP / This month</option>
                  <option>Next 1-3 months</option>
                  <option>Next 3-6 months</option>
                  <option>Later this year</option>
                  <option>Exploratory</option>
                </select>
              </div>
              <div>
                <label>Delivery Window</label>
                <select name="delivery" disabled={success}>
                  <option>4 weeks</option>
                  <option>6 — 8 weeks</option>
                  <option>2 — 4 months</option>
                  <option>Open</option>
                </select>
              </div>
            </div>

            <div className="row">
              <label>Tell Us About The Project <span className="req">*</span></label>
              <textarea name="brief" placeholder="A short brief — what you're making, who it's for, references, deliverables, format, and anything else we should know." required disabled={success}></textarea>
            </div>

            <div className="row">
              <label>Reference Links — optional</label>
              <input type="text" name="refs" placeholder="Link to a deck, board, treatment, or reel — paste anything." disabled={success} />
            </div>

            <div className="submit-row">
              <span className="meta">All briefs read by a human. Response within 48 hours.</span>
              <button className="btn primary" type="submit" disabled={success}><span>Send Brief</span><span className="arr">&rarr;</span></button>
            </div>

            <div className={`success ${success ? 'show' : ''}`} id="success">
              <h3>Brief Received.</h3>
              <p>We'll be in touch from <strong>hello@v01.ca</strong> within 48 hours. If you don't see anything, check spam, then ping us directly.</p>
              <div className="ref">Reference &middot; V01-2026-<span>{refId}</span></div>
            </div>

          </form>

        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Engagement Tracks</div></div>
        <div className="tracks">
          <div className="track">
            <div className="num">01</div>
            <h3>Project</h3>
            <p>A single campaign, film, or piece — concept to delivery. Most engagements start here.</p>
            <p>Typical scope: 4 — 16 weeks. Defined deliverables, fixed scope, fixed bid.</p>
            <div className="who">For: Brands &middot; Artists &middot; Agencies</div>
          </div>
          <div className="track">
            <div className="num">02</div>
            <h3>Slate Partner</h3>
            <p>Multiple projects across a quarter or year. Shared planning, dedicated capacity, shared rate card.</p>
            <p>Typical scope: 6 — 18 months. Quarterly reviews. Roadmap shared.</p>
            <div className="who">For: Studios &middot; Streamers &middot; Brands</div>
          </div>
          <div className="track">
            <div className="num">03</div>
            <h3>Lab Access</h3>
            <p>Selective program for partners who want a deeper look at the lab — early access to tools, joint research, and shared learnings.</p>
            <p>Limited slots. By application only.</p>
            <div className="who">For: Studios &middot; Strategic Partners</div>
          </div>
        </div>
      </section>

      <section className="wrap end-cta">
        <div>
          <h2>Or just<br/>say hello.</h2>
          <p>Not every conversation has to start with a brief. Drop a line — we like hearing from people who care about frames.</p>
          <div className="ctas">
            <a className="btn primary" href="mailto:hello@v01.ca"><span>hello@v01.ca</span><span className="arr">&rarr;</span></a>
            <Link className="btn" href="/work"><span>See the Work</span><span className="arr">&rarr;</span></Link>
          </div>
        </div>
        <img className="media-img" src="/images/work/room-24.png" alt="V01 studio interior" />
      </section>
    </main>
  );
}
