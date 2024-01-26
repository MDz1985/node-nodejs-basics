import { createReadStream } from "node:fs";
import { resolve } from "node:path";
import { createHash } from "node:crypto";
import { stdout } from "node:process";

const calculateHash = async () => {
  const readStream = createReadStream(resolve('src','hash', 'files','fileToCalculateHashFor.txt'));
  let data = '';
  readStream.on('data', chunk => data += chunk);
  readStream.on('end', () => {
    const result = createHash('sha256')
      .update(data)
      .digest('hex');
    stdout.write(result)
  });
};

await calculateHash();
