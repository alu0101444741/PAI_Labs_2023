/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 08 2023
 * @desc Three words
 *
 */
'use strict'; 

function main() {
  if (process.argv[2] === undefined){
    throw new Error('Por favor, inserte el(las) palabra(s) de la siguiente manera al ejecutar este programa\n\
                  node archivo.js palabra1 palabra2 palabra3');
  }
  const WORDS_INTRODUCED = process.argv.slice(2);
  if (WORDS_INTRODUCED.length != 3) throw new Error('Por favor, introduzca exactamente 3 palabras');
  console.log(reverseWords(WORDS_INTRODUCED).join(' '));
}
 
/**
 * @desc Función para invertir el orden de un vector de string.
 * @param {String[]} words - array de string.
 * @return {String[]} array de string en orden invertido
 */
function reverseWords(words){
  let invertedWords = [];
  for (let actualWord = words.length - 1; actualWord >= 0; --actualWord){
    invertedWords.push(words[actualWord])
  }
  return(invertedWords);
}
 
if (require.main === module) {
  main();
}