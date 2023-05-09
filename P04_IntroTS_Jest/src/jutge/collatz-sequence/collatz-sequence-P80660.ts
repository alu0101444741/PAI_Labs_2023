/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 04 2023
 * @desc The sequence of Collatz
 *       The program ask for several numbers n >= 1. If the number is even it will divide it by two,
 *       otherwise it will multiply it by 3 and add it 1. The program will repeat this until it reaches 1 and
 *       will print n in every step.
 */

'use strict';

import { testInput } from "../testinput";

/** @desc Función principal del programa */
function main() {
  if (process.argv[2] === undefined) {
    throw new Error("Por favor, inserte el/los número(s) de la siguiente manera al ejecutar este programa\nnode archivo.js num1 num2 ...");
  }
  const NUMBERS : string[] = process.argv.slice(2);

  for (let i : number = 0; i < NUMBERS.length; i++) {
    console.log(collatzSequence(testInput(NUMBERS[i], 1)));
  }  
}

/**
* @desc Dado un número n, en cada paso se realizará la operación n/2 si es par, o 3*n + 1 si es impar.
* El proceso se repite hasta que el número sea 1, y devolverá el número de pasos necesitados para
* llegar a este punto.
* @param number
* @return número de pasos necesarios
*/
export function collatzSequence(number : number) : number {
  let steps = 0;
  while (number !== 1) {
    if (number % 2 == 0) {
      number /= 2;
    }
    else {
      number = (number*3) + 1;
    }
    ++steps;
  }
  return(steps);
}

if (require.main === module) {
  main();
}
