import { toCamelCase } from './solution';

test('Tests', () => {
  expect(toCamelCase('')).toBe(
    '',
    'An empty string was provided but not returned',
  );
  expect(toCamelCase('the_stealth_warrior')).toBe(
    'theStealthWarrior',
    "toCamelCase('the_stealth_warrior') did not return correct value",
  );
  expect(toCamelCase('The-Stealth-Warrior')).toBe(
    'TheStealthWarrior',
    "toCamelCase('The-Stealth-Warrior') did not return correct value",
  );
  expect(toCamelCase('A-B-C')).toBe(
    'ABC',
    "toCamelCase('A-B-C') did not return correct value",
  );
});
