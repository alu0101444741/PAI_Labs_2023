/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 15 2023
 * @desc The sequence of Collatz
 *       The program ask for several numbers n >= 1. If the number is even it will divide it by two,
 *       otherwise it will multiply it by 3 and add it 1. The program will repeat this until it reaches 1 and
 *       will print n in every step.
 * @module collatz-pseudosequence
 */

 'use strict';

 import { testInput } from "../testinput";

const MAXIMUM_N_VALUE = Math.pow(10, 6);
const MAXIMUM_FACTOR_VALUE = Math.pow(10, 3);

function main() {
  if (process.argv[2] === undefined) {
    throw new Error("Por favor, inserte el/los número(s) de la siguiente manera al ejecutar este programa\nnode archivo.js num1 num2 num3");
  }
  const NUMBERS : string[] = process.argv.slice(2);
  checkInput(testInput(NUMBERS[2], 0), testInput(NUMBERS[0], 0), testInput(NUMBERS[1], 0));
  console.log(collatzPseudoSequence(testInput(NUMBERS[0], 0), testInput(NUMBERS[1], 0), testInput(NUMBERS[2], 0))); 
}


/**
 * @desc Dado un número n, en cada paso se realizará la operación:
 *  n/2 + X, si el resultado es par
 *  3*n + Y, si es impar.
 * El proceso se repite hasta que se perciba un ciclo.
 * @param evenFactor - valor X
 * @param oddFactor - valor Y
 * @param number - número a verificar
 * @return número de pasos necesarios
 */
export function collatzPseudoSequence(evenFactor : number, oddFactor : number, number : number) : number {
  let currentNumber : number = number;
  let sequence : number[] = [];
  let cycleFound : boolean = false;
  let firstIndex : number = 0;
  let cycle : number = 0;
  while (!cycleFound && currentNumber <= MAXIMUM_N_VALUE) {
    if (sequence.includes(currentNumber)) {
      if (cycle === 1) {
        firstIndex = sequence.lastIndexOf(currentNumber);
      }
      if (currentNumber === sequence[firstIndex - 1]) {
        cycleFound = true;
      }
      if (!cycleFound) {
        ++cycle;
      }
    }
    sequence.push(currentNumber);
    if (currentNumber % 2 === 0) {
      currentNumber = (currentNumber / 2) + evenFactor;
    }
    else {
      currentNumber = (currentNumber * 3) + oddFactor;
    }    
  }
  if (currentNumber > MAXIMUM_N_VALUE) return(currentNumber);
  return(cycle);
}

/**
 * @desc Función para verificar que los valores a utilizar en la psuedosecuencia de Collatz son correctos.
 * El valor N no puede ser mayor 10⁶, así como los valores de X e Y no deben ser mayores a 1000.
 * @param valueN
 * @param valueX
 * @param valueY
 */
function checkInput(valueN : number, valueX : number, valueY : number) {
  checkValueN(valueN);
  if ((valueX > MAXIMUM_FACTOR_VALUE) || (valueY > MAXIMUM_FACTOR_VALUE)) throw new Error("Valores incorrectos. X e Y no deben ser mayores a 1000");
}

/**
 * @desc Función para verificar que el valor N a utilizar en la psuedosecuencia de Collatz es correcto.
 * El valor N no puede ser mayor 10⁶
 * @param valueN
 */
function checkValueN(valueN : number) {
  if (valueN > MAXIMUM_N_VALUE) throw new Error("N debe ser menor a 10⁶.")
}

if (require.main === module) {
  main();
}