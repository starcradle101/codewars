import { isAnagram } from './solution';

describe('Tests', () => {
  it('test', () => {
    expect(isAnagram('foefet', 'toffee')).toBe(true);
    expect(isAnagram('Buckethead', 'DeathCubeK')).toBe(true);
    expect(isAnagram('Twoo', 'WooT')).toBe(true);

    expect(isAnagram('dumble', 'bumble')).toBe(false);
    expect(isAnagram('ound', 'round')).toBe(false);
    expect(isAnagram('apple', 'pale')).toBe(false);
  });
});
