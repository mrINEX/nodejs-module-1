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
  .pipe(csv()
    .preFileLine((fileLineString, lineIdx) => {
      const line = `[ \x1b[32m${fileLineString}\x1b[0m ]`;
      const numberLine = `[ \x1b[32m${lineIdx}\x1b[0m ]`;
      const info = `This line ${line} number ${numberLine} has been parsed in csv stream.`
      process.stdout.write(info + '\n');
      return new Promise((resolve)=>{
        resolve(fileLineString);
      })
    }))
  .pipe(writable)
  .on('error', handling);
