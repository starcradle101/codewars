// https://www.codewars.com/kata/544aed4c4a30184e960010f4
export function divisors(integer) {
  let divisors = [];
  for (let i = 2; i < integer; i += 1) {
    if (integer % i === 0) {
      divisors.push(i);
    }
  }

  return divisors.length !== 0 ? divisors : `${integer} is prime`;
}

// 자기 자신을 제외한 약수를 반환
// 소수라면 'integer is prime'이라는 문구를 반환할 것
