import { createReadStream, createWriteStream } from 'fs';
import { ReadStream, WriteStream } from "node:fs";

const csv = require('csvtojson');

function handling(error: Error): void {
  process.stdout.write(error.message);
}

const readable: ReadStream = createReadStream(`${__dirname}/csv/nodejs-hw1-ex1.csv`, { highWaterMark: 2 });
const writable: WriteStream = createWriteStream(`${__dirname}/txt/content.txt`);

readable
  .on('error', handling)
  .pipe(csv())
  .pipe(writable)
  .on('error', handling);
