// Make the AI Judge Laugh (alfasurya91) — v2
// One line about office life, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Judge brief: a real office observation, a surprising turn, tight, original.
// Calibrated against 90 verified top-10 winning lines (micro-anecdote that
// sounds true: a specific number, one concept, no explaining the punchline).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My KPI is meetings attended. I hit 31 last week. My work is still waiting for a meeting to approve it.";

// Gate: the entry must be 1–200 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
