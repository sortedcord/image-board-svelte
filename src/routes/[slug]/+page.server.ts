import fs from 'node:fs';
import path from 'node:path';
import { error } from '@sveltejs/kit';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif']);

export function load({ params }) {
  const staticDir = path.resolve('static');
  let files: string[] = [];
  try {
    files = fs.readdirSync(staticDir).filter(f => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()));
  } catch {
    files = [];
  }
  files.sort();

  const index = files.indexOf(params.slug);
  if (index === -1) error(404);

  return {
    image: params.slug,
    prev: index > 0 ? files[index - 1] : null,
    next: index < files.length - 1 ? files[index + 1] : null
  };
}
