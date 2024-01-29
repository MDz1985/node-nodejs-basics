import { readdir } from "node:fs";
import { resolve } from "node:path";

const list = async () => {
  const currentPath = resolve('src', 'fs');
  const src = resolve(currentPath, 'files');
  const error = new Error('FS operation failed');
  readdir(src, (err, files) => {
    if (err) throw error;
    console.log(files)
  })
};

await list();
