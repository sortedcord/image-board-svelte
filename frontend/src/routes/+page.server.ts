import fs from 'node:fs';
import path from 'node:path';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif']);

export function load() {
  const staticDir = path.resolve('static');
  let files: string[] = [];
  try {
    files = fs.readdirSync(staticDir).filter((f: string) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()));
  } catch {
    files = [];
  }
  return { images: files.sort().map(src => ({ src, favorites: 0 }))};
}
