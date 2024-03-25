// https://www.codewars.com/kata/529eef7a9194e0cbc1000255

export var isAnagram = function (test, original) {
  if (test.length !== original.length) return false;

  const testLowerCase = test.toLowerCase();
  const originalLowerCase = original.toLowerCase();

  let lookUp = {};
  for (let char of originalLowerCase) {
    lookUp[char] === undefined ? (lookUp[char] = 1) : (lookUp[char] += 1);
  }

  for (let char of testLowerCase) {
    if (!lookUp[char]) {
      return false;
    } else {
      lookUp[char] -= 1;
    }
  }
  return true;
};

// 보다 간단한 방법
// sort()를 사용해서 풀 수 있음
