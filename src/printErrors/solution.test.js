import { printerError } from './solution';

describe('printerError', function () {
  test('Basic tests', function () {
    const s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
    expect(printerError(s)).toBe('3/56');
  });
});
