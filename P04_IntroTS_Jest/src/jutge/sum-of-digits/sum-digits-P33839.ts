/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 04 2023
 * @desc Sum of digits
 *       The program ask for numbers and prints the sum of digits for each one of them.
 */

'use strict';
import { testInput } from "../testinput";

/** @desc Función principal del programa */
function main() {
  if (process.argv[2] === undefined){
    throw new Error('Por favor, inserte el(los) número(s) de la siguiente manera al ejecutar este programa\n\
                  node archivo.js número1 número2 ...');
  }
  const NUMBERS : string[] = process.argv.slice(2);
  for (const NUMBER of NUMBERS){
    //console.log("The sum of the digits of", NUMBER, "is", sumDigits(testInput(NUMBER)));
    console.log(sumDigits(testInput(NUMBER)));
  }  
}

/**
* @desc Función que recibe un número y devuelve la suma de sus dígitos.
* @param number
* @return suma de sus dígitos
*/
export function sumDigits(number : number) : number{
  let sum : number = 0;
  let stringNumber : string = `${number}`;

  for (let i = 0; i < stringNumber.length; ++i) {
    sum += Number(stringNumber[i]);
  }
  return(sum);
}

if (require.main === module) {
  main();
}