/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 09 2023
 * @desc Reverse sequence
 *       The program ask for a number n followed by a sequence of n integer numbers.
 *       Will print the sequence on reverse order.
 */
'use strict';

function main() {
  if (process.argv[2] === undefined){
    throw new Error("Por favor, inserte el/los número(s) de la siguiente manera al ejecutar este programa\n\
                  node archivo.js X num1 num2 ... numX\nsiendo X la cantidad de números a evaluar");
  }  
  let howManyNumbers = testInput(process.argv[2]);
  const NUMBERS_INTRODUCED = process.argv.slice(3, howManyNumbers + 3);
  if (NUMBERS_INTRODUCED.length != process.argv[2]) {
    throw new Error(`Ha indicado que se ejecutarán, ${process.argv[2]} pero ha introducido ${numbersIntroduced.length}.\
                "\nPor favor, inténtelo de nuevo`);
  }  
  console.log(reverseSequence(NUMBERS_INTRODUCED).join(' '));
}

/**
 * @desc Función para invertir el orden de un vector de enteros.
 * @param {Number[]} sequence - array de enteros.
 * @return {Number[]} array de enteros en orden invertido
 */
 function reverseSequence(sequence){
  let invertedSequence = [];
  for (let actualNumber = sequence.length - 1; actualNumber >= 0; --actualNumber){
    invertedSequence.push(testInput(sequence[actualNumber]))
  }
  return(invertedSequence);
}

 /**
 * @desc Test para comprobar que el argumento proporcionado es un número.
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