import type { ReactNode } from "react";

// The "keyed-in" picture frame: a lime outline with four corner pins.
// Children are the media (img, video or iframe) plus any chips.
export default function Frame({
  children,
  wide = false,
  className = "",
}: {
  children: ReactNode;
  wide?: boolean;
  className?: string;
}) {
  return (
    <div className={["v-frame", wide ? "v-frame--wide" : "", className].filter(Boolean).join(" ")}>
      {children}
      <span className="v-pin v-pin--tl" aria-hidden="true" />
      <span className="v-pin v-pin--tr" aria-hidden="true" />
      <span className="v-pin v-pin--bl" aria-hidden="true" />
      <span className="v-pin v-pin--br" aria-hidden="true" />
    </div>
  );
}
