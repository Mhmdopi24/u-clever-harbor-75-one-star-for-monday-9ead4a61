// One Star for Monday — make.fun entry for u-clever-harbor-75-one-star-for-monday-9ead4a61
//
// The deliverable is a single line of plain text: a one-star review of
// Monday written as if Monday were a restaurant (at most 25 words,
// 1–180 characters). This program writes that line, plus a trailing
// newline, to entry.txt in the output directory the runner provides
// (MAKEFUN_OUTPUT_DIR, defaulting to /output).
//
// The line: we booked the weekend and got seated in a Monday standup
// instead; the food was cold leftovers and the waiter — named Friday —
// never came. It is 23 words and 131 characters, comfortably inside
// the gate (25 words max, 1–180 characters, one line, plain text).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. Booked the weekend, got seated in a Monday standup; the food was cold leftovers and the waiter, named Friday, never came.";

const OUT_FILE = "entry.txt";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, OUT_FILE), LINE + "\n", "utf8");
