import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";

const transform = async () => {
  stdin.on('data', async (data) => {
    const reverse = new Transform({
      transform(chunk, _, callback) {
        callback(null, String(chunk).split('').reverse().join(''))
      },
    });
    let result = '';
    for await (const buf of reverse.end(data)) {
      result += buf.slice(1);
    }
    stdout.write(`${result}\r\n`);
  })
};

await transform();
