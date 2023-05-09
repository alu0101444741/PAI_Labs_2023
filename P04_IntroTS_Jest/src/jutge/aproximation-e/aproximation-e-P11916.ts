/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 09 2022
 * @desc Aproximation of e
 *       The program ask for a number of terms and will print the aproximation of e
 *       that we get by adding the n first terms of the Taylor series.
 */

'use strict';

import { testInput } from "../testinput";

function main() {
  if ((process.argv[2] === undefined)) {
    throw new Error('Por favor, inserte el número de términos de la siguiente manera al ejecutar este programa\n\
    node archivo.js terminos');
  }
  //console.log(`With ${process.argv[2]} terms, we get ${taylorSeries(testInput(process.argv[2], 0, 20)).toFixed(10)}.`);
  console.log(taylorSeries(testInput(process.argv[2], 0, 20)).toFixed(10));
}

/**
* @desc Función para calcular el factorial de un número dado.
* @param number - número sobre el cual calcular
* @returns resultado
*/
function factorial(number : number) : number {
  let result = 1;
  for (let i = 0; i < number; ++i) {
    result *= (number - i);
  }
  return(result);
}

/**
* @desc Función para calcular el polinomio de Taylor dados una cantidad de términos.
* @param terms - cantidad de términos
* @returns resultado de calcular el polinomio de Taylor
*/
export function taylorSeries(terms : number) : number {
  let result = 0;
  for (let i = 0; i < terms; ++i) {
    result += (1.0 / factorial(i));
  }
  return (result);
}

if (require.main === module) {
  main();
}