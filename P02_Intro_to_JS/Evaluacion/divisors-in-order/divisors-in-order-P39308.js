/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 08 2023
 * @desc Divisors in order
 *
 */
'use strict'; 

function main() {
  if (process.argv[2] === undefined){
    throw new Error('Por favor, inserte el(los) número(s) de la siguiente manera al ejecutar este programa\n\
                  node archivo.js número1 número2 ...');
  }
  const NUMBERS_INTRODUCED = process.argv.slice(2);
  for (let i = 0; i < NUMBERS_INTRODUCED.length; ++i) {
    console.log(`Divisors of ${NUMBERS_INTRODUCED[i]}: ` + getDivisors(testInput(NUMBERS_INTRODUCED[i])).join(' '));
  }
}

/**
 * @desc Función para imprimir por pantalla todos los divisores de un número en orden creciente.
 * @param {Number} number - número del cual buscarán sus divisores.
 * @return {Number[]} vector de los divisores
 */
function getDivisors(number){
  let divisors = [];
  for (let actualNumber = 1; actualNumber <= number; ++actualNumber){
    if (number % actualNumber === 0){
      divisors.push(actualNumber);
    }
  }
  return(divisors);
}

/**
 * @desc Test para comprobar que el argumento proporcionado es un número entre 1 y 10⁹ (ambos incluidos).
 * Lo convertirá de string a Number.
 * @param {Number} number
 * @returns {Number} el número.
 */
 function testInput(number){  
  let theNumber = Number(number);
  if (!Number.isNaN(theNumber)) {  // It is a number
    if ((number >= 1) && (number <= 10 ** 9)){
      return(theNumber);
    }
    else {
      throw new Error('El número debe estar entre 1 y 10⁹');
    }
  }
  else {
    throw new Error(`La entrada no era un número.`);
  }  
}

if (require.main === module) {
  main();
}