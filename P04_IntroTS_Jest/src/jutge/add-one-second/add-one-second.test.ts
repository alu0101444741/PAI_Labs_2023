import { addOneSecond } from './add-one-second-P34279';
//const exported = require('./add-one-second-P34279.ts');

describe('Add one second', () => {
  it('Adds one second', () => {
    expect(addOneSecond(11, 33, 15)).toEqual('11:33:16');
  }),
  it('Adds one minute by reaching the maximum seconds', () => {
    expect(addOneSecond(19, 45, 59)).toEqual('19:46:00');
  }),
  it('Adds one hour by reaching the maximum seconds', () => {
    expect(addOneSecond(12, 59, 59)).toEqual('13:00:00');
  }),
  it('Handle single digit values', () => {
    expect(addOneSecond(3, 5, 9)).toEqual('03:05:10');
    expect(addOneSecond(0, 1, 2)).toEqual('00:01:03');
  })/*,
  it('Throw error on invalid input', () => {
    expect(addOneSecond(25, 5, 9)).toThrow(new Error("Los segundos deben un valor ser entre 0 y 60"));
  })*/
});
