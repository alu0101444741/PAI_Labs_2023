/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 04 2023
 * @desc Triangle
 *       The program ask for a number n and prints a triangle with n levels
 *       made with asterisks. Negative numbers will result in no triangle.
 */
'use strict';

/** @desc Función principal del programa */
function main() {
  if (process.argv[2] === undefined) {
    throw new Error("Por favor, inserte la cantidad de pisos del triangulo de la siguiente manera al ejecutar este programa\n\
    node archivo.js pisos");
  }
  drawTriangle(testInput(process.argv[2]));
}

/**
 * @desc Función para dibujar en consola un triángulo según una altura (número de líneas).
 * @param {Number} height - altura del tríangulo
 */
function drawTriangle(height) {
  let floor = '*';
  for (let i = 0; i < height; i++) {
    console.log(floor);
    floor += '*';
  }  
}

/**
 * @desc Test para comprobar que el argumento proporcionado es un número mayor o igual a 0.
 * Lo convertirá de string a Number.
 * @param {Number} number
 * @returns {Number} el número.
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
