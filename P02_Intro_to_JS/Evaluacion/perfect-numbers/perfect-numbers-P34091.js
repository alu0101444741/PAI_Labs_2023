/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 08 2023
 * @desc Perfect numbers
 *       The function ask for a number and classifies it as: perfect, abundant or deficient according to
 *       Nechomachus classification scheme.
 */
'use strict';

 function main() {
  if (process.argv[2] === undefined){
    throw new Error('Por favor, inserte el número de la siguiente manera al ejecutar este programa\n\
                  node archivo.js número');
  }
  console.log(`is_perfect(${process.argv[2]}) -> ` + isPerfectNumber(testInput(process.argv[2])));
}

/**
 * @desc Función que identifica si un número es perfecto o no.
 * @param {number} number - número a clasificar
 * @returns {Boolean} 'true' si es perfecto
 */
function isPerfectNumber(number) {
  if (number === 0) return(false);
  let factorsSum = 0;
  let factorsOfNumber = getDivisors(number);
  factorsOfNumber.forEach((factor) => factorsSum += factor);
  if (factorsSum === number) {
    return(true);
  }
  return(false);
}
  
/**
 * @desc Función para imprimir por pantalla todos los divisores de un número en orden creciente.
 * @param {Number} number - número del cual buscarán sus divisores.
 * @return {Number[]} vector de los divisores
 */
 function getDivisors(number){
  let divisors = [];
  for (let actualNumber = 1; actualNumber <= (number / 2); ++actualNumber){
    if (number % actualNumber === 0){
      divisors.push(actualNumber);
    }
  }
  return(divisors);
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
    if (theNumber >= 0){
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