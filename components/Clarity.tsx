"use client";

import { useEffect } from "react";
import { clarityRunning, loadClarity, onChoiceInOtherTab, shouldRecord, unloadClarity } from "@/lib/clarity";

// Starts Clarity on every page load, unless this browser turned it off on
// /privacy or sends Global Privacy Control. Off the live site (local builds,
// previews) nothing loads. See lib/clarity.ts.
export function Clarity() {
  useEffect(() => {
    loadClarity();

    // Turning recording off or on in another tab applies here as well.
    return onChoiceInOtherTab(() => {
      if (shouldRecord()) loadClarity();
      else if (clarityRunning()) unloadClarity();
    });
  }, []);

  return null;
}
