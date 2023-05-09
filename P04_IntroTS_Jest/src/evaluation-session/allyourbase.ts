/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 28 2023
 * @desc Leap year
 */

 'use strict';

 /**
  * @desc Convert a number, represented as a sequence of digits in one base, to any other base.
  * @param digits - number as an array of it digits
  * @param inputBase - base of the given number
  * @param outputBase - base to convert
  * @returns converted number as an array of it digits
  */
  export function convert(digits: number[], inputBase: number, outputBase: number): number[] {
    if (digits.length === 0) {
      throw new Error('Input has wrong format');
    }
    else {
      if ((digits.length !== 1) && (digits[0] === 0)) throw new Error('Input has wrong format');
      if (digits.indexOf(0) !== digits.lastIndexOf(0)) {
        throw new Error('Input has wrong format');
      }
    }
    let convertedNumber : number[] = [];
    let decimalNumber : number = convertToDecimal(digits, inputBase);
    let remainder : number = 0;
    do {
      remainder = decimalNumber % outputBase;
      convertedNumber.push(remainder);
      decimalNumber /= outputBase;
    } while (decimalNumber >= outputBase)
    return(convertedNumber);
  }
  
  /**
  * @desc Convert a number, represented as a sequence of digits in one base, to decimal base.
  * @param digits - number as an array of it digits
  * @param inputBase - base of the given number
  * @returns converted number to decimal and returned as an array of it digits
  */
  export function convertToDecimal(digits: number[], inputBase: number) : number {
    let convertedNumber : number = 0;
    let numberLength : number = digits.length - 1;
    for (const DIGIT of digits) {
      convertedNumber += (DIGIT * Math.pow(inputBase, numberLength));
      -- numberLength;
    }
    console.log("converted to", convertedNumber);
    return(convertedNumber);
  }
 