import { resolve } from "node:path";
import { rm, stat } from "node:fs";

const remove = async () => {
  const folderPath = resolve('src', 'fs', 'files');
  const filePath = resolve(folderPath, 'fileToRemove.txt');
  const error = new Error('FS operation failed');
  stat(filePath, (err) => {
    if (err) throw error;
    rm(filePath, (err) => {
      if (err) throw error;
    })
  })
};

await remove();
