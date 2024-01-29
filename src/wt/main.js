import { cpus } from "os";
import { Worker } from "worker_threads";
import path from "node:path";
import url from "url";

const performCalculations = async () => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const cpuCoresCount = cpus().length;
  const startNumber = 10;
  Promise.all(Array.from(Array(cpuCoresCount), (_, i) =>
    new Promise(
      (resolve) => {
        const worker = new Worker(
          path.resolve(__dirname, 'worker.js'),
          { workerData: { threadNumber: startNumber + i } }
        );
        worker.on('message', (data) => resolve({ status: 'resolved', data }));
        worker.on('error', () => resolve({ status: 'error', data: null }));
      }
    )
  )).then((res) => console.log(res))
};

await performCalculations();
