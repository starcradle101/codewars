export function digitalRoot(n) {
  let stringNum = n.toString();

  if (stringNum.length === 1) {
    return parseInt(stringNum, 10);
  }

  const nextNum = stringNum.split('').reduce((acc, curr) => +acc + +curr, 0);

  return digitalRoot(nextNum);
}
