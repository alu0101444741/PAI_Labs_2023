/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 09 2023
 * @desc Is it palindrome?
 *      The program ask for a string and tells if it is a palindrome.
 *
 */
 'use strict';

function main() { 
  if (process.argv[2] === undefined) {
    throw new Error('Por favor, inserte la cadena de la siguiente manera al ejecutar este programa\nnode archivo.js cadena');
  }
  if (palindromic(process.argv[2])) {
    console.log(process.argv[2] + ' is palindrome');
  }
  else {
    console.log(process.argv[2] + ' is not palindrome');
  } 
}

/**
 * @desc Functión para comprobar si una cadena es un palíndromo.
 * @param {String} sequence - cadena a comprobar
 * @returns {Boolean} 'true' si es palíndromo
 */
function palindromic(sequence) {
  let left = '', right = '';
  for (let i = 0; i < sequence.length/2; ++i) {
    left = sequence.charAt(i);
    right = sequence.charAt(sequence.length - i - 1);    
    if (left !== right) return(false);    
  }  
  return (true);
} 
 
if (require.main === module) {
  main();
}