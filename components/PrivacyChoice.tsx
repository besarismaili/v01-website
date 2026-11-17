"use client";

import { useEffect, useRef, useState } from "react";
import {
  CHOICE_EVENT,
  allowClarity,
  isLiveHost,
  onChoiceInOtherTab,
  readChoice,
  refuseClarity,
  sendsGpc,
  type ClarityChoice,
} from "@/lib/clarity";

type State = ClarityChoice | "unset" | "gpc" | "elsewhere";

function current(): State {
  if (!isLiveHost()) return "elsewhere";
  if (sendsGpc()) return "gpc";
  return readChoice() ?? "unset";
}

// The switch on /privacy: shows what this browser chose about Clarity and
// lets the visitor change it, as easily as they gave it.
export default function PrivacyChoice() {
  // null until mounted: the choice lives in the browser, not on the server.
  const [state, setState] = useState<State | null>(null);
  const allowRef = useRef<HTMLButtonElement>(null);

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
        Your browser sends Global Privacy Control, so your visit is not recorded.
      </p>
    );
  }

  const on = state === "granted";
  return (
    <div className="v-choice">
      <p role="status">
        {on
          ? "Recording is on in this browser."
          : state === "denied"
            ? "Recording is off in this browser."
            : "You haven’t chosen yet, so nothing is recorded."}
      </p>
      <div className="v-btns">
        {on ? (
          <button type="button" className="v-btn v-btn--ink v-btn--mono" onClick={refuseClarity}>
            Turn recording off
          </button>
        ) : (
          <>
            <button ref={allowRef} type="button" className="v-btn v-btn--ink v-btn--mono" onClick={allowClarity}>
              Allow recording
            </button>
            {state === "unset" && (
              <button
                type="button"
                className="v-btn v-btn--ink v-btn--mono"
                onClick={() => {
                  refuseClarity();
                  // This button goes away once the choice is saved, so keep
                  // keyboard focus on the one that stays.
                  allowRef.current?.focus();
                }}
              >
                No thanks
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
