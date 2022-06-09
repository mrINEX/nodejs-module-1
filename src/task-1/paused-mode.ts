import { reverseString, cutLastChar } from './utils';
import { EOL } from 'os';

export default function pausedMode(): void {
  process.stdin.on('readable', (): void => {
    let chunk = process.stdin.read();
    const cutString: string = cutLastChar(chunk.toString());
    process.stdout.write(`${reverseString(cutString)}${EOL}`);

    chunk = process.stdin.read();
  });
}
