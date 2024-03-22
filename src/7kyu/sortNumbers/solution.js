// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

export function solution(nums) {
  if (nums === null || nums.length === 0) return [];

  return nums.sort((a, b) => a - b);
}

// 만약 반복문을 사용한다면?

// for (let i = 0; i < nums.length - 2; i += 1) {
//   for (let j = i; j < nums.length - 1; j += 1) {
//     if (nums[j] > nums[j + 1]) {
//       [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//     }
//   }
// }
