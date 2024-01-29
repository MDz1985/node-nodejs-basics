import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { pipeline } from "node:stream";

const decompress = async () => {
  const unzip = createUnzip()
  const src = createReadStream(resolve('src', 'zip', 'files', 'archive.gz'));
  const dst = createWriteStream(resolve('src', 'zip', 'files', 'fileToCompress.txt'));

  pipeline(src, unzip, dst, (err) => {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
  });
};

await decompress();
