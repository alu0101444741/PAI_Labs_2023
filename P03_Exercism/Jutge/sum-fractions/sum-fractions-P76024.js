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

 function main() { 
  if ((process.argv[2] === undefined) || (process.argv[3] === undefined) || (process.argv[4] === undefined)){
    throw new Error('Por favor, inserte los números de la siguiente manera al ejecutar este programa\n\
                  node archivo.js a b k');
  }
  let numberA = testInput(process.argv[2]);
  let numberB = testInput(process.argv[3]);
  let numberK = testInput(process.argv[4]);
  console.log(sumOfFractions(numberA, numberB, numberK).toFixed(4)); 
}
 
/**
 * @desc Función que, dados tres números a, b y k, devuelve el resultado de sumar 1/(a+k) + 1/(a+2k) + ...
 * @param {Number} numberA
 * @param {Number} numberB
 * @param {Number} numberK
 * @returns {Number} resultado de la suma
 */
function sumOfFractions(numberA, numberB, numberK) {
  if ((numberA < 1) || (numberB < numberA) || (numberK < 1)) {
    throw new Error('Los números insertados deben seguir las siguientes restricciones: a >= 1, b >= a, k >=1');
  }
  let sum = 0.0;
  let denominator = 0.0;
  let multiplier = 0;
  while (denominator < numberB){
    denominator = numberA + (multiplier * numberK);    
    if (denominator <= numberB) sum += (1 / denominator);    
    ++multiplier;
  }  
  return(sum);
}

 /**
 * @desc Test para comprobar que el argumento proporcionado es un número mayor o igual a 0.
 * Lo convertirá de string a Number.
 * @param {Number} number
 * @returns {Number} el número.
 */
function testInput(number) {  
  let theNumber = Number(number);
  if (!Number.isNaN(theNumber)) {  // It is a number    
    if (theNumber >= 0) {  // It is a number
      return(theNumber);
    }
    else {
      throw new Error(`La entrada ${answer} no era un número natural.`);
    }      
  }
  else {
    throw new Error(`La entrada no era un número.`);
  }  
}
 
 if (require.main === module) {
   main();
 }