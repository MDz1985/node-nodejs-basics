import { createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { stdin } from "node:process";

const write = async () => {
  const writeStream = createWriteStream(resolve('src', 'streams', 'files', 'fileToWrite.txt'));
  stdin.on('data', (data) => {
    writeStream.write(data)
  })
};

await write();
