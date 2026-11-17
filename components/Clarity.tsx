"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CHOICE_EVENT,
  allowClarity,
  clarityRunning,
  isLiveHost,
  loadClarity,
  onChoiceInOtherTab,
  readChoice,
  refuseClarity,
  sendsGpc,
  unloadClarity,
} from "@/lib/clarity";

// Starts Clarity for visitors who already said yes, and asks everyone else
// once with a small card in the corner. See lib/clarity.ts for why it asks.
// Off the live site (local builds, previews) nothing shows and nothing loads.
// Rendered first in <body> so keyboard and screen-reader users meet it before
// the page it sits over.
export function Clarity() {
  const [ask, setAsk] = useState(false);

  useEffect(() => {
    if (!isLiveHost() || sendsGpc()) return;
    const choice = readChoice();
    if (choice === "granted") loadClarity();
    else if (choice === null) setAsk(true);

    // A choice made on /privacy closes the card too.
    const onChoice = () => setAsk(false);
    window.addEventListener(CHOICE_EVENT, onChoice);

    // A choice made in another tab applies here as well.
    const stopWatching = onChoiceInOtherTab(() => {
      const now = readChoice();
      if (now === "granted") {
        setAsk(false);
        loadClarity();
      } else if (clarityRunning()) {
        unloadClarity();
      } else {
        setAsk(now === null);
      }
    });

    return () => {
      window.removeEventListener(CHOICE_EVENT, onChoice);
      stopWatching();
    };
  }, []);

  // While the card is up, keep focused links and buttons from scrolling in
  // underneath it.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("v-asking", ask);
    return () => root.classList.remove("v-asking");
  }, [ask]);

  if (!ask) return null;

  return (
    <section className="v-consent" data-v aria-label="Recording this visit">
      <p>
        May we record your visit? We use Microsoft Clarity, which sets cookies and sends Microsoft a recording of the
        pages you view and how you click and scroll. Nothing is recorded unless you allow it, and you can change your
        mind on the <Link href="/privacy">Privacy page</Link>.
      </p>
      <div className="v-consent__btns">
        <button type="button" onClick={allowClarity}>
          Allow
        </button>
        <button type="button" onClick={refuseClarity}>
          No thanks
        </button>
      </div>
    </section>
  );
}
