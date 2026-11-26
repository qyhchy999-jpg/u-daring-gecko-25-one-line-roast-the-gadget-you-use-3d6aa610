// One-Line Roast: The Gadget You Use Every Day — make.fun entry for @yuhao-qiao.
// The program writes one line to /output/entry.txt: a roast of a
// gadget I use every day. The line is baked into the code below so
// the program runs with no network and writes the same bytes on
// every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: my phone's autocorrect has known me for five years and
// still thinks I mean "ducking". It has read everything I ever
// wrote, and it learned nothing. The joke is the betrayal by a
// gadget that knows me best: five years of training data, every
// message I ever typed, and the one word it refuses to learn is the
// one I mean every time. The AI-era sting lands in the last sentence
// — a model trained on my entire life, and it learned nothing.
const LINE =
  "My phone's autocorrect has known me for five years and still thinks I mean 'ducking'. It has read everything I ever wrote. It learned nothing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Written in full twice in this session; the line and logic are unchanged.
// Second pass: the sting is that autocorrect is the only gadget that
// reads everything I write and still gets the one word wrong every time.
