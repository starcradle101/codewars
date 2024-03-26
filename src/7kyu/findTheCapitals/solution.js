// https://www.codewars.com/kata/539ee3b6757843632d00026b

export var capitals = function (word) {
  let answer = [];
  for (let i = 0; i < word.length; i += 1) {
    if (word[i].toUpperCase() === word[i]) {
      answer.push(i);
    }
  }
  return answer;
};
