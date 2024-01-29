import { env } from "node:process";

const parseEnv = () => {
  const rssRegex = /RSS_.*/;
  const result = Object.entries(env)
    .filter(([key]) => rssRegex.test(key))
    .map(([k, v]) => `${ k }=${ v }`)
  console.log(result.join('; '))
};

parseEnv();
