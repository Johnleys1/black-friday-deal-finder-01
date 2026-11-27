// Bargain Beacon hand-in program (Node 22, standard library only).
// The site lives in app/ next to this file; screenshots/ holds 3-4 renders
// of it. This program copies both into the output directory and writes
// dossier.json there with the vendored make.fun library, which the scorer
// re-runs byte for byte. It never deletes the output directory itself — it
// only clears the app/ and screenshots/ folders inside it before copying.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const repoRoot = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function refreshDir(name) {
  const target = join(outDir, name);
  if (existsSync(target)) rmSync(target, { recursive: true, force: true });
  mkdirSync(target, { recursive: true });
  cpSync(join(repoRoot, name), target, { recursive: true });
}

mkdirSync(outDir, { recursive: true });
refreshDir('app');
if (existsSync(join(repoRoot, 'screenshots'))) refreshDir('screenshots');

// Caps come from the competition's gate: at most 4 screenshots of 256 KiB,
// app/ at most 993 entries and 16 MiB, dossier text at most 160 KiB.
writeFileSync(
  join(outDir, 'dossier.json'),
  buildDossier(outDir, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    app_max_files: 993,
    app_max_bytes: 16777216,
  }),
);
