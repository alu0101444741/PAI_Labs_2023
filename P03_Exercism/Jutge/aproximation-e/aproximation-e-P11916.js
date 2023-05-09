/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 09 2022
 * @desc Aproximation of e
 *       The program ask for a number of terms and will print the aproximation of e
 *       that we get by adding the n first terms of the Taylor series.
 */
'use strict';

function main() {
  if ((process.argv[2] === undefined)) {
    throw new Error('Por favor, inserte el número de términos de la siguiente manera al ejecutar este programa\n\
    node archivo.js terminos');
  }
  console.log(`With ${process.argv[2]} terms, we get ${taylorSeries(testInput(process.argv[2])).toFixed(10)}.`);
}

/**
 * @desc Función para calcular el factorial de un número dado.
 * @param {Number} number - número sobre el cual calcular
 * @returns {Number} resultado
 */
function factorial(number) {
  let result = 1;
  for (let i = 0; i < number; ++i) {
    result *= (number - i);
  }
  return(result);
}
 
/**
 * @desc Función para calcular el polinomio de Taylor dados una cantidad de términos.
 * @param {Number} terms - cantidad de términos
 * @returns {Number} resultado de calcular el polinomio de Taylor
 */
function taylorSeries(terms) {
  let result = 0;
  for (let i = 0; i < terms; ++i) {
    result += (1.0 / factorial(i));
  }
  return (result);
}

 /**
 * @desc Test para comprobar que el argumento proporcionado es un número menor o igual a 20.
 * Lo convertirá de string a Number.
 * @param {Number} number
 * @returns {Number} el número.
 */
function testInput(number) {  
  let theNumber = Number(number);
  if (!Number.isNaN(theNumber)) {  // It is a number
    if ((theNumber >= 0) && (theNumber <= 20)){
      return(theNumber);
    }
    else {
      throw new Error(`El número deben ser mayor o igual a 0 y menor o igual a 20.`);
    }
  }
  else {
    throw new Error(`La entrada no era un número.`);
  }  
}
 
if (require.main === module) {
  main();
}
 