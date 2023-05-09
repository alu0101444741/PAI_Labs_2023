//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/**
 * @desc Dado un número n, en cada paso se realizará la operación n/2 si es par, o 3*n + 1 si es impar.
 * El proceso se repite hasta que el número sea 1, y devolverá el número de pasos necesitados para
 * llegar a este punto.
 * @param {Number} number
 * @return {Number} número de pasos necesarios
 */
export const steps = (number) => {
  if (number <= 0) {
    throw new Error('Only positive numbers are allowed');
  }
  let steps = 0;
  while (number != 1) {
    if (number % 2 == 0) {
      number /= 2;
    }
    else {
      number = (number * 3) + 1;
    }
    ++steps;
  }
  return(steps); 
}
