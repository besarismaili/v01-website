import { SITE_URL } from "@/lib/seo";

// Microsoft Clarity: heatmaps and session recordings, so we can see how
// visitors use the site. The ID is the studio's Clarity project.
//
// Nothing loads until the visitor presses Allow on the small notice
// (components/Clarity.tsx). EU and UK regulators treat session recording as
// needing consent first, with or without cookies, so Clarity's own
// cookie-free mode is not enough on its own. The choice is kept in this
// browser and can be changed on /privacy.
export const CLARITY_ID = "zf4zqxhfez";

// Only the live site reports to Clarity, so local builds and hosting
// previews never show up in the data. The other addresses all redirect to
// SITE_URL, so this is the only host real visitors end up on.
export const LIVE_HOST = new URL(SITE_URL).hostname;

export type ClarityChoice = "granted" | "denied";

const STORAGE_KEY = "v01-clarity";
// Fired on window whenever the choice changes, so the notice and the switch
// on /privacy stay in step.
export const CHOICE_EVENT = "v01:clarity-choice";

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[] };
type ClarityWindow = Window & { clarity?: ClarityFn };

export function isLiveHost(): boolean {
  return window.location.hostname === LIVE_HOST;
}

// Browsers that send Global Privacy Control are never asked and never
// recorded. Clarity itself also refuses to start for them.
export function sendsGpc(): boolean {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

// If the browser blocks storage, the choice is kept here instead, so it
// holds until the page is reloaded.
let pageChoice: ClarityChoice | null = null;

export function readChoice(): ClarityChoice | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "granted" || v === "denied") return v;
  } catch {
    // Storage blocked: fall back to the choice made on this page.
  }
  return pageChoice;
}

function writeChoice(choice: ClarityChoice) {
  pageChoice = choice;
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage blocked: pageChoice above still holds it.
  }
  window.dispatchEvent(new CustomEvent<ClarityChoice>(CHOICE_EVENT, { detail: choice }));
}

// Calls back when the choice is changed in another tab of the site.
export function onChoiceInOtherTab(callback: () => void): () => void {
  const onStorage = (e: StorageEvent) => {
    if (e.key === null || e.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", onStorage);
  return () => window.removeEventListener("storage", onStorage);
}

export function clarityRunning(): boolean {
  return Boolean((window as ClarityWindow).clarity);
}

// Adds Clarity's loader (the snippet from the Clarity dashboard, Setup >
// Install tracking code) and tells it what the visitor agreed to: cookies that
// join one visit's pages and recognise return visits, and nothing for
// advertising. The key names must be spelled exactly like this.
export function loadClarity() {
  if (!isLiveHost() || sendsGpc()) return;
  const w = window as ClarityWindow;
  if (!w.clarity) {
    // Microsoft's snippet, unchanged apart from types.
    (function (c: ClarityWindow, l: Document, a: "clarity", r: string, i: string) {
      c[a] =
        c[a] ||
        function () {
          (c[a]!.q = c[a]!.q || []).push(arguments);
        };
      const t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      const y = l.getElementsByTagName(r)[0];
      y.parentNode!.insertBefore(t, y);
    })(w, document, "clarity", "script", CLARITY_ID);
  }
  w.clarity!("consentv2", { ad_Storage: "denied", analytics_Storage: "granted" });
}

export function allowClarity() {
  writeChoice("granted");
  loadClarity();
}

// Clarity's own cookies on this site. Clarity sets them on the top domain,
// so both forms are cleared.
const CLARITY_COOKIES = ["_clck", "_clsk"];
function clearClarityCookies() {
  for (const name of CLARITY_COOKIES) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${LIVE_HOST}`;
  }
}

// Stops a running Clarity, removes its cookies and reloads the page so its
// script is gone. "stop" is used rather than consentv2 "denied": a denial
// makes Clarity restart in a cookie-free mode 250 ms later and record again
// until the reload lands.
export function unloadClarity() {
  (window as ClarityWindow).clarity?.("stop");
  clearClarityCookies();
  window.location.reload();
}

// No thanks, or turning recording off after saying yes. Before Allow nothing
// is loaded, so only the choice is saved.
export function refuseClarity() {
  const wasRunning = clarityRunning();
  if (wasRunning) (window as ClarityWindow).clarity!("stop");
  clearClarityCookies();
  writeChoice("denied");
  if (wasRunning) window.location.reload();
}
