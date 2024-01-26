import { argv } from "node:process";

const parseArgs = () => {
  argv.slice(2).reduce((pr, cur, i) => {
    if (i % 2) console.log(`${ pr } is ${ cur }`);
    return cur
  });
};

parseArgs();
