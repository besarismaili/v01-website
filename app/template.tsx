"use client";

// A template re-mounts on every navigation, so the blue plate wipes away over
// each new page (see .v-plate in globals.css).
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="v-plate" aria-hidden="true" />
      {children}
    </>
  );
}
