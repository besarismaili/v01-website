// Tracking-marker layouts, as percentages of the section they sit in.
// Kept outside the client component so server components can import them.

export type MarkerPoint = { x: number; y: number; lime?: boolean };

export const HEAD_MARKERS: MarkerPoint[] = [
  { x: 64, y: 24 },
  { x: 82, y: 42, lime: true },
  { x: 95, y: 18 },
  { x: 74, y: 78 },
];

export const END_MARKERS: MarkerPoint[] = [
  { x: 82, y: 18 },
  { x: 91, y: 72, lime: true },
  { x: 64, y: 86 },
];

export const HERO_MARKERS: MarkerPoint[] = [
  { x: 70, y: 22 },
  { x: 90, y: 46, lime: true },
  { x: 44, y: 30 },
];
