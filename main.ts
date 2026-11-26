// Make the AI Judge Laugh — one joke about office life, one line, under 200 characters.
// The program writes the entry to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Our 9 a.m. standup runs forty minutes every day, and nobody has stood up once.";

// The gate only accepts 1 to 200 characters: fail loudly instead of shipping a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length} characters to ${outPath}`);
