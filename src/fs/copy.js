import { mkdir, stat, readdir, copyFile } from 'node:fs';
import { resolve } from 'node:path';

const copy = async () => {
  const currentPath = resolve('src', 'fs');
  const src = resolve(currentPath, 'files');
  const dest = resolve(currentPath, 'files_copy');
  const error = new Error('FS operation failed');
  stat(src, (err) => {
    if (err) throw error;
    mkdir(dest, (err) => {
      if (err) throw error;
      readdir(src, (err, files) => {
        if (err) throw error;
        files.forEach((file) => copyFile(resolve(src, file), resolve(dest, file), () => {
        }))
      })
    })
  })
};

await copy();
