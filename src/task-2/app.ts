import { createReadStream, createWriteStream } from 'fs';
import { ReadStream, WriteStream } from "node:fs";

const csv = require('csvtojson');

const readable: ReadStream = createReadStream(`${__dirname}/csv/nodejs-hw1-ex1.csv`, { highWaterMark: 2 });
readable.on('error', (err: Error) => process.stdout.write(err.message));

const writable: WriteStream = createWriteStream(`${__dirname}/txt/content.txt`);
writable.on('error', (err: Error) => process.stdout.write(err.message));

readable.pipe(csv()).pipe(writable);
