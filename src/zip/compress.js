import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { pipeline } from "node:stream";

const compress = async () => {
  const gzip = createGzip();
  const src = createReadStream(resolve('src', 'zip', 'files', 'fileToCompress.txt'));
  const dst = createWriteStream(resolve('src', 'zip', 'files', 'archive.gz'));

  pipeline(src, gzip, dst, (err) => {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
  });
};

await compress();
