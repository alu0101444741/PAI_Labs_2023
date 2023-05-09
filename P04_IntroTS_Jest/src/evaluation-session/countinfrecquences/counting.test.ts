import { countingFrequences } from './counting';

describe('CountingFrequences ', () => {
  it('Jutge examples', () => {
    expect(countingFrequences([1000000001, 1000000011, 1000000011, 1000000004, 1000000004, 1000000200, 1000000004])).toEqual([1, 2, 3, 1]);
    expect(countingFrequences([1000000001, 1000000001, 1000000011, 1000000004, 1000000004, 1000000200, 1000000004])).toEqual([2, 1, 3, 1]);
    expect(countingFrequences([1000000001, 1000000001, 1000000011, 1000000004, 1000000004, 1000000200, 1000000004])).toEqual([2, 1, 3, 1]);
  })
});