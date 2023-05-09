/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 08 2023
 * @desc Primality
 *
 */
'use strict';
 
/** @desc Función principal del programa */
function main() {
  if (process.argv[2] === undefined){
    throw new Error('Por favor, inserte el(los) número(s) de la siguiente manera al ejecutar este programa\n\
                  node archivo.js número1 número2 ...');
  }
  let howManyNumbers = 0;
  if (testInput (process.argv[2])) {
    howManyNumbers = process.argv[2];
  }
  const numbersIntroduced = process.argv.slice(3, howManyNumbers + 3);
  if (numbersIntroduced.length != process.argv[2]) {
    throw new Error(`Ha indicado que se ejecutarán, ${process.argv[2]} pero ha introducido ${numbersIntroduced.length}.\
                "\nPor favor, inténtelo de nuevo`);
  }
  for (let i = 0; i < howManyNumbers; ++i) {
    if (isPrime(testInput(numbersIntroduced[i]))) {
      console.log(numbersIntroduced[i] + ' is prime');
    }
    else {
      console.log(numbersIntroduced[i] + ' is not prime');
    }
  }
 }

/**
 * @desc Función para determinar si un número es primo.
 * @param {Number} number - número a comprobar
 * @returns {Boolean} 'true' si es primo
 */
function isPrime(number) {
  const LAST_NUMBER = Math.ceil(Math.sqrt(number));
  if (number === 2) return(true);
  for (let actualNumber = 2; actualNumber <= LAST_NUMBER; ++actualNumber) {
    if (number % actualNumber === 0) {
      return(false);
    }
  }
  return(true);
 }

/**
 * @desc Test para comprobar que el argumento proporcionado es un número mayor o igual a 1.
 * Lo convertirá de string a Number.
 * @param {Number} number
 * @returns {Number} el número.
 */
function testInput(number) {  
  let theNumber = Number(number);
  if (!Number.isNaN(theNumber)) {  // It is a number
    if (theNumber >= 1){
      return(theNumber);
    }
    else {
      throw new Error(`Los números deben ser mayor o iguales a 1.`);
    }
  }
  else {
    throw new Error(`La entrada no era un número.`);
  }  
}
 
if (require.main === module) {
  main();
}
 