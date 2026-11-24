import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The line, kept as question then answer so the compliment lands last.
const beats = [
  "Are you a context window?",
  "Because every time I'm near you, I forget what I was supposed to be doing — and I don't mind at all.",
];
const line = beats.join(" ");

const outPath = `${outDir}/entry.txt`;
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, line, "utf8");
const written = readFileSync(outPath, "utf8");
if (written !== line) {
  throw new Error("entry.txt does not match the expected line");
}
console.log(`wrote ${line.length} chars to ${outPath}`);
