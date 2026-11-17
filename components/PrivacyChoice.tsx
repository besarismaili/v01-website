"use client";

import { useEffect, useState } from "react";
import {
  CHOICE_EVENT,
  isLiveHost,
  onChoiceInOtherTab,
  readChoice,
  sendsGpc,
  turnClarityOff,
  turnClarityOn,
  type ClarityChoice,
} from "@/lib/clarity";

type State = ClarityChoice | "gpc" | "elsewhere";

function current(): State {
  if (!isLiveHost()) return "elsewhere";
  if (sendsGpc()) return "gpc";
  return readChoice();
}

// The switch on /privacy: shows whether this browser is recorded and lets the
// visitor turn it off or back on.
export default function PrivacyChoice() {
  // null until mounted: the choice lives in the browser, not on the server.
  const [state, setState] = useState<State | null>(null);

  useEffect(() => {
    const sync = () => setState(current());
    sync();
    window.addEventListener(CHOICE_EVENT, sync);
    const stopWatching = onChoiceInOtherTab(sync);
    return () => {
      window.removeEventListener(CHOICE_EVENT, sync);
      stopWatching();
    };
  }, []);

  if (state === null) return null;

  if (state === "elsewhere") {
    return <p className="v-choice">Recording only runs on v01.ca, so nothing is recorded here.</p>;
  }

  if (state === "gpc") {
    return (
      <p className="v-choice" role="status">
        Your browser sends Global Privacy Control, so your visits are not recorded.
      </p>
    );
  }

  const on = state === "on";
  return (
    <div className="v-choice">
      <p role="status">{on ? "Recording is on in this browser." : "Recording is off in this browser."}</p>
      {/* One button whose label changes, so keyboard focus stays on it. */}
      <button type="button" className="v-btn v-btn--ink v-btn--mono" onClick={on ? turnClarityOff : turnClarityOn}>
        {on ? "Turn recording off" : "Turn recording on"}
      </button>
    </div>
  );
}
