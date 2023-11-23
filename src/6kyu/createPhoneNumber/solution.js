// https://www.codewars.com/kata/525f50e3b73515a6db000b83
export function createPhoneNumber(numbers) {
  const first = numbers.slice(0, 3).join('');
  const second = numbers.slice(3, 6).join('');
  const third = numbers.slice(6).join('');

  return `(${first}) ${second}-${third}`;
}

// better solve
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";

//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }

//   return format;
// }
