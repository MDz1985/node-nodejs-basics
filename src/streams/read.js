import { createReadStream } from "node:fs";
import { resolve } from "node:path";
import { stdout } from "node:process";

const read = async () => {
  const readStream = createReadStream(resolve('src', 'streams', 'files', 'fileToRead.txt'), 'utf-8');
  let data = '';
  readStream.on('data', chunk => data += chunk);
  readStream.on('end', () => stdout.write(data));
  readStream.on('error', error => stdout.write('Error', error?.message));
};

await read();
