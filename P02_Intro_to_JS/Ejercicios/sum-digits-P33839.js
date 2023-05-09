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

/** @desc Función principal del programa */
function main() {
  if (process.argv[2] === undefined){
    throw new Error('Por favor, inserte el(los) número(s) de la siguiente manera al ejecutar este programa\n\
                  node archivo.js número1 número2 ...');
  }
  const numbers = process.argv.slice(2);
  for (const number of numbers){
    console.log("The sum of the digits of", number, "is", sumDigits(testInput(number)));
  }  
}

/**
 * @desc Función que recibe un número y devuelve la suma de sus dígitos.
 * @param {Number} number
 * @return {Number} suma de sus dígitos
 */
function sumDigits(number){
  let sum = 0;
  let stringNumber = `${number}`;

  for (let i = 0; i < stringNumber.length; ++i) {
    sum += Number(stringNumber[i]);
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
    return(theNumber);
  }
  else {
    throw new Error(`La entrada no era un número.`);
  }  
}

if (require.main === module) {
  main();
}