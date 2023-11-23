import { toJadenCase } from './solution';

describe('Tests', () => {
  test('test', () => {
    const str = "How can mirrors be real if our eyes aren't real";
    expect(toJadenCase(str)).toBe(
      "How Can Mirrors Be Real If Our Eyes Aren't Real",
    );
  });
});
