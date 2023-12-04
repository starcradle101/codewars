// https://www.codewars.com/kata/54e6533c92449cc251001667

export var uniqueInOrder = function (iterable) {
  let answer = [];
  if (iterable.length === 0) {
    return answer;
  } else {
    for (let idx = 0; idx < iterable.length; idx += 1) {
      if (answer.length === 0) {
        answer.push(iterable[0]);
        continue;
      }
      if (iterable[idx] !== iterable[idx - 1]) answer.push(iterable[idx]);
    }
  }

  return answer;
};
