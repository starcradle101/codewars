// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

export var number = function (array) {
  let listedArray = array.map((char, idx) => {
    return `${idx + 1}: ${char}`;
  });
  return listedArray;
};
