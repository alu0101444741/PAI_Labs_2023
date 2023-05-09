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

/** @desc Función principal del programa */
function main() {
  if (process.argv[2] === undefined) {
    throw new Error("Por favor, inserte el/los número(s) de la siguiente manera al ejecutar este programa\nnode archivo.js num1 num2 ...");
  }
  const numbers = process.argv.slice(2);

  for (let i = 0; i < numbers.length; i++) {
    console.log(collatzSequence(testInput(numbers[i])));
  }  
}

/**
 * @desc Dado un número n, en cada paso se realizará la operación n/2 si es par, o 3*n + 1 si es impar.
 * El proceso se repite hasta que el número sea 1, y devolverá el número de pasos necesitados para
 * llegar a este punto.
 * @param {Number} number
 * @return {Number} número de pasos necesarios
 */
function collatzSequence(number) {
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

/**
 * @desc Test para comprobar que el argumento proporcionado es un número mayor o igual a 0.
 * Lo convertirá de string a Number.
 * @param {number} number
 * @returns {number|Error} el número.
 */
function testInput(number) {
  let theNumber = Number(number);
  if (!Number.isNaN(theNumber)) {  // It is a number
    if (theNumber >= 1) {
      return(theNumber);
    }
    else {
      throw new Error("Error (", number,") La entrada debe ser un número positivo mayor o igual que 1.");
    }
  }
  else {
    throw new Error("Error (", number,") La entrada no era un número.");
  }  
}

if (require.main === module) {
  main();
}