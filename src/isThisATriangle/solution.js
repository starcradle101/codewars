export function isTriangle(a, b, c) {
  const condition1 = a < b + c;
  const condition2 = b < a + c;
  const condition3 = c < a + b;

  return condition1 && condition2 && condition3;
}
