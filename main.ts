// One-Line Roast: The Gadget You Use Every Day — make.fun entry for @yuhao-qiao.
// The program writes one line to /output/entry.txt: a roast of a
// gadget I use every day. The line is baked into the code below so
// the program runs with no network and writes the same bytes on
// every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: my smartwatch congratulated me for closing my exercise
// ring — and all I did was walk to the fridge twice. The gadget
// meant to keep me fit celebrates the smallest possible movement,
// which is the whole joke: the expensive health device cannot tell
// exercise from a snack run, and it is proud of me either way. The
// punch lands in the last few words, where the "workout" turns out
// to be two trips to the fridge.
const LINE =
  "My smartwatch just congratulated me for closing my exercise ring. I walked to the fridge twice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Written in full twice in this session; the line and logic are unchanged.
