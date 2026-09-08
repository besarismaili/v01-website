"use client";

import Link from "next/link";
import { useState } from "react";
import "./page.css";

const rolesData = [
  {
    num: "01",
    title: "Senior Director, Brand Films",
    category: "Creative",
    location: "Montreal",
    type: "Full-Time",
    about: "Lead director on brand and commercial work, shaping treatments, overseeing shoots, and driving final cuts. You'll work with the lab on previz and finishing, and with our EP on production planning.",
    who: [
      "5+ years directing commercials, brand films, or shorts",
      "Reel that demonstrates a strong, distinct visual point of view",
      "Comfortable working with virtual production and AI-native pipelines",
      "Able to lead a hybrid crew, on-set and in-studio"
    ],
    dayToDay: [
      "Develop treatments and visual directions for incoming briefs",
      "Direct shoots — virtual stage, live action, or hybrid",
      "Lead review sessions with VFX supes and finishing",
      "Shape the studio's creative voice across slate"
    ]
  },
  {
    num: "02",
    title: "VFX Supervisor",
    category: "Creative",
    location: "Montreal",
    type: "Full-Time",
    about: "Own the visual effects bar across one or two productions at a time. You'll partner with directors from previz through final, supervise comp and finishing, and help define what \"Hollywood-level\" means in our pipeline.",
    who: [
      "10+ years feature or premium broadcast VFX",
      "Deep Nuke, plus working knowledge of Houdini and Resolve",
      "Strong taste — frames first, technique second"
    ],
    dayToDay: [
      "Bid VFX scope across incoming projects",
      "Run dailies, supe shoots, and review every shot",
      "Work with the lab on AI-assisted comp tooling"
    ]
  },
  {
    num: "03",
    title: "Senior ML Research Engineer",
    category: "Lab",
    location: "Montreal · Hybrid",
    type: "Full-Time",
    about: "Push the state-of-the-art on Atlas Models — our owned-data character, environment, and texture stack. Train, fine-tune, evaluate, and ship. Your work goes into productions, not papers.",
    who: [
      "Strong background in diffusion or related generative models",
      "Comfortable with PyTorch, distributed training, and inference optimization",
      "Care about how outputs look, not just how they score"
    ],
    dayToDay: [
      "Train and fine-tune image and video models on owned datasets",
      "Build evaluation harnesses with VFX supes and directors",
      "Ship models into Stack Compositor and Previz Engine"
    ]
  },
  {
    num: "04",
    title: "Pipeline TD",
    category: "Lab",
    location: "Montreal · Hybrid",
    type: "Full-Time",
    about: "The connective tissue between artists and engineers. You'll build, maintain, and extend Ledger Pipeline — V01's asset versioning and shot tracking spine.",
    who: [
      "Python, USD, and a deep grasp of VFX pipelines",
      "Have shipped a pipeline at a feature or commercial studio",
      "Can talk to artists, engineers, and producers in their own language"
    ],
    dayToDay: [
      "Own Ledger Pipeline and adjacent production tools",
      "Pair with VFX supes and TDs on per-show needs",
      "Shape conventions across DCCs (Nuke, Houdini, Maya, Resolve)"
    ]
  },
  {
    num: "05",
    title: "Senior Compositor",
    category: "Creative",
    location: "Montreal",
    type: "Full-Time / Project",
    about: "Hero-shot compositing across commercials, brand films, and select VFX/post engagements. You'll work in Stack Compositor and Nuke 15, with full autonomy on shots assigned to you.",
    who: [],
    dayToDay: [
      "Final composites on assigned shots from plate to delivery",
      "Drive look continuity across sequences",
      "Pair with the lab on tooling improvements"
    ]
  },
  {
    num: "06",
    title: "Producer · Commercials",
    category: "Production",
    location: "Montreal",
    type: "Full-Time",
    about: "Run brand and commercial productions from sketch to delivery — schedules, budgets, crews, vendors, and clients. You'll work directly with our EP and the lead director on each project.",
    who: [],
    dayToDay: [
      "Bid and bid-protect commercial work end-to-end",
      "Run shoots — physical, virtual, or hybrid",
      "Own client relationships through the project lifecycle"
    ]
  },
  {
    num: "07",
    title: "Virtual Production Supervisor",
    category: "Production",
    location: "Montreal",
    type: "Full-Time",
    about: "Lead our virtual production stage — Unreal-based scenes, camera tracking, real-time AI lookdev, and on-set integration with Live Capture.",
    who: [],
    dayToDay: [
      "Build virtual sets in UE 5.5 alongside the art team",
      "Run camera tracking and on-set previz",
      "Interface with the lab on Live Capture improvements"
    ]
  },
  {
    num: "08",
    title: "Brand Designer",
    category: "Creative",
    location: "Montreal · Hybrid",
    type: "Full-Time",
    about: "Visual identity, marketing, and case studies for V01 itself. You'll own how we look and read across web, social, decks, and printed work.",
    who: [],
    dayToDay: [
      "Run the V01 brand system across every surface",
      "Design case studies, decks, and event materials",
      "Partner with marketing on launches and campaigns"
    ]
  },
  {
    num: "09",
    title: "People Operations Lead",
    category: "Operations",
    location: "Montreal",
    type: "Full-Time",
    about: "Hiring, onboarding, growth, and the daily operations that make a 42-person studio feel like a 12-person one. Reports to the Head of Operations.",
    who: [],
    dayToDay: [
      "Run hiring across every discipline at V01",
      "Lead onboarding and first-90-days for every new hire",
      "Own performance, growth, and feedback systems"
    ]
  }
];

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState("All Disciplines");
  const [openRole, setOpenRole] = useState<string | null>(null);

  const filters = ["All Disciplines", "Creative", "Lab / Engineering", "Production", "Operations"];

  const filteredRoles = activeFilter === "All Disciplines"
    ? rolesData
    : rolesData.filter(role => role.category === activeFilter || role.category.includes(activeFilter.split(" / ")[0]));

  const toggleRole = (num: string) => {
    setOpenRole(openRole === num ? null : num);
  };

  return (
    <main data-page="careers">
      <section className="wrap page-head">
        <div className="breadcrumb"><Link href="/">V01</Link><span>/</span><Link href="/about">About</Link><span>/</span><span>Careers</span></div>
        <h1>Make the<br/>next thing<br/>with us.</h1>
        <p className="lede">V01 hires filmmakers who care about frames and engineers who care about taste. We're a small studio building a long body of work — and the people we hire shape every part of it.</p>
        <div className="page-meta">
          <div className="pm"><h5>Open Roles</h5><p>09 / Across 4 disciplines</p></div>
          <div className="pm"><h5>Team Size</h5><p>42 people</p></div>
          <div className="pm"><h5>Studios</h5><p>Montreal · Prishtina</p></div>
          <div className="pm"><h5>Working</h5><p>Hybrid &middot; Remote-friendly</p></div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="car-hero">
          <div className="ph" data-label="STUDIO INTERIOR — REVIEW ROOM"><span className="ph-mid">[ STUDIO INTERIOR ]</span></div>
          <div className="ph tall" data-label="ARTIST AT WORKSTATION"><span className="ph-mid">[ ARTIST AT WORK ]</span></div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="manifesto">
          <div>
            <div className="eyebrow" style={{marginBottom:"14px"}}>Why Work Here</div>
            <h2>You'll touch<br/>the frame.</h2>
          </div>
          <div>
            <p>Most studios silo their people. The director never sees the ML pipeline. The TD never sees the cut. The artist gets a brief and a deadline and that's it.</p>
            <p>V01 is built the other way. <strong>Everyone at the studio gets close to the frame</strong> — the engineers ship inside real productions, the directors get to shape the tools, the artists get to break what doesn't work and rebuild it.</p>
            <div className="pull">"Small team. Wide remit. Real frames on real screens."</div>
            <p>If you want to do the work of three jobs, mostly because you can't help yourself, this is probably the place. <em>Bring taste. We'll bring the rest.</em></p>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="metrics">
          <div className="metric"><div className="num">42</div><div className="lbl">People</div><div className="desc">Across creative, lab, production, and operations.</div></div>
          <div className="metric"><div className="num">4.6 yrs</div><div className="lbl">Median Tenure</div><div className="desc">People stay because the work compounds.</div></div>
          <div className="metric"><div className="num">100%</div><div className="lbl">Health Coverage</div><div className="desc">Medical, dental, vision &middot; fully covered.</div></div>
          <div className="metric"><div className="num">21</div><div className="lbl">Awards Shipped</div><div className="desc">Cannes &middot; D&amp;AD &middot; Ciclope &middot; UKMVA &middot; VES.</div></div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">How We Hire</div></div>
        <div className="values">
          <div className="val">
            <div className="num">01</div>
            <h3>Taste, Then Skill</h3>
            <p>Skill we can sharpen. Taste is harder. We hire for an eye, an ear, and a point of view — then we put real shots in front of you.</p>
          </div>
          <div className="val">
            <div className="num">02</div>
            <h3>Generalists Welcome</h3>
            <p>If your résumé doesn't fit a single role we still want to hear from you. The best people we've hired draw on three or four disciplines.</p>
          </div>
          <div className="val">
            <div className="num">03</div>
            <h3>Show The Work</h3>
            <p>Reels, GitHubs, journals, side projects, weird experiments — show us what you're already making, even if it's unfinished.</p>
          </div>
          <div className="val">
            <div className="num">04</div>
            <h3>No Take-Home Theater</h3>
            <p>We don't ask for unpaid spec work. If we go deep on a problem together, we pay for your time.</p>
          </div>
          <div className="val">
            <div className="num">05</div>
            <h3>Real Decisions, Fast</h3>
            <p>Two-week process from intro to offer. You'll meet the people you'd actually work with, on day one.</p>
          </div>
          <div className="val">
            <div className="num">06</div>
            <h3>Fit Goes Both Ways</h3>
            <p>You'll spend time with the lab, the studio, and at least one director or supe. We want you to know what you're walking into.</p>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head">
          <div className="sec-title">Open Roles &middot; 09</div>
          <div className="sec-title">Updated Apr 28, 2026</div>
        </div>
        <div className="filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="roles" id="roles">
          {filteredRoles.map(role => (
            <div key={role.num}>
              <div className="role" data-row onClick={() => toggleRole(role.num)}>
                <div className="num">{role.num}</div>
                <h3>{role.title}</h3>
                <div className="meta">{role.category}</div>
                <div className="meta">{role.location}</div>
                <div className="meta">{role.type}</div>
                <div className="arr">{openRole === role.num ? '−' : '+'}</div>
              </div>
              <div className={`role sub ${openRole === role.num ? 'open' : ''}`}>
                <div className="inner">
                  <div></div>
                  <div>
                    <h4>About the Role</h4>
                    <p>{role.about}</p>
                    {role.who.length > 0 && (
                      <>
                        <h4 style={{marginTop:"18px"}}>Who You Are</h4>
                        <ul>
                          {role.who.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </>
                    )}
                  </div>
                  <div>
                    <h4>Day-to-Day</h4>
                    <ul>
                      {role.dayToDay.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    <Link href="/access" className="apply"><span>Apply for this Role</span><span>&rarr;</span></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Benefits &amp; Practice</div></div>
        <div className="benefits">
          <div className="ben">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>
            <h4>Health, Fully Covered</h4>
            <p>Medical, dental, vision &middot; 100% covered for you and dependents.</p>
          </div>
          <div className="ben">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>
            <h4>Real Time Off</h4>
            <p>Unlimited PTO with a 4-week minimum. Studio closes 2 weeks in December.</p>
          </div>
          <div className="ben">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="6" width="18" height="3"/><rect x="3" y="11" width="18" height="3"/><rect x="3" y="16" width="18" height="3"/></svg>
            <h4>401(k) &middot; 4% Match</h4>
            <p>Vests immediately. We'll never claw it back.</p>
          </div>
          <div className="ben">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M5 7l7 5 7-5M5 12l7 5 7-5M5 17l7 5 7-5"/></svg>
            <h4>Tools Stipend</h4>
            <p>$2,500 / yr for software, hardware, and reference. No approvals.</p>
          </div>
          <div className="ben">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="9" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>
            <h4>Parental Leave</h4>
            <p>16 weeks paid for any new parent. Phased return on your terms.</p>
          </div>
          <div className="ben">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>
            <h4>Learning Budget</h4>
            <p>$3,000 / yr for courses, conferences, and travel for craft.</p>
          </div>
          <div className="ben">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18"/><path d="M3 9h18M9 3v18"/></svg>
            <h4>Side Projects</h4>
            <p>Time and tools to make your own work. We want you weirder.</p>
          </div>
          <div className="ben">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13 13 0 010 18M12 3a13 13 0 000 18"/></svg>
            <h4>Hybrid &middot; Remote-Friendly</h4>
            <p>Most roles 3 days in-studio. Some fully remote — flagged on the role.</p>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">The Process</div></div>
        <div className="proc">
          <div className="step"><div className="num">01</div><h4>Apply</h4><p>Send your reel, GitHub, or portfolio with a short note about what you want to make.</p><div className="when">~ 5 minutes</div></div>
          <div className="step"><div className="num">02</div><h4>Intro Call</h4><p>30-min chat with people ops and your future hiring manager.</p><div className="when">Within 1 week</div></div>
          <div className="step"><div className="num">03</div><h4>Craft Conversation</h4><p>Deep dive on your work. We walk through real frames, real shots, real code.</p><div className="when">Week 1–2</div></div>
          <div className="step"><div className="num">04</div><h4>Studio Day</h4><p>Half a day in the studio (or video equivalent). Meet the team. Pair on a real problem — paid.</p><div className="when">Week 2</div></div>
          <div className="step"><div className="num">05</div><h4>Decision</h4><p>Reference checks, offer, or honest feedback either way. No silence.</p><div className="when">Week 2–3</div></div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">From the Team</div></div>
        <div className="testi">
          <div className="t">
            <blockquote>"I came in to comp one show. I stayed because I got to shape the tools I'm using next year."</blockquote>
            <cite><div className="av"></div><div><div className="who">Idris Khoury</div><span className="role">VFX Supervisor &middot; 3 yrs</span></div></cite>
          </div>
          <div className="t">
            <blockquote>"Everything I ship goes into a frame within weeks. That's the bar."</blockquote>
            <cite><div className="av"></div><div><div className="who">Sora Lin</div><span className="role">Head of AI Systems &middot; 2 yrs</span></div></cite>
          </div>
          <div className="t">
            <blockquote>"It's the first studio where the EP, the TD, and the director all read the same brief."</blockquote>
            <cite><div className="av"></div><div><div className="who">Elliot Pace</div><span className="role">Executive Producer &middot; 4 yrs</span></div></cite>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Where We Work</div></div>
        <div className="studios">
          <div className="studio">
            <img className="media-img" src="/images/work/tsvc/hero.jpg" alt="V01 Montreal studio" />
            <h4>Montreal &middot; HQ</h4>
            <div className="meta">Downtown &middot; 2001 Blvd Robert-Bourassa</div>
            <p>Production stages, virtual capture, finishing suites, and the lab. Most full-time roles are Montreal-based.</p>
          </div>
          <div className="studio">
            <img className="media-img" src="/images/work/sola/hero.jpg" alt="V01 Prishtina studio" />
            <h4>Prishtina &middot; Studio</h4>
            <div className="meta">Kosovo &middot; Europe</div>
            <p>Creative development, VFX, AI systems, and production collaboration, connected directly with Montreal.</p>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div className="sec-title">Common Questions</div></div>
        <div className="faq">
          <div className="faq-item"><span>Do you sponsor visas?</span><span className="plus">+</span></div>
          <div className="faq-item"><span>Are remote roles available?</span><span className="plus">+</span></div>
          <div className="faq-item"><span>Do you take freelancers and contractors?</span><span className="plus">+</span></div>
          <div className="faq-item"><span>Can I apply if my background is non-traditional?</span><span className="plus">+</span></div>
          <div className="faq-item"><span>Is salary range published with the role?</span><span className="plus">+</span></div>
          <div className="faq-item"><span>What does compensation look like?</span><span className="plus">+</span></div>
          <div className="faq-item"><span>Will my work be used to train models?</span><span className="plus">+</span></div>
          <div className="faq-item"><span>Do interns and apprentices get paid?</span><span className="plus">+</span></div>
        </div>
      </section>

      <section className="wrap end-cta">
        <div>
          <h2>Don't see<br/>your role?</h2>
          <p>If your background sits between disciplines, send us a note anyway. We hire when we meet the right person, not just when there's an open req.</p>
          <div className="ctas">
            <a className="btn primary" href="mailto:careers@v01.ca"><span>careers@v01.ca</span><span className="arr">&rarr;</span></a>
            <Link className="btn" href="/about"><span>About the Studio</span><span className="arr">&rarr;</span></Link>
          </div>
        </div>
        <div className="ph" data-label="STUDIO TEAM — END FRAME"><span className="ph-mid">[ TEAM IMAGE ]</span></div>
      </section>
    </main>
  );
}
