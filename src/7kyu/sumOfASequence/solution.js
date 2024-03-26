// https://www.codewars.com/kata/586f6741c66d18c22800010a

export const sequenceSum = (begin, end, step) => {
  let sum = 0;

  for (let i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;
};

// begin부터 end까지 step씩 증가하는 수열의 합
