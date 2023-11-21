import { accum } from './solution';

describe('accum', () => {
  const testCases = [
    {
      input: 'ZpglnRxqenU',
      expected:
        'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu',
    },
    {
      input: 'NyffsGeyylB',
      expected:
        'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb',
    },
    {
      input: 'MjtkuBovqrU',
      expected:
        'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu',
    },
    {
      input: 'EvidjUnokmM',
      expected:
        'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm',
    },
    {
      input: 'HbideVbxncC',
      expected:
        'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc',
    },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`Should return "${expected}" for "${input}"`, () => {
      expect(accum(input)).toBe(expected);
    });
  });
});
