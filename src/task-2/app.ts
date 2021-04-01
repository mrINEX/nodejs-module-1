import { createReadStream, createWriteStream } from "fs";
import { ReadStream, WriteStream } from "node:fs";
import Path from "path";
import { headersHandler, rawsHandler, errorHandler } from './utils';

const csv = require('csvtojson');

const readablePath = Path.resolve(__dirname, './csv/nodejs-hw1-ex1.csv');
const writablePath = Path.resolve(__dirname, './txt/content.txt');

const readable: ReadStream = createReadStream(readablePath, { highWaterMark: 2 });
const writable: WriteStream = createWriteStream(writablePath);

readable
  .on('error', errorHandler)
  .pipe(csv({ checkType: true })
    .preFileLine(headersHandler)
    .subscribe(rawsHandler)
  )
  .pipe(writable)
  .on('error', errorHandler);
