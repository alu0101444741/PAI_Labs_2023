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

import { testInput } from "../testinput";

/** @desc Función principal del programa */
function main() {
  if ((process.argv[2] === undefined) || (process.argv[3] === undefined) || (process.argv[4] === undefined)) {
    throw new Error("Por favor, inserte los datos de la siguiente manera al ejecutar este programa\n\
    node archivo.js horas minutos segundos");
  }
  console.log(addOneSecond(testInput(process.argv[2], 0), testInput(process.argv[3], 0), testInput(process.argv[4], 0)));  
}

/**
* @desc Devuelve la hora en formato hh::mm::ss sumando un segundo adicional
* @param hours
* @param minutes
* @param seconds
* @returns la hora en formato HH:MM:SS
*/
export function addOneSecond(hours : number, minutes : number, seconds : number) : string {
  let resultHours : string = hours.toString();
  let resultMinutes : string = minutes.toString();
  let resultSeconds : string = seconds.toString();
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
  resultHours = (hours < 10) ? `0${hours}` : `${hours}`;
  resultMinutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
  resultSeconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;
  
  return(`${resultHours}:${resultMinutes}:${resultSeconds}`);       
}

/**
* @desc Funcion para comprobar que la hora proporcionada es correcta y lanzar un error en caso contrario.
* @param hours
* @param minutes
* @param seconds
*/
export function checkValidTime(hours : number, minutes : number, seconds : number) : void {
  if (hours > 24) throw new Error("Las horas deben un valor ser entre 0 y 60");
  if (minutes > 59) throw new Error("Los minutos deben ser un valor entre 0 y 60");
  if (seconds > 59) throw new Error("Los segundos deben ser un valor entre 0 y 23");  
}

if (require.main === module) {
  main();
}