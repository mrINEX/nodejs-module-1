import { Transform } from 'stream';
import { reverseString, cutLastChar } from './utils';
import { EOL } from 'os';

export default function transformStreamMode(): void {
  process.stdin.pipe(
    new Transform({
      transform(chunk: Buffer, encoding: string, callback): void {
        const cutString: string = cutLastChar(chunk.toString());
        callback(null, `${reverseString(cutString)}${EOL}`);
      }
    })
  ).pipe(process.stdout);
}
