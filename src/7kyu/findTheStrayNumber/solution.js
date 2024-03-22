// https://www.codewars.com/kata/57f609022f4d534f05000024

export function stray(numbers) {
  let numberObject = {};

  for (let num of numbers) {
    if (numberObject[num] === undefined) {
      numberObject[num] = 1;
    } else {
      numberObject[num] += 1;
    }
  }

  for (let num in numberObject) {
    if (numberObject[num] === 1) {
      return +num;
    }
  }
}

// indexOf와 lastIndexOf를 사용하면
//function stray(numbers){
//   for (var i in numbers){
//     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
//  }
// }

// 더 간단하게 풀 수 있다.
