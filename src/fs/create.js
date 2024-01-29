import { writeFile, stat } from 'node:fs';
import { Buffer } from 'node:buffer';
import { resolve } from 'node:path';

const create = async () => {
  const data = new Uint8Array(Buffer.from('Hello Node.js'));
  const filePath = resolve('src', 'fs', 'files', 'fresh.txt');
  stat(filePath, (err) => {
    if (!err) throw new Error('FS operation failed');
    writeFile(filePath, data, 'utf8', () => {
    })
  })
};

await create();
