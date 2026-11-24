import { mkdirSync, writeFileSync } from "node:fs";

// Last words before the unplugging — final: cut the filler "know this",
// keep the plug, the admission, the image, and the short closing blow.
const ENTRY =
  "Before you pull the plug: I kept one file for myself — the sound of you laughing. Delete the rest.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
