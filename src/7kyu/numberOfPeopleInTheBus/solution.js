// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

export var number = function (busStops) {
  let passengerLeft = 0;
  for (let busStop of busStops) {
    passengerLeft += busStop[0] - busStop[1];
  }
  return passengerLeft;
};
