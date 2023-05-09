/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 03 2023
 * @desc Rational Class
 *       A class for rational numbers
 */

'use strict';

import { leastCommonDenominator, greaterCommonDivisor } from "../utilities/utilities";

/** @desc Rational Class */
export class Rational {
  private numerator : number;
  private denominator : number;

  /**
   * @desc Class constructor
   * @param numerator 
   * @param denominator 
   */
  constructor(numerator : number, denominator : number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  /**
   * @desc Add another rational number to the current one.
   * @param rationalNumber - rational number to add
   */
  add(rationalNumber: Rational) {
    let commonDivisor : number = leastCommonDenominator(this.denominator, rationalNumber.denominator);
    let firstNumerator : number = (commonDivisor / this.denominator) * this.numerator;
    let secondNumerator : number = (commonDivisor / rationalNumber.denominator) * rationalNumber.numerator;
    this.numerator = firstNumerator + secondNumerator;
    this.denominator = commonDivisor;
    this.minimize();
  }

  /**
   * @desc Substract another rational number to the current one.
   * @param rationalNumber - rational number to substract
   */
   subtract(rationalNumber: Rational) {
    let commonDivisor : number = leastCommonDenominator(this.denominator, rationalNumber.denominator);
    let firstNumerator : number = (commonDivisor / this.denominator) * this.numerator;
    let secondNumerator : number = (commonDivisor / rationalNumber.denominator) * rationalNumber.numerator;
    this.numerator = firstNumerator - secondNumerator;
    this.denominator = commonDivisor;
    this.minimize();
  }

  /**
   * @desc Multiply another rational number to the current one.
   * @param rationalNumber - rational number to multiply
   */
  multiply(rationalNumber: Rational) {
    this.denominator *= rationalNumber.denominator;
    this.numerator *= rationalNumber.numerator;
    this.minimize();
  }

  /**
   * @desc Divide another rational number to the current one.
   * @param rationalNumber - rational number to multiply
   */
  divide(rationalNumber: Rational) {
    this.denominator *= rationalNumber.numerator;
    this.numerator *= rationalNumber.denominator;
    this.minimize();
  }

  /** @desc Minimize the current rational number */
  minimize() {
    if (this.denominator < 0) {
      this.numerator *= -1;
      this.denominator *= -1;
    }
    let limit : number = Math.max(this.denominator, this.numerator);
    for (let i = 2; i < limit; ++i) {
      if ((this.numerator % i === 0) && (this.denominator % i === 0)) {
        this.numerator = this.numerator / i;
        this.denominator = this.denominator / i;
        --i;
      }
    }    
  }

  /**
   * @desc Compare the current rational number with another one
   * @param rationalNumber - rational number to compare
   * @return 1 if the current number is higher, -1 if lower, 0 if equal
   */
  compare(rationalNumber : Rational) : number {
    let rational = new Rational(this.numerator, this.denominator);
    rational.subtract(rationalNumber);
    if (rational.numerator < 0) {
      return(-1);
    }
    else if (rational.numerator > 0) {
      return(1);
    }
    else {
      return(0);
    }
  }

  /**
  * @desc Create a rational number from a string.
  * @param rationalNumber - rational number with format A/B
  */
  createFromString(rationalNumber : string) : void {
    let numbers = rationalNumber.split('/');
    let numerator = Number(numbers[0]);
    let denominator = Number(numbers[1]);
    if ((Number.isNaN(numerator)) || (Number.isNaN(denominator))) {
      throw new Error('Not a number');
    }
    else {
      this.numerator = Math.floor(numerator);
      this.denominator = Math.floor(denominator);
    }
    this.minimize();
  }

  /**
   * @desc Method to get the current rational number on a string.
   * Format depends on both numerator and denominator values.
   * @returns number | (number / number)
   */
  toString() : string {
    console.log(this.numerator, this.denominator);
    if (this.denominator === 1) return('' + this.numerator); 
    if (this.numerator === 0) return('' + 0);
    return(`${this.numerator}/${this.denominator}`);
  }
}
