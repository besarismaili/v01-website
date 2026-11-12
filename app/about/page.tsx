import PageHead from "@/components/PageHead";
import Frame from "@/components/Frame";
import Link from "next/link";
import EndCta from "@/components/EndCta";
import { pageMeta } from "@/lib/seo";
import "./page.css";

export const metadata = pageMeta({
  title: "V01 — About",
  description: "VERSION ONE is an AI-native VFX studio for commercials and film sequences. AI-native VFX for production, not prototypes.",
  path: "/about",
});

// The four stages of a job, in order.
const steps = [
  { title: "Brief", text: "You send the script or boards, references and the delivery date." },
  { title: "Test shot", text: "We take one shot to a finished frame, so you can judge the look before the full job starts." },
  {
    title: "Production",
    text: "Every shot moves through one pipeline, where AI generation, compositing in Nuke and the grade work together. You sign off at each stage.",
  },
  { title: "Delivery", text: "A finished master in the formats you need." },
];

export default function AboutPage() {
  return (
    <main data-v data-page="about">
      <PageHead
        crumbs={[{ label: "V01", href: "/" }, { label: "About" }]}
        title={<>Small studio. Feature-film VFX.</>}
        lede="VERSION ONE (V01) is an AI-native VFX studio. We make commercials and film sequences with generative tools, and finish them with the care of a feature-film VFX pipeline."
      >
        <dl className="v-facts">
          <div><dt>Team</dt><dd>Core team, plus specialists per project</dd></div>
          <div><dt>Based</dt><dd>Montreal / Prishtina</dd></div>
          <div><dt>Working</dt><dd>Worldwide</dd></div>
        </dl>
      </PageHead>

      <section className="v-straddle" aria-label="Studio work in the world">
        <div className="v-wrap">
          <figure style={{ margin: 0 }}>
            <Frame wide>
              <img src="/images/work/tbcb/ooh-wall.jpg" alt="Bonds, Corporate Bonds campaign on a city wall" data-reveal="wipe" />
            </Frame>
            <figcaption className="v-cap">Bonds, Corporate Bonds. / Campaign execution</figcaption>
          </figure>
        </div>
      </section>

      <section className="v-sec v-sec--white">
        <div className="v-wrap">
          <div className="v-tag v-tag--ink v-sec__tag" data-reveal>01 / Approach</div>
          <div className="v-split">
            <h2 className="v-h2 v-split__a v-about-h" data-reveal>Production, not prototypes.</h2>
            <div className="v-split__b v-copy" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <p>
                Getting a model to make an image is easy now. Getting a shot a director will sign off on, one that
                matches the shot before it and holds up in the grade, is the hard part.{" "}
                <strong>That is the part we work on.</strong>
              </p>
              <p>
                We use whichever models suit the shot and switch when something better arrives. Generated frames are
                then composited in Nuke, edited, graded and delivered as a finished master, and a person signs off
                every important creative and technical step.
              </p>
              <p>We are not a prompt agency and we don&rsquo;t make volume content.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="v-sec v-sec--pure" aria-label="How a job runs">
        <div className="v-wrap">
          <div className="v-tag v-sec__tag" data-reveal>02 / How a job runs</div>
          <ol className="v-steps">
            {steps.map((s, i) => (
              <li className="v-step" key={s.title} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <span className="v-step__n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="v-h3">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="v-steps-more" data-reveal>
            <Link className="v-link" href="/test-shot">
              How the test shot works <span className="v-arr" aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="v-sec">
        <div className="v-wrap">
          <div className="v-tag v-sec__tag" data-reveal>03 / Studio</div>
          <div className="v-split">
            <h2 className="v-h2 v-split__a v-about-h" data-reveal>Small core. Specialists per job.</h2>
            <div className="v-split__b v-copy v-about-dark" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <p>
                Our founder has more than 15 years of feature-film VFX experience, including compositing at MPC,
                Framestore and FX3X. The studio takes that finishing discipline into generative filmmaking.
              </p>
              <p>
                Our core team leads every project and brings in specialist artists, editors and producers when a job
                calls for them.
              </p>
              <p>Those film credits appear on the home page as founder credits, not as V01 work.</p>
            </div>
          </div>
        </div>
      </section>

      <EndCta
        title={<>Working worldwide.</>}
        text="We work with directors, agencies, production companies and VFX vendors in any timezone. If you have a sequence that needs to hold up, get in touch."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "/work", label: "See the work" }}
      />
    </main>
  );
}
