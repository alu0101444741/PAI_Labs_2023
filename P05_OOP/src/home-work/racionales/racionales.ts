/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 06 2023
 * @desc The program will ask for a two file names: one to read from and one to write on.
*/

'use strict';

import { writeFile, createReadStream } from 'fs';
import { createInterface } from 'readline';
import { Rational } from '../classrational/rational';

function main() {
  if (process.argv[2] === '--help') {
    console.log('racionales.ts -- Números Racionales\n\
    Modo de uso: node racionales.ts fichero_entrada fichero_salida\n\
    fichero_entrada: Fichero de texto que contendrá líneas con un par de números racionales: `a/b c/d` separados por un espacio\n\
    fichero_salida:  Fichero de texto que contendrá líneas con las operaciones realizadas: `a/b + c/d = n/m`');
    return(0);
  }
  testInput(process.argv[2], process.argv[3]);

  operateRationalNumbers(process.argv[2], process.argv[3]);
}

/**
 * @desc Reads pairs of rational numbers as A/B separated by spaces from an inputfile and writes the result
 * of certain operations (add, subtract, multiply, divide, compare) on an output file.
 * @param inputFile - name/path of a text file
 * @param outputFile - name/path of a text file
 */
async function operateRationalNumbers(inputFile : string, outputFile : string) {  
  let splitLine : string[];
  let toWriteOnFile : string = '';    

  const FILE_STREAM = createReadStream(inputFile);
  const READ_STREAM = createInterface({
    input: FILE_STREAM,
    crlfDelay: Infinity
  });
  for await (const LINE of READ_STREAM) {
    if (LINE !== '') {
      splitLine = LINE.split(' ');
      toWriteOnFile += operationsToString(splitLine[0], splitLine[1]);    
    }      
  }
  writeFile(outputFile, toWriteOnFile, (err) => {
    if (err) throw err;
  });
}

/**
 * @desc Given two rational numbers creates a string with the result from add, subtract,
 * multiply, divide and comparare them.
 * @param firstNumber - rational number
 * @param secondNumber - rational number
 * @return operations on format: a/b + c/d = n/m
 */
function operationsToString(firstNumber : string, secondNumber : string) : string {
  let toWriteOnFile : string = '';
  let comparator : string;
  let firstRationalNumber : Rational = new Rational(0, 0);        
  let secondRationalNumber : Rational = new Rational(0, 0);      
  secondRationalNumber.createFromString(secondNumber);
  firstRationalNumber.createFromString(firstNumber);

  firstRationalNumber.add(secondRationalNumber);
  toWriteOnFile += `${firstNumber} + ${secondNumber} = ${firstRationalNumber.toString()}\n`;

  firstRationalNumber.createFromString(firstNumber);
  firstRationalNumber.subtract(secondRationalNumber);
  toWriteOnFile += `${firstNumber} - ${secondNumber} = ${firstRationalNumber.toString()}\n`;

  firstRationalNumber.createFromString(firstNumber);
  firstRationalNumber.multiply(secondRationalNumber);
  toWriteOnFile += `${firstNumber} * ${secondNumber} = ${firstRationalNumber.toString()}\n`;

  firstRationalNumber.createFromString(firstNumber);
  firstRationalNumber.divide(secondRationalNumber);
  toWriteOnFile += `${firstNumber} / ${secondNumber} = ${firstRationalNumber.toString()}\n`;

  firstRationalNumber.createFromString(firstNumber);
  switch(firstRationalNumber.compare(secondRationalNumber)) {
    case 1: comparator = '>'; break;    
    case -1: comparator = '<'; break;
    default: comparator = '==='; break;
  }
  toWriteOnFile += `${firstNumber} ${comparator} ${secondNumber}\n\n`;
  return(toWriteOnFile);
}

/**
 * @desc Throw an error if one of the arguments is undefined
 * @param inputFile - name/path of a text file
 * @param outputFile - name/path of a text file
 */
function testInput(inputFile : string, outputFile : string) : void {
  if ((inputFile === undefined) || (outputFile === undefined)) {
    throw new Error('Modo de uso: node racionales.js fichero_entrada fichero_salida\n\
    Pruebe node racionales.ts --help para más información');
  }
}

main();