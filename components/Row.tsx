"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Props = {
  n: number;
  href: string;
  title: string;
  meta: string;
  img: string;
  alt: string;
  // Optional film. On desktop it plays muted over the still while the row is hovered.
  video?: string;
  // Founder credits get a lime tag instead of an arrow, and a quieter hover.
  credit?: boolean;
  imgPosition?: string;
};

export default function Row({ n, href, title, meta, img, alt, video, credit = false, imgPosition }: Props) {
  const [armed, setArmed] = useState(false);
  const [hover, setHover] = useState(false);
  const [playing, setPlaying] = useState(false);
  const vid = useRef<HTMLVideoElement>(null);
  const canPlay = useRef(false);

  useEffect(() => {
    canPlay.current =
      !!video &&
      window.matchMedia("(hover: hover)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, [video]);

  useEffect(() => {
    const v = vid.current;
    if (!v) return;
    if (hover) {
      const p = v.play();
      if (p) p.catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  }, [hover, armed]);

  const enter = () => {
    if (!canPlay.current) return;
    setArmed(true);
    setHover(true);
  };
  const leave = () => setHover(false);

  return (
    <Link
      href={href}
      className={`v-row${credit ? " v-row--credit" : ""}`}
      onPointerEnter={enter}
      onPointerLeave={leave}
      onFocus={enter}
      onBlur={leave}
    >
      <span className="v-row__n">{String(n).padStart(2, "0")}</span>
      <span className="v-row__thumb">
        <img src={img} alt={alt} loading="lazy" style={imgPosition ? { objectPosition: imgPosition } : undefined} />
        {armed && video && (
          <video
            ref={vid}
            className={playing ? "is-playing" : ""}
            src={`${video}#t=2`}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            onPlaying={() => setPlaying(true)}
          />
        )}
      </span>
      <span className="v-row__body">
        <span className="v-row__title">{title}</span>
        <span className="v-row__meta">{meta}</span>
        {credit && <span className="v-credit">Founder credit</span>}
      </span>
      {!credit && <span className="v-row__arr" aria-hidden="true">&rarr;</span>}
    </Link>
  );
}
