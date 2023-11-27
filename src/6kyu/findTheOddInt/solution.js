export function findOdd(A) {
  const standard = new Set(A);
  let answer = 0;

  standard.forEach((el) => {
    let count = 0;
    for (let i = 0; i < A.length; i += 1) {
      if (A[i] === el) count += 1;
    }
    if (count % 2 === 1) answer = el;
  });

  return answer;
}
