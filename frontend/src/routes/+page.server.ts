import fs from 'node:fs';
import path from 'node:path';


export type Image = {
  id: number;
  path: string;
  tags: string[];
  favorites: number;
};

export function load() {
  const staticDir = path.resolve('static');

  // data in mock_data.json is used for testing purposes only, and should not be used in production
  const data = JSON.parse(fs.readFileSync(path.join(staticDir, 'mock_data.json'), 'utf-8'));

  // return data as an image array
  return {
    images: data as Image[]
  };
}
