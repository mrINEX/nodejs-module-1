import { reverseString, cutLastChar } from './utils';
import { EOL } from 'os';

export default function flowingMode(): void {
  process.stdin.on('data', (buffer: Buffer): void => {
    const cutString: string = cutLastChar(buffer.toString());
    process.stdout.write(`${reverseString(cutString)}${EOL}`);
  });
}
