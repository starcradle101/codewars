// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

export function persistence(num) {
  let numInput = num;
  let persistence = 0;

  while (numInput >= 10) {
    persistence += 1;
    let splitNumInput = numInput.toString().split('');
    numInput = splitNumInput.reduce((acc, curr) => +acc * +curr, 1);
  }

  return persistence;
}
