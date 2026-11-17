import { SITE_URL } from "@/lib/seo";

// Microsoft Clarity: heatmaps and session recordings, so we can see how
// visitors use the site. The ID is the studio's Clarity project.
//
// Clarity loads for every visitor, with no notice (the studio's call,
// 2026-11-17). We send Clarity no consent signal, so Microsoft's regional
// defaults apply: in the EEA, the UK and Switzerland it records without its
// cookies; elsewhere it follows the project's settings. Visitors can turn it
// off on /privacy, and browsers that send Global Privacy Control are never
// recorded. Keep app/privacy/page.tsx in step with this file.
export const CLARITY_ID = "zf4zqxhfez";

// Only the live site reports to Clarity, so local builds and hosting
// previews never show up in the data. The other addresses all redirect to
// SITE_URL, so this is the only host real visitors end up on.
export const LIVE_HOST = new URL(SITE_URL).hostname;

export type ClarityChoice = "on" | "off";

const STORAGE_KEY = "v01-clarity";
// Fired on window whenever the choice changes, so every part of the page
// that shows it stays in step.
export const CHOICE_EVENT = "v01:clarity-choice";

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[] };
type ClarityWindow = Window & { clarity?: ClarityFn };

export function isLiveHost(): boolean {
  return window.location.hostname === LIVE_HOST;
}

// Browsers that send Global Privacy Control are never recorded. Clarity
// itself also refuses to start for them.
export function sendsGpc(): boolean {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

// If the browser blocks storage, the choice is kept here instead, so it
// holds until the page is reloaded.
let pageChoice: ClarityChoice | null = null;

// "off" only once the visitor has turned recording off; on by default.
export function readChoice(): ClarityChoice {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "on" || v === "off") return v;
  } catch {
    // Storage blocked: fall back to the choice made on this page.
  }
  return pageChoice ?? "on";
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

// Whether this browser should be recorded right now.
export function shouldRecord(): boolean {
  return isLiveHost() && !sendsGpc() && readChoice() === "on";
}

// Adds Clarity's loader, the snippet from the Clarity dashboard (Setup >
// Install tracking code), once per page load.
export function loadClarity() {
  if (!shouldRecord()) return;
  const w = window as ClarityWindow;
  if (w.clarity) return;
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
// script is gone. "stop" is used rather than a consent call: withdrawing
// consent makes Clarity restart in a cookie-free mode 250 ms later and record
// again until the reload lands.
export function unloadClarity() {
  (window as ClarityWindow).clarity?.("stop");
  clearClarityCookies();
  window.location.reload();
}

export function turnClarityOn() {
  writeChoice("on");
  loadClarity();
}

export function turnClarityOff() {
  const wasRunning = clarityRunning();
  if (wasRunning) (window as ClarityWindow).clarity!("stop");
  clearClarityCookies();
  writeChoice("off");
  if (wasRunning) window.location.reload();
}
