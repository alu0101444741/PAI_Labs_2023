/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Feb 15 2023
 * @desc The sequence of Collatz
 *       The program ask for several numbers n >= 1. If the number is even it will divide it by two,
 *       otherwise it will multiply it by 3 and add it 1. The program will repeat this until it reaches 1 and
 *       will print n in every step.
 */

 'use strict';

const MAXIMUM_N_VALUE = 10 ** 6;
const MAXIMUM_FACTOR_VALUE = 1000;

function main() {
  if (process.argv[2] === undefined) {
    throw new Error("Por favor, inserte el/los número(s) de la siguiente manera al ejecutar este programa\nnode archivo.js num1 num2 num3");
  }
  const NUMBERS = process.argv.slice(2);
  checkInput(testInput(NUMBERS[2]), testInput(NUMBERS[0]), testInput(NUMBERS[1]));
  console.log(collatzPseudoSequence(testInput(NUMBERS[2]), testInput(NUMBERS[0]), testInput(NUMBERS[1]))); 
}


/**
 * @desc Dado un número n, en cada paso se realizará la operación:
 *  n/2 + X, si el resultado es par
 *  3*n + Y, si es impar.
 * El proceso se repite hasta que se perciba un ciclo.
 * @param {Number} number - número a verificar
 * @param {Number} evenFactor - valor X
 * @param {Number} oddFactor - valor Y
 * @return {Number} número de pasos necesarios
 */
function collatzPseudoSequence(number, evenFactor, oddFactor) {
  let actualNumber = number;
  let sequence = [number];
  let cycleFound = false;
  let cycleStartNumber;
  let actualIndex;
  let cycleLength = 1;

  for (let i = 0; i < MAXIMUM_N_VALUE; ++i) {
    if (actualNumber % 2 === 0) {
      actualNumber = (actualNumber / 2) + evenFactor;
    }
    else {
      actualNumber = (actualNumber * 3) + oddFactor;
    }
    if (actualNumber > MAXIMUM_N_VALUE) return(actualNumber);

    if (!cycleFound) {
      if (sequence.includes(actualNumber)) {
        cycleStartNumber = actualNumber;
        actualIndex = sequence.findIndex(x => x === actualNumber) + 1;
        cycleFound = true;
      }
    }
    else {      
      if (actualNumber === cycleStartNumber){
        return(cycleLength);
      }
      else if (actualNumber === sequence[actualIndex]) {
        ++cycleLength;
        ++actualIndex;
      }
      else {
        return(cycleLength);
      }
    }
    sequence.push(actualNumber);       
  }  
  return(cycleLength);
}

// Para cada número:
//  Mirar si hay uno igual y empezara buscar:
//    for ()
  // GUardo todos... 
  // 1- SI el actual es igual al primero: empiezo a contar
  //
/**
 * @desc Test para comprobar que el argumento proporcionado es un número mayor o igual a 0.
 * Lo convertirá de string a Number.
 * @param {number} number
 * @returns {number|Error} el número.
 */
function testInput(number) {
  let theNumber = Number(number);  
  if (!Number.isNaN(theNumber)) {  // It is a number
    if (theNumber >= 0) {
      return(theNumber);
    }
    else {
      throw new Error("Error (", number,") La entrada debe ser un número positivo mayor o igual que 0.");
    }
  }
  else {
    throw new Error("Error (", number,") La entrada no era un número.");
  }  
}

/**
 * @desc Función para verificar que los valores a utilizar en la psuedosecuencia de Collatz son correctos.
 * El valor N no puede ser mayor 10⁶, así como los valores de X e Y no deben ser mayores a 1000.
 * @param {Number} valueN
 * @param {Number} valueX
 * @param {Number} valueY
 */
function checkInput(valueN, valueX, valueY) {
  checkValueN(valueN);
  if ((valueX > MAXIMUM_FACTOR_VALUE) || (valueY > MAXIMUM_FACTOR_VALUE)) throw new Error("Valores incorrectos. X e Y no deben ser mayores a 1000");
}

/**
 * @desc Función para verificar que el valor N a utilizar en la psuedosecuencia de Collatz es correcto.
 * El valor N no puede ser mayor 10⁶
 * @param {Number} valueN
 */
function checkValueN(valueN) {
  if (valueN > MAXIMUM_N_VALUE) throw new Error("N debe ser menor a 10⁶.")
}

if (require.main === module) {
  main();
}