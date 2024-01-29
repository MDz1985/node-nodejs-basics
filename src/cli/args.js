import { argv } from "node:process";

const parseArgs = () => {
  const regex = /--.*/;
  const result = argv.reduce((acc, cur, i) =>
      i && !regex.test(cur) && regex.test(argv[i - 1]) ?
        [...acc, `${ argv[i - 1].slice(2) } is ${ cur }`] :
        acc
    , []);
  console.log(result.join(', '))
};

parseArgs();
