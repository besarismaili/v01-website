"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
  img: string;
  alt: string;
  // Short facts under the title, for example client, length and one line of proof.
  meta: (string | number)[];
  // The link label on the right of the facts line.
  go: string;
  // Optional film. On desktop it plays muted over the still while the card is hovered.
  video?: string;
  // How many of the grid's six columns the card takes.
  span?: number;
  // Position in its row, used to stagger the scroll reveal.
  order?: number;
  imgPosition?: string;
};

// A project card: a large 16:9 still, the title, and a line of facts. Used in
// the work grids on the homepage and the Work page.
export default function WorkCard({ href, title, img, alt, meta, go, video, span = 2, order = 0, imgPosition }: Props) {
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
      className="v-card"
      data-reveal
      style={{ "--span": span, "--i": order } as React.CSSProperties}
      onPointerEnter={enter}
      onPointerLeave={leave}
      onFocus={enter}
      onBlur={leave}
    >
      <span className="v-card__img">
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
      <span className="v-card__title">{title}</span>
      <span className="v-card__meta">
        {meta.map((m) => (
          <span key={m}>{m}</span>
        ))}
        <span className="v-card__go">
          {go} <span className="v-arr" aria-hidden="true">&rarr;</span>
        </span>
      </span>
    </Link>
  );
}
