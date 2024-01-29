import fs from 'node:fs';
import path from "node:path";

const rename = async () => {
  const folderPath = path.resolve('src', 'fs', 'files');
  const oldPath = path.resolve(folderPath, 'wrongFilename.txt');
  const newPath = path.resolve(folderPath, 'properFilename.md');
  const error = new Error('FS operation failed');
  fs.stat(oldPath, (err) => {
    if (err) throw error;
    fs.stat(newPath, (err) => {
      if (!err) throw error;
      fs.rename(oldPath, newPath, () => {
      })
    })
  })
};

await rename();
