import reverseString from "./reverse_string";

export default function pausedMode(): void {
  process.stdin.on('readable', (): void => {
    let chunk = process.stdin.read();
    const result: string = reverseString(chunk.toString());
    process.stdout.write(result + '\n');

    chunk = process.stdin.read();
  });
}
