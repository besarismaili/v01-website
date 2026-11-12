"use client";

import { usePathname } from "next/navigation";

// A template re-mounts on every navigation, so the blue plate wipes away over
// each new page (see .v-plate in globals.css). /admin and /login skip it.
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const legacy = pathname.startsWith("/admin") || pathname.startsWith("/login");

  return (
    <>
      {!legacy && <div className="v-plate" aria-hidden="true" />}
      {children}
    </>
  );
}
