/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 04 2023
 * @desc Elementos
 *       Juego del estilo piedra, papel o tijera donde estos están representados por agua(A), piedra(P) y viento(V).
 *       El programa recibe dos iniciales representando a dos de los elementos e imprime 1 si gana el primero, 2 si
 *       vence el segundo o "-" si se produce un empate.
 */
'use strict';

/** @desc Función principal del programa */
function main() {
  if ((process.argv[2] === undefined) || (process.argv[3] === undefined)) {
    throw new Error("Por favor, inserte las letras de la siguiente manera al ejecutar este programa\nnode archivo.js letra1 letra2");
  }
  testInput(process.argv[2]);
  testInput(process.argv[3]);
  console.log("Resultado:", elementos(process.argv[2], process.argv[3]));
}

/**
 * @desc Dados dos elementos (A, P o V), se devuelve 1 si ha ganado la primera parte, 2 si lo ha hecho la segunda.
 * En caso de empate, se devuelve un guión "-".
 * @param {String} first - primera parte
 * @param {String} second - segunda parte
 * @return {String} 1, 2 o "-"
 */
function elementos(first, second) {
  let firstPart = first.toUpperCase();
  let secondPart = second.toUpperCase();
  
  if (firstPart === secondPart){
    return ("-"); //Empate
  }
  if (firstPart === 'A') {   // A vs ...    
    if (secondPart === 'P'){
      return ("1");
    }
    else {
      return ("2");
    }
  }
  else if (firstPart === 'P') { // P vs ...
    if (secondPart === 'A'){
      return ("2");
    }
    else { 
      return ("1");
    }
  }
  else { // V vs ...
    if (secondPart === 'A'){
      return ("1");
    }
    else {
      return ("2");
    }
  }
}

/**
 * @desc Función para comprobar que un caracter dado pertenece al alfabeto latino.
 * @param {String} character - caracter a comprobar
 * @return {true | false} 'true' si pertenece.
 */
function isLetter(character) {
  return ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z'));
}

/**
 * @desc Función para comprobar que un caracter dado es una A, una P o una V.
 * @param {String} character - caracter a comprobar
 * @return {true | false} 'true' si pertenece.
 */
function isAPV(character) {
  return (character == 'A' || character == 'a' || character == 'P' || character == 'p' || character == 'V' || character == 'v');
}

/**
 * @desc Funcion para comprobar que la entrada es correcta, es decir que sea una de las letras siguientes: A, P, V.
 * @param {String} character - caracter a comprobar
 */
function testInput(character) {
  if (!isLetter(character)) {
    throw new Error("La entrada no era una letra.");
  }
  if (!isAPV(character)) {
    throw new Error("La entrada debe ser una de las siguientes letras: A, P, V.");
  }    
}

if (require.main === module) {
  main();
}