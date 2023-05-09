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

 /** @desc Función principal del programa */
function main() {
  if (process.argv[2] === undefined) {
    throw new Error("Por favor, inserte el/los número(s) de la siguiente manera al ejecutar este programa\nnode archivo.js num1 num2 ...");
  }
  const GIVEN_ARGUMENTS : string[] = process.argv.slice(2);
  let numbers : number[] = [];
  for (const NUMBER of GIVEN_ARGUMENTS) numbers.push((testInput(NUMBER), 1000000000 - 1, 1000001000 + 1));
  console.log(countingFrequences(numbers));
}

/**
* @desc Given a sequence of numbers, count how many times every number is repeated
* @param numbers - sequence of numbers
* @return array with the frequence of every number
*/
export function countingFrequences(numbers : number[]) : number[] {
  let numberIdentifiers : number[] = [];
  let frequences : number[] = [];
  for (let index : number = 0; index < numbers.length; ++index) {
    if (!numberIdentifiers.includes(numbers[index])) {
      numberIdentifiers.push(numbers[index]);
      frequences.push(0);
    }
  }
  for (let index : number = 0; index < numbers.length; ++index) {
    if (numberIdentifiers.includes(numbers[index])) {
      frequences[numberIdentifiers.indexOf(numbers[index])] ++;
    }
  }
  return(frequences);
}

/**
* @desc Test para comprobar que el argumento proporcionado es un número en un rango determinado.
* Si no se proporciona alguno de los límites del rango, no se comprobará esta parte.
* Lo convertirá de string a Number.
* @param number - número a comprobar
* @param minimum - mínimo valor permitido
* @param maximum - máximo valor permitido
* @returns el número.
*/
export function testInput(number : number | string, minimum : number | undefined = undefined, maximum : number | undefined = undefined) : number {
  let theNumber : number = Number(number);  
  if (!Number.isNaN(theNumber)) {  // It is a number
    if ((minimum !== undefined) && (number < minimum)) throw new Error(`La entrada debe ser un número mayor que ${minimum}`);
    if ((maximum !== undefined) && (number > maximum)) throw new Error(`La entrada debe ser un número mayor que ${maximum}`);
    return theNumber;
  }
  else {
    throw new Error("Error. La entrada no era un número.");
  }  
}

main();
