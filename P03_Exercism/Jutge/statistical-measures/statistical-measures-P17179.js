/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 09 2023
 * @desc Statistical measures
 *       The program ask for a number n followed by n sequences. For each sequence, it will ask for a number X
 *       which means how many numbers it will have followed by those numbers.
 *       For each sequence, will print it minimum, maximum and average.
 */
'use strict'; 
 
function main() { 
  if (process.argv[2] === undefined){
    throw new Error('Por favor, inserte la(s) secuencia(s) de la siguiente manera al ejecutar este programa\n\
                  node archivo.js X n1 num1 ... numN n2 num1 ... numN\nSiendo X la cantidad de secuencias a evaluar\
                  y n1 la cantidad de números a evaluar en la primera secuencia');
  } 
  const SEQUENCES_AMOUNT = testInput(process.argv[2]);
  const ARGUMENTS = [...process.argv.slice(3)];

  console.log(matrixToString(statisticalMeasures(getSequences(SEQUENCES_AMOUNT, ARGUMENTS))));
}

/**
 * @desc Función para obtener el mínimo, el máximo y la media de una serie de secuencias de números
 * @param {Number[][]} sequences - secuencias en forma de matriz
 * @return {Number[][]} matriz de tres columnas con los resultados obtenidos para cada secuencia
 */
function statisticalMeasures(sequences) {
  let measurements = [];
  for (const actualSequence of sequences){    
    let minimum = actualSequence[0],
        maximum = actualSequence[0],
        average = 0.0;
    for (let i = 0; i < actualSequence.length; ++i) {
      if (actualSequence[i] < minimum) {
        minimum = actualSequence[i] * 1.0;
      }
      else if (actualSequence[i] > maximum) {
        maximum = actualSequence[i] * 1.0;
      }
      average += actualSequence[i] * 1.0;
    }
    average = average / actualSequence.length;
    measurements.push([minimum, maximum, average]);
  } 
  return(measurements);
}

/**
 * @desc Función para dividir un array de números en un número determinado de secuencias.
 * El resultado quedará expresado en forma de matriz
 * @param {Number} sequence_amount - cantidad de secuencias
 * @param {Number[]} numbers - array de números a dividir
 * @return {Number[][]} matriz de números
 */
function getSequences(sequence_amount, numbers){
  let sequences = [];
  for (let i = 0; i < sequence_amount; ++i) { // Bucle para cada secuencia
    let actualSequence = [];   
    let sequence_size = testInput(numbers[0]);
    numbers.shift();    
    for (let j = 0; j < sequence_size; ++j) { // Bucle para cada número      
      actualSequence.push(testInput(numbers[j]));
    }
    sequences.push(actualSequence);
    numbers = numbers.slice(sequence_size);
  }
  return(sequences);
}

/**
 * @desc Función para convertir una matriz en una cadena formateada.
 * @param {Number[][]} matrix - matriz a convertir
 * @return {String} cadena formateada con la información de la matriz
 */
function matrixToString(matrix){
  let matrixInformation = '';
  for (const line of matrix){
    for (const number of line){
      matrixInformation += number.toFixed(4) + ' ';
    }    
    matrixInformation += '\n';
  }
  return(matrixInformation);
}
/**
 * @desc Test para comprobar que el argumento proporcionado es un número.
 * Lo convertirá de string a Number.
 * @param {Number} number
 * @returns {Number} el número.
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