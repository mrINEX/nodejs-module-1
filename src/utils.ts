function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

function cutLastChar(str: string): string {
  if (!str) return str;
  return str.substring(0, str.length - 1);
}

export { reverseString, cutLastChar }
