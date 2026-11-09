"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  media?: "image" | "video";
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  craft?: string;
  note?: string;
};

function isVideoSrc(src: string, media?: "image" | "video") {
  if (media) return media === "video";
  return /\.(mp4|webm|mov)(\?|$)/i.test(src);
}

export default function WipeCompare({
  before,
  after,
  media,
  beforeAlt = "Before plate",
  afterAlt = "After delivery",
  title,
  craft,
  note,
}: Props) {
  const video = isVideoSrc(before, media) || isVideoSrc(after, media);
  const [pos, setPos] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const afterMedia = useRef<HTMLVideoElement>(null);
  const beforeMedia = useRef<HTMLVideoElement>(null);
  const dragging = useRef(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const labelId = useId();

  const setFromClientX = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "touch") {
      // Wait to see whether this is a horizontal drag or a vertical page scroll.
      touchStart.current = { x: e.clientX, y: e.clientY };
      return;
    }
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current && touchStart.current) {
      const dx = e.clientX - touchStart.current.x;
      const dy = e.clientY - touchStart.current.y;
      if (Math.abs(dx) <= 6 || Math.abs(dx) <= Math.abs(dy)) return;
      dragging.current = true;
      try {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      } catch {}
    }
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const start = touchStart.current;
    // A tap (no real movement) still jumps the divider to the finger.
    if (!dragging.current && start && Math.abs(e.clientX - start.x) <= 6 && Math.abs(e.clientY - start.y) <= 6) {
      setFromClientX(e.clientX);
    }
    dragging.current = false;
    touchStart.current = null;
  };

  const onPointerCancel = () => {
    dragging.current = false;
    touchStart.current = null;
  };

  useEffect(() => {
    if (!video) return;
    const a = afterMedia.current;
    const b = beforeMedia.current;
    if (!a || !b) return;

    const playBoth = () => {
      const p1 = a.play();
      const p2 = b.play();
      if (p1) p1.catch(() => {});
      if (p2) p2.catch(() => {});
    };

    const sync = () => {
      if (b.seeking || !a.duration) return;
      const drift = Math.abs(b.currentTime - a.currentTime);
      // Only correct real drift. Small jitter is left alone, otherwise the
      // "before" clip is re-seeking constantly and stutters. Both clips restart
      // together on "ended" (no native loop), so they start every pass in sync.
      if (drift > 0.1 && drift < a.duration - 0.1) {
        b.currentTime = a.currentTime;
      }
    };

    const restart = () => {
      a.currentTime = 0;
      b.currentTime = 0;
      playBoth();
    };

    const onMeta = () => {
      a.currentTime = 0;
      b.currentTime = 0;
      playBoth();
    };

    a.addEventListener("timeupdate", sync);
    a.addEventListener("ended", restart);
    a.addEventListener("loadedmetadata", onMeta);
    b.addEventListener("loadedmetadata", playBoth);
    playBoth();

    return () => {
      a.removeEventListener("timeupdate", sync);
      a.removeEventListener("ended", restart);
      a.removeEventListener("loadedmetadata", onMeta);
      b.removeEventListener("loadedmetadata", playBoth);
    };
  }, [video, before, after]);

  const mediaProps = {
    className: "wipe-img",
    muted: true,
    playsInline: true,
    autoPlay: true,
    preload: "auto" as const,
    disablePictureInPicture: true,
    controls: false,
  };

  return (
    <figure className="wipe">
      {(title || craft) && (
        <figcaption className="wipe-cap">
          <span className="wipe-title">{title}</span>
          {craft && <span className="wipe-craft">{craft}</span>}
        </figcaption>
      )}
      <div
        ref={frame}
        className="wipe-frame"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        {video ? (
          <video ref={afterMedia} src={after} aria-label={afterAlt} {...mediaProps} className="wipe-img wipe-after" />
        ) : (
          <img src={after} alt={afterAlt} className="wipe-img wipe-after" draggable={false} />
        )}
        <div className="wipe-before-clip" style={{ width: `${pos}%` }}>
          {video ? (
            <video
              ref={beforeMedia}
              src={before}
              aria-label={beforeAlt}
              {...mediaProps}
              className="wipe-img wipe-before"
            />
          ) : (
            <img src={before} alt={beforeAlt} className="wipe-img wipe-before" draggable={false} />
          )}
        </div>
        <div className="wipe-handle" style={{ left: `${pos}%` }} aria-hidden="true">
          <span className="wipe-bar" />
          <span className="wipe-knob">
            <span>‹</span>
            <span>›</span>
          </span>
        </div>
        <span className="wipe-tag left">Before</span>
        <span className="wipe-tag right">After</span>
        <label className="sr-only" htmlFor={labelId}>
          Compare before and after
        </label>
        <input
          id={labelId}
          className="wipe-range"
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
        />
      </div>
      {note && <p className="wipe-note">{note}</p>}
    </figure>
  );
}
