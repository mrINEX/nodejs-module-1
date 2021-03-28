// 'https://epa.ms/nodejs19-hw1-ex1'

import { Transform } from "node:stream";
import { createReadStream, createWriteStream } from 'fs';
import { ReadStream, WriteStream } from "node:fs";

const http = require('https');
const csv = require('csvtojson');

const readable: ReadStream = createReadStream(`${__dirname}/csv/nodejs-hw1-ex1.csv`, { highWaterMark: 2 });
readable.on('error', (err: Error) => process.stdout.write(err.message));

const writable: WriteStream = createWriteStream(`${__dirname}/txt/content.txt`);
writable.on('error', (err: Error) => process.stdout.write(err.message));

readable.pipe(csv()).pipe(writable);


// const options = {
//   host: 'epa.ms',
//   path: '/nodejs19-hw1-ex1',
//   method: 'GET',
// };

// const request = http.request(options, function (res) {
//   res.setEncoding('utf8');
//   // console.log('res:::', res.socket._readableState);

//   res.on('data', function (chunk) {
//     console.log(chunk);
//   });
//   res.on('end', function () {
//     console.log('end');
//   });
// });
// request.end();
