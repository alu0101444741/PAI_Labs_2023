/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 04 2023
 * @desc Integer division and remainder
 *       The program ask for two numbers a and b>0 and prints the division and remainder
 *       of a divided by b.
 */
'use strict';

/** @desc Función principal del programa */
function main() {
  if ((process.argv[2] === undefined) || (process.argv[3] === undefined)) {
    throw new Error("Por favor, inserte los operandos de la siguiente manera al ejecutar este programa\n\
    node archivo.js operando1 operando2");
  }
  let divisor = testInput(process.argv[3]);
  if (divisor === 0) throw Error("El divisor debe ser mayor que 0.");

  console.log(integerDivision(testInput(process.argv[2]), divisor));
}

/**
 * @desc Funcion para obtener el cociente y resto de una división entera.
 * El resultado se devuelve en un array de tamaño 2 con el cociente y resto en las posiciones 0 y 1, respectivamente.
 * @param {Number} dividend
 * @param {Number} divisor
 * @return {Number[]} [cociente, resto]
 */
function integerDivision(dividend, divisor) { 
  return([Math.floor(dividend / divisor), dividend % divisor]);
}

/**
 * @desc Test para comprobar que el argumento proporcionado es un número mayor o igual a 0.
 * Lo convertirá de string a Number.
 * @param {Number} number
 * @return {Number} el número.
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