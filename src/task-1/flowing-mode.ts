import reverseString from "./reverse_string";

export default function flowingMode(): void {
  process.stdin.on('data', (buffer: Buffer): void => {
    const result: string = reverseString(buffer.toString());
    process.stdout.write(result + '\n');
  });
}
