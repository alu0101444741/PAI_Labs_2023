/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 04 2023
 * @desc Intervals I
 *       The program ask for two intervals and will print their intersection.
 */

'use strict';

import { testInput } from "../testinput";

/** @desc Función principal del programa */
function main() {
  if ((process.argv[2] === undefined) || (process.argv[3] === undefined) || (process.argv[4] === undefined) || (process.argv[5] === undefined)) {
    throw new Error("Por favor, inserte los intervalos de la siguiente manera al ejecutar este programa\nnode archivo.js a1 a2 b1 b2\n\
    siendo a1 y a2 respectivamente el inicio y final del primer intervalo, asi como b1 y b2 lo son del segundo.");
  }
  const INTERVALS : string[] = process.argv.slice(2);
  let numberIntervals : number[] = checkIntervals(INTERVALS);
  console.log(findIntersection(numberIntervals[0], numberIntervals[1], numberIntervals[2], numberIntervals[3]));  
}

/**
 * @desc Función para encontrar la intersección, si la hubiese, de dos intervalos.
 * @param firstStart - inicio del primer intervalo
 * @param firstEnd - final del primer intervalo
 * @param lastStart - inicio del segundo intervalo
 * @param lastEnd - final del segundo intervalo
 * @return cadena formateada con los itervalos
 */
export function findIntersection(firstStart : number, firstEnd : number, lastStart : number, lastEnd : number) : number[] {
  let intersection : number[] = [];  
  if (firstStart == lastStart) { 
    intersection = [firstStart, Math.min(firstEnd, lastEnd)];
  }
  else if (firstStart < lastStart) {
    if (firstEnd >= lastStart) {
      intersection = [lastStart, Math.min(firstEnd, lastEnd)];
    }
  }
  else {
    if (firstStart <= lastEnd) {
      intersection = [firstStart, Math.min(firstEnd, lastEnd)];
    }
  }
  return(intersection);
}

/**
 * @desc Comprobación de los intervalos.
 * El inicio de cada uno de los intervalos no puede ser mayor al final del mismo.
 * Cada valor proporcionado debe ser un número.
 * @param intervals - array con intervalos
 * @return array con los intervalos convertidos a number
 */
function checkIntervals(intervals : string[]) : number[] {
  let numberIntervals : number[] = [];
  for (let i = 0; i < 4; i++) {
    numberIntervals.push(testInput(intervals[i]));
  }
  if (numberIntervals[0] > numberIntervals[1]){
    throw new Error("Bad interval:" + `[${numberIntervals[0]},${numberIntervals[1]}]`);
  }
  if (numberIntervals[2] > numberIntervals[3]) {
    throw new Error("Bad interval:" + `[${numberIntervals[2]},${numberIntervals[3]}]`);
  }
  return(numberIntervals);
}

if (require.main === module) {
  main();
}