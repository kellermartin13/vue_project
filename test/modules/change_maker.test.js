import { makeChange } from '../../src/modules/change_maker';

describe('changeMaker', () => {
  describe('when US coin set', () => {
    const COINS = [25, 10, 5, 1];

    it('when 80', () => {
      let expected = {
        '25': 3,
        '10': 0,
        '5': 1,
        '1': 0
      };

      expect(makeChange(80, COINS)).toEqual(expected)
    });

    it('when 93', () => {
      let expected = {
        '25': 3,
        '10': 1,
        '5': 1,
        '1': 3
      };

      expect(makeChange(93, COINS)).toEqual(expected)
    })
  });
});
