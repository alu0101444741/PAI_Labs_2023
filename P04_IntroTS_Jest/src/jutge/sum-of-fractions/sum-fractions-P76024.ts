/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 09 2023
 * @desc Sum of fractions
 *       The program ask for three numbers a, b and k and will print the result of
 *       1/(a+k) + 1/(a+2k) + ... for every fraction with denominator smaller or equal than b
 */

 'use strict';
 import { testInput } from "../testinput";

function main() { 
  if ((process.argv[2] === undefined) || (process.argv[3] === undefined) || (process.argv[4] === undefined)){
    throw new Error('Por favor, inserte los números de la siguiente manera al ejecutar este programa\n\
                  node archivo.js a b k');
  }
  let numberA : number = testInput(process.argv[2], 0);
  let numberB : number = testInput(process.argv[3], 0);
  let numberK : number = testInput(process.argv[4], 0);
  console.log(sumOfFractions(numberA, numberB, numberK).toFixed(4)); 
}
 
/**
 * @desc Función que, dados tres números a, b y k, devuelve el resultado de sumar 1/(a+k) + 1/(a+2k) + ...
 * @param numberA
 * @param numberB
 * @param numberK
 * @returns resultado de la suma
 */
export function sumOfFractions(numberA : number, numberB : number, numberK : number) {
  if ((numberA < 1) || (numberB < numberA) || (numberK < 1)) {
    throw new Error('Los números insertados deben seguir las siguientes restricciones: a >= 1, b >= a, k >=1');
  }
  let sum : number = 0.0;
  let denominator : number = 0.0;
  let multiplier : number = 0;
  while (denominator < numberB){
    denominator = numberA + (multiplier * numberK);    
    if (denominator <= numberB) sum += (1 / denominator);    
    ++multiplier;
  }  
  return(sum);
}
 
if (require.main === module) {
  main();
}