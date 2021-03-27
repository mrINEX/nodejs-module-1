import { Transform } from "stream";
import reverseString from "./reverse_string";

process.stdin.pipe(
  new Transform({
    transform(chunk: Buffer, encoding: string, callback): void {
      const result: string = reverseString(chunk.toString()) + '\n';
      callback(null, result);
    }
  })
).pipe(process.stdout);
