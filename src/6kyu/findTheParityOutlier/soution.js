// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

export function findOutlier(integers) {
  let oddArr = [];
  let evenArr = [];

  for (let num of integers) {
    num % 2 === 0 ? evenArr.push(num) : oddArr.push(num);
  }

  return oddArr.length > evenArr.length ? +evenArr.join('') : +oddArr.join('');
}
