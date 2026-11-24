import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

const RATING = "Monday: one star.";
const REVIEW =
  "Turned up uninvited, spoiled the weekend's sequel, and had the audacity to bring a meeting along.";

const entryLine = `${RATING} ${REVIEW}`;

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, entryLine, "utf8");
}

writeEntry();
