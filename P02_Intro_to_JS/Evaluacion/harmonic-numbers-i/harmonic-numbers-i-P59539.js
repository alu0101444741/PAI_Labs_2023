
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 08 2023
 * @desc Harmonic numbers I
 *       The program ask for one number n, and prints the n-th harmonic number, defined as Hn = 1/1 + 1/2 + ⋯ + 1/n.
 */

'use strict';

function main() {
  if (process.argv[2] === undefined){
    throw new Error('Por favor, inserte el número de la siguiente manera al ejecutar este programa\n\
                  node archivo.js número');
  }
  console.log(harmonicNumber(testInput(process.argv[2])).toFixed(4));
}

/**
 * @desc Función para obtener el n-ésimo número harmónico a partir de un número 'n' dado.
 * @param {Number} number - número 'n'
 * @return {Number} n-ésimo número harmónico.
 */
function harmonicNumber(number) {
  let sum = 0;
  for (let i = 1; i <= number; ++i) {
    sum += 1 / i;
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
    if (theNumber >= 0){
      return(theNumber);
    }
    else {
      throw new Error(`Los números deben ser mayor o iguales a 0.`);
    }
  }
  else {
    throw new Error(`La entrada no era un número.`);
  }  
}

if (require.main === module) {
  main();
}