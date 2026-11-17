import PageHead from "@/components/PageHead";
import PrivacyChoice from "@/components/PrivacyChoice";
import { pageMeta, STUDIO } from "@/lib/seo";

export const metadata = pageMeta({
  title: "V01 — Privacy",
  description:
    "What the VERSION ONE website records when you visit with Microsoft Clarity, and how to turn it off.",
  path: "/privacy",
});

const MS_PRIVACY = "https://www.microsoft.com/privacy/privacystatement";

// Keep this in step with lib/clarity.ts and with what the Clarity project is
// set to. Say only what is true of the site today.
const rules = [
  {
    title: "What we record",
    text: (
      <>
        We use Microsoft Clarity to see how people use this site. It records the pages you view, how you click, scroll
        and move around them, and your device, browser and country. You can turn it off at the bottom of this page.
      </>
    ),
  },
  {
    title: "What is hidden",
    text: <>Clarity masks email addresses and numbers in recordings. There are no forms on this site.</>,
  },
  {
    title: "Cookies",
    text: (
      <>
        In the European Economic Area, the UK and Switzerland, Clarity sets no cookies on this site, so each page you
        view is recorded on its own. Elsewhere it stores two: _clsk, which lasts a day and joins the pages of one visit
        into one recording, and _clck, which lasts a year and lets Clarity recognise this browser when you come back.
        Microsoft may also set its own cookies on its domains, such as CLID and MUID.
      </>
    ),
  },
  {
    title: "Microsoft",
    text: (
      <>
        Clarity is a Microsoft service. Microsoft receives the recordings and handles them under the{" "}
        <a href={MS_PRIVACY}>Microsoft Privacy Statement</a>, which can mean storing them outside your country. Outside
        the European Economic Area, the UK and Switzerland, Clarity’s standard settings also let Microsoft use the data
        for advertising. Microsoft keeps most recordings for 30 days, and click data, heatmaps, recordings we mark as
        favourites and a random sample of recordings for up to 9 months.
      </>
    ),
  },
  {
    title: "Other services",
    text: (
      <>
        Our web host logs each request, including your IP address, the page and your browser. Our fonts load from
        Google Fonts, and some film pages play video through Vimeo’s player with its tracking turned off. Both see your
        IP address when they load.
      </>
    ),
  },
  {
    title: "Questions",
    text: (
      <>
        You can ask what personal information we hold about you and have it corrected, and you can complain to a data
        protection authority, such as Quebec’s Commission d’accès à l’information. Privacy questions and requests go to
        the person in charge of personal information at VERSION ONE, at{" "}
        <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main data-v data-page="privacy">
      <PageHead
        crumbs={[{ label: "V01", href: "/" }, { label: "Privacy" }]}
        title="Privacy."
        lede="What this website records when you visit, and how to turn it off."
      />

      <section className="v-sec v-sec--white">
        <div className="v-wrap">
          <dl className="v-rules">
            {rules.map((r, i) => (
              <div className="v-rule" key={r.title} data-reveal style={{ "--i": i % 3 } as React.CSSProperties}>
                <dt className="v-h3">{r.title}</dt>
                <dd>{r.text}</dd>
              </div>
            ))}
            <div className="v-rule" id="choice">
              <dt className="v-h3">Your choice</dt>
              <dd>
                <p className="v-choice__note">
                  Turning recording off stops Clarity in this browser and deletes its cookies on this site. We keep that
                  choice in your browser. Microsoft’s own cookies can be cleared in your browser settings. Recordings
                  already made can’t be deleted one by one, so they stay with Microsoft until they expire. Browsers that
                  send Global Privacy Control are never recorded.
                </p>
                <PrivacyChoice />
                <noscript>JavaScript is off in your browser, so nothing is recorded.</noscript>
              </dd>
            </div>
          </dl>
          <p className="v-rules__note">Updated 17 November 2026.</p>
        </div>
      </section>
    </main>
  );
}
