import { sumDigits } from './sum-digits-P33839';

describe('Sum of digits', () => {
  it('Jutge examples', () => {
    expect(sumDigits(29)).toEqual(11);
    expect(sumDigits(7)).toEqual(7);
    expect(sumDigits(0)).toEqual(0);
    expect(sumDigits(1020)).toEqual(3);
  }),
  it('Extra examples', () => {
    expect(sumDigits(92)).toEqual(11);
    expect(sumDigits(7000)).toEqual(7);
    expect(sumDigits(101)).toEqual(2);
    expect(sumDigits(10002000)).toEqual(3);
  })
});
