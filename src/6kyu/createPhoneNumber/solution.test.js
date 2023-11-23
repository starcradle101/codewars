import { createPhoneNumber } from './solution';

describe('Create Phone Number', () => {
  test.each([
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], '(123) 456-7890'],
    [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], '(111) 111-1111'],
  ])('should format the phone number correctly', (input, expected) => {
    expect(createPhoneNumber(input)).toBe(expected);
  });
});
