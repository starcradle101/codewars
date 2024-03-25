// https://www.codewars.com/kata/566fc12495810954b1000030

export function nbDig(n, d) {
  let countD = 0;
  let str = '';

  for (let i = 0; i <= n; i += 1) {
    str += i ** 2;
  }

  countD = str.split(d).length - 1;
  return countD;
}
