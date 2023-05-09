import { sumOfFractions} from './sum-fractions-P76024';

describe('Sum of fractions', () => {
  it('Jutge examples', () => {
    expect(Number(sumOfFractions(1, 3, 1).toFixed(4))).toEqual(1.8333);
    expect(Number(sumOfFractions(5, 5, 2).toFixed(4))).toEqual(0.2000);
    expect(Number(sumOfFractions(5, 6, 2).toFixed(4))).toEqual(0.2000);
    expect(Number(sumOfFractions(5, 7, 2).toFixed(4))).toEqual(0.3429);
  })
});
