/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 06 2023
 * @desc Tests for class Rational
 *       
 */
'use strict';
import { Rational } from './rational';

describe('Rational', () => {
  let rational : Rational;

  beforeEach(() => {
    rational = new Rational(10, 3);
  });  

  test('has a toString method', () => {
    expect(rational.toString()).toBe('10/3');
  });

  test('has a create from string method', () => {
    let rational = new Rational(5, 7);
    rational.createFromString('10/3');
    expect(rational.toString()).toBe('10/3');
    rational.createFromString('100/35');
    expect(rational.toString()).toBe('20/7');
  });

  test('has an add method', () => {
    let rationaltoAdd = new Rational(5, 7);
    rational.add(rationaltoAdd);
    expect(rational.toString()).toBe('85/21');

    rationaltoAdd = new Rational(5, 21);
    rational.add(rationaltoAdd);
    expect(rational.toString()).toBe('30/7');
  });

  test('has an subtract method', () => {
    let rationaltoSub = new Rational(5, 7);
    rational.subtract(rationaltoSub);
    expect(rational.toString()).toBe('55/21');

    rationaltoSub = new Rational(5, 21);
    rational.subtract(rationaltoSub);
    expect(rational.toString()).toBe('50/21');

    rationaltoSub = new Rational(90, 21);
    rational.subtract(rationaltoSub);
    expect(rational.toString()).toBe('-40/21');

    rationaltoSub = new Rational(-10, 3);
    rational.subtract(rationaltoSub);
    expect(rational.toString()).toBe('10/7');
  });

  test('has a multiply method', () => {
    let rationaltoMultiply = new Rational(5, 7);
    rational.multiply(rationaltoMultiply);
    expect(rational.toString()).toBe('50/21');

    rationaltoMultiply = new Rational(5, 2);
    rational.multiply(rationaltoMultiply);
    expect(rational.toString()).toBe('125/21');

    rationaltoMultiply = new Rational(-1, 3);
    rational.multiply(rationaltoMultiply);
    expect(rational.toString()).toBe('-125/63');
  });

  test('has a divide method', () => {
    let rationaltoDivide = new Rational(5, 7);
    rational.divide(rationaltoDivide);
    expect(rational.toString()).toBe('14/3');

    rationaltoDivide = new Rational(5, 2);
    rational.divide(rationaltoDivide);
    expect(rational.toString()).toBe('28/15');

    rationaltoDivide = new Rational(-1, 3);
    rational.divide(rationaltoDivide);
    expect(rational.toString()).toBe('-28/5');
  });

  test('has a compare method', () => {
    let rationaltoCompare = new Rational(5, 7);
    expect(rational.compare(rationaltoCompare)).toBe(1);
    rationaltoCompare = new Rational(500, 700);
    expect(rational.compare(rationaltoCompare)).toBe(1);
    rationaltoCompare = new Rational(11, 3);
    expect(rational.compare(rationaltoCompare)).toBe(-1);
    rationaltoCompare = new Rational(66, 18);
    expect(rational.compare(rationaltoCompare)).toBe(-1);
    rationaltoCompare = new Rational(10, 3);
    expect(rational.compare(rationaltoCompare)).toBe(0);
    rationaltoCompare = new Rational(100, 30);
    expect(rational.compare(rationaltoCompare)).toBe(0);
    rationaltoCompare = new Rational(1000, 300);
    expect(rational.compare(rationaltoCompare)).toBe(0);
  });
});