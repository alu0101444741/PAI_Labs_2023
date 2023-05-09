/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 04 2023
 * @desc Maximum of three integers
 *       The program ask for three numbers and prints the maximum
 */
'use strict';

/** @desc Función principal del programa */
function main() {
  if ((process.argv[2] === undefined) || (process.argv[3] === undefined) || (process.argv[4] === undefined)) {
    throw new Error("Por favor, inserte los operandos de la siguiente manera al ejecutar este programa\n\
    node archivo.js numero1 numero2 numero3");
  }
  console.log(maximumThreeIntegers(testInput(process.argv[2]), testInput(process.argv[3]), testInput(process.argv[4])));
}

/**
 * @desc Devuelve el mayor entero de tres.
 * @param {Number} firstInteger
 * @param {Number} secondInteger
 * @param {Number} thirdInteger
 * @returns {Number} mayor entero
 */
function maximumThreeIntegers(firstInteger, secondInteger, thirdInteger) {
  return(Math.max(firstInteger, secondInteger, thirdInteger));
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
    if (theNumber >= 0) {
      return theNumber;
    }
    else {
      throw new Error('La entrada debe ser un número mayor o igual a 0.');
    }
  }
  else {
    throw new Error('La entrada no era un número.');
  } 
}

if (require.main === module) {
  main();
}