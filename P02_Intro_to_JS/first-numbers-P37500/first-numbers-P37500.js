/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Feb 16 2022
 * @desc First numbers
 *       The program ask for a number n, and prints all numbers between 0 and n.
 *       Node.js doesn't have a built-in special main function to designate the entry point of a program
 *       but here we check if the current module is the main module. 
 *       If this is true, the current file has been run directly and we can call the main function
 * @see {@link https://jutge.org/problems/P37500_en}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

let readlineSync = require('../node_modules/readline-sync/');

const firstNumbers = function(limit) {
  for (let counter = 0; counter <= limit; ++counter) {
    console.log(counter); 
  }
  return;
};

const inputNumber = function(message) {
  let answer = readlineSync.question(message);
  let theNumber = Number(answer);
  if (!Number.isNaN(theNumber)) {  // It is a number
    return theNumber;
  }
  console.log("La entrada no era un número.");
};

function main() {
  let number = inputNumber('Introduzca un número: ');
  firstNumbers(number);
}

if (require.main === module) {
  main();
}
