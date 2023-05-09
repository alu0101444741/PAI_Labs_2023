/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 04 2023
 * @desc Counting a's
 *       The program ask for several numbers n >= 1. If the number is even it will divide it by two,
 *       otherwise it will multiply it by 3 and add it 1. The program will repeat this until it reaches 1 and
 *       will print n in every step.
 */
'use strict';

/** @desc Función principal del programa */
function main() {  
  const sequence = process.argv.slice(2).join(' ');
  console.log("Appearances:", countAppearances(sequence, 'a')); 
}

/**
 * @desc Dada una secuencia de caracteres, se cuentan las repeticiones de un determinado caracter.
 * @param {String} sequence - cadena de caracteres
 * @param {String} character - caracter a buscar
 * @return {Number} cantidad de apariciones
 */
function countAppearances(sequence, character){
  let appearances = 0;
  for (const letter of sequence){
    if (letter === character){
      appearances ++;
    }
  }
  return(appearances);
}

if (require.main === module) {
  main();
}