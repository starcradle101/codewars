// https://www.codewars.com/kata/5813d19765d81c592200001a

export function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i += 1) {
    let iString = '' + i;
    if (iString.indexOf('5') === -1) {
      count++;
    }
  }
  return count;
}
