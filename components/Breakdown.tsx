import type { BreakdownLine } from "@/lib/studio-work";

// The "what was shot, what was AI" block on a case study: one short line each
// for what was photographed, what was AI-generated and what the VFX work
// covered. The lines come from the project's data file.
export default function Breakdown({ lines }: { lines: readonly BreakdownLine[] }) {
  return (
    <div className="v-made" data-reveal>
      <h3 className="v-tag v-tag--lime">What was shot, what was AI</h3>
      <dl className="v-made__list">
        {lines.map((l) => (
          <div key={l.label}>
            <dt>{l.label}</dt>
            <dd>{l.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
