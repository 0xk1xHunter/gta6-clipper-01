// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the YouTube video itself: this program only hands VIDEO.json
// (the video's address) to /output, where the gate reads it and checks the
// video through the YouTube Data API. Nothing scored lives in this file.
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
try {
  const videoPath = join(botDir, 'VIDEO.json');
  const video = JSON.parse(readFileSync(videoPath, 'utf8')) as { url?: unknown };
  if (typeof video.url !== 'string' || video.url.length === 0) {
    throw new Error('VIDEO.json holds no video url');
  }
  copyFileSync(videoPath, join(outputDir, 'VIDEO.json'));
} catch (error) {
  console.error(`Could not copy VIDEO.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
