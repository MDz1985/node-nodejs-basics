import { spawn } from "child_process";
import { resolve } from "node:path";

const spawnChildProcess = async (args) => {
  spawn(
    'node',
    [resolve('src', 'cp', 'files', 'script.js'), ...args],
    {
      stdio: ['inherit', 'inherit'],
    }
  );
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['as','sdgs']);
