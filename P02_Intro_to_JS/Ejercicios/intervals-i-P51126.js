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

/** @desc Función principal del programa */
function main() {
  if ((process.argv[2] === undefined) || (process.argv[3] === undefined) || (process.argv[4] === undefined) || (process.argv[5] === undefined)) {
    throw new Error("Por favor, inserte los intervalos de la siguiente manera al ejecutar este programa\nnode archivo.js a1 a2 b1 b2\n\
    siendo a1 y a2 respectivamente el inicio y final del primer intervalo, asi como b1 y b2 lo son del segundo.");
  }
  let intervals = process.argv.slice(2);
  for (let i = 0; i < 4; i++) {
    intervals[i] = testInput(intervals[i]);
  }
  if (intervals[0] > intervals[1]){
    throw new Error("Bad interval:" + `[${intervals[0]},${intervals[1]}]`);
  }
  if (intervals[2] > intervals[3]) {
    throw new Error("Bad interval:" + `[${intervals[2]},${intervals[3]}]`);
  }

  findIntersection(intervals[0], intervals[1], intervals[2], intervals[3]);  
}

/**
 * @desc Función para encontrar la intersección, si la hubiese, de dos intervalos.
 * @param {Number} firstStart - inicio del primer intervalo
 * @param {Number} firstEnd - final del primer intervalo
 * @param {Number} lastStart - inicio del segundo intervalo
 * @param {Number} lastEnd - final del segundo intervalo
 */
function findIntersection(firstStart, firstEnd, lastStart, lastEnd){
  let intersection = "[";
  
  if (firstStart == lastStart) { 
    intersection = intersection + firstStart + "," + Math.min(firstEnd, lastEnd);
  }
  else if (firstStart < lastStart) {
    if (firstEnd >= lastStart) {
      intersection = intersection + lastStart + "," + Math.min(firstEnd, lastEnd);
    }
  }
  else {
    if (firstStart <= lastEnd) {
      intersection = intersection + firstStart + "," + Math.min(firstEnd, lastEnd);
    }
  }
  intersection += "]";
  
  console.log(intersection);
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
    return(theNumber);
  }
  else {
    throw new Error(`La entrada no era un número.`);
  }  
}

if (require.main === module) {
  main();
}