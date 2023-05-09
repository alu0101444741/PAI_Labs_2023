/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 03 2023
 * @desc Functions used in this Lab
 */

'use strict';

/**
 * @desc Find the least common denominator (LCD) of two numbers
 * @param firstNumber
 * @param secondNumber
 * @returns LCM of the two numbers
 */
export function leastCommonDenominator(firstNumber : number, secondNumber : number) : number {
  let maximumDenominator : number = firstNumber * secondNumber;
  let smallest : number = Math.min(firstNumber, secondNumber);
  let greatest : number = Math.max(firstNumber, secondNumber);
  for (let denominator : number = smallest; denominator <= maximumDenominator; ++denominator) {
    if ((denominator % smallest === 0) && (denominator % greatest === 0)) {
      return(denominator);
    }
  }
  return(1);
}

/**
 * @desc Find the greater common divisor (GCD) of two numbers
 * @param firstNumber
 * @param secondNumber
 * @returns GCD of the two numbers
 */
export function greaterCommonDivisor(firstNumber : number, secondNumber : number) : number {
  if (secondNumber === 0) {
    return (firstNumber);
  }
  return greaterCommonDivisor(secondNumber, firstNumber % secondNumber);
}

/**
* @desc Throws an error if the given number is not an integer higher or equal to zero.
* Lanzará un error en caso de no serlo.
* @param number
*/
export function isNaturalNumber(number : number) : void {
  if ((Number.isNaN(number)) || (number < 0)) {
    throw new Error('The number must be >= 0.');
  }
}