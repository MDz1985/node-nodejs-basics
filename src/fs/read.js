import { readFile } from "node:fs";
import { resolve } from "node:path";

const read = async () => {
  const folderPath = resolve('src', 'fs', 'files');
  const src = resolve(folderPath, 'fileToRead.txt');
  const error = new Error('FS operation failed');
  readFile(src, (err, data) => {
    if (err) throw error;
    console.log(data.toString());
  })
};

await read();
