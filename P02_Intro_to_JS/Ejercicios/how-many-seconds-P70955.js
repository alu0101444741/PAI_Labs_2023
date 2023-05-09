/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 04 2023
 * @desc How many seconds are they?
 *       The program ask for five numbers (years, days, hours, minutes and seconds)
 *       and will print how many seconds are in total.
 */
'use strict';

/** @desc Función principal del programa */
function main() {
  if ((process.argv[2] === undefined) || (process.argv[3] === undefined) || (process.argv[4] === undefined) || (process.argv[5] === undefined) || (process.argv[6] === undefined)) {
    throw new Error("Por favor, inserte los datos de la siguiente manera al ejecutar este programa\n\
    node archivo.js años días horas minutos segundos");
  }
  console.log(howManySeconds(
    testInput(process.argv[2]),
    testInput(process.argv[3]),
    testInput(process.argv[4]),
    testInput(process.argv[5]),
    testInput(process.argv[6])
  ));  
}

/**
 * @desc Calcula la cantidad de segundos presentes en unos años, días, horas, minutos y segundos dados.
 * @param {Number} years
 * @param {Number} days
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} seconds
 * @returns {Number} cantidad de segundos
 */
function howManySeconds(years, days, hours, minutes, seconds) {
  let total = years * 365 * 24 * 60 * 60;
  total += days * 24 * 60 * 60;
  total += hours * 60 * 60;
  total += minutes * 60 + seconds;
  return(total);  
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