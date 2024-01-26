import { env } from "node:process";

const parseEnv = () => {
  const rssRegex = /RSS_.*/;
  Object.entries(env)
    .filter(([key]) => rssRegex.test(key))
    .forEach(([k, v]) => console.log(`${ k }=${ v }`))
};

parseEnv();
