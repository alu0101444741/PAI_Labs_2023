/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 04 2023
 * @desc Add one second
 *       The program ask for three numbers: hours, minutes and seconds. It will print
 *       it back with one second added.
 */

'use strict';

/** @desc Función principal del programa */
function main() {
  if ((process.argv[2] === undefined) || (process.argv[3] === undefined) || (process.argv[4] === undefined)) {
    throw new Error("Por favor, inserte los datos de la siguiente manera al ejecutar este programa\n\
    node archivo.js horas minutos segundos");
  }
  console.log(addOneSecond(testInput(process.argv[2]), testInput(process.argv[3]), testInput(process.argv[4])));  
}

/**
 * @desc Devuelve la hora en formato hh::mm::ss sumando un segundo adicional
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 * @returns {string} la hora formateada
 */
function addOneSecond(hours, minutes, seconds) {
  checkValidTime(hours, minutes, seconds);
  if (seconds + 1 === 60) {
    seconds = 0;
    ++minutes;
    if (minutes === 60) {
      minutes = 0;
      ++hours;
      if (hours === 24) {
        hours = 0;
      }
    }          
  }
  else {
    seconds ++;
  }
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;
  
  return(`${hours}:${minutes}:${seconds}`);       
}

/**
 * @desc Funcion para comprobar que la hora proporcionada es correcta y lanzar un error en caso contrario.
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 */
function checkValidTime(hours, minutes, seconds) {
  if (hours > 24) throw new Error("Los segundos deben un valor ser entre 0 y 60");
  if (minutes > 59) throw new Error("Los minutos deben ser un valor entre 0 y 60");
  if (seconds > 59) throw new Error("Las horas deben ser un valor entre 0 y 23");  
}

/**
 * @desc Test para comprobar que el argumento proporcionado es un número mayor o igual a 0.
 * Lo convertirá de string a Number.
 * @param {Number} number
 * @returns {number|Error} el número.
 */
function testInput(number) {
  let theNumber = Number(number);
  
  if (!Number.isNaN(theNumber)) {  // It is a number
    if (theNumber >= 0) {
      return theNumber;
    }
    else {
      throw new Error("Error (", number, ") la entrada debe ser un número positivo.");
    }
  }
  else {
    throw new Error("Error (", number, ") La entrada no era un número.");
  }  
}

if (require.main === module) {
  main();
}