// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

export function XO(str) {
  let xCount = 0;
  let oCount = 0;

  [...str.toLowerCase()].forEach((char) => {
    if (char === 'x') xCount += 1;
    if (char === 'o') oCount += 1;
  });

  return xCount === oCount;
}
