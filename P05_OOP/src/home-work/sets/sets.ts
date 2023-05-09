/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 07 2023
 * @desc MySet client program
*/

'use strict';

import { MySet } from '../classmyset/myset';

function main() {
  //let set : MySet = new MySet(createNumberArray(process.argv.slice(2, process.argv.length)));
  let set : MySet = new MySet([1, 3, 5, 7, 9]);
  let otherSet : MySet = new MySet([2, 4, 6, 8, 10, 10000000]);  
  console.log('Sets created:\n\t' + set.toString() + '\n\t' + otherSet.toString());
/*
  console.log('First set contains 999: ' + set.contains(999));
  set.add(999);
  console.log('Added one element: ' + set.toString());
  console.log('First set contains 999: ' + set.contains(999));
*/
  let unionSet : MySet = set.union(otherSet);
  let intersectionSet : MySet = set.intersection(otherSet);
  let differenceSet : MySet = set.difference(otherSet);

  console.log('Union set: ' + unionSet.toString());
  console.log('Intersection set: ' + intersectionSet.toString());
  //console.log('Difference set: ' + differenceSet.toString());
/* 
  console.log(otherSet.toString() + ' subset of ' + set.toString() + ' --> ' + set.subset(otherSet));
  console.log(otherSet.toString() + ' and ' + set.toString() + ' are disjoint --> ' + set.disjoint(otherSet));
  console.log(otherSet.toString() + ' and ' + set.toString() + ' are equal --> ' + set.eql(otherSet));
*/
}

/**
 * @desc Creates an array of number from string
 * @param numbers - string with numbers
 */
function createNumberArray(numbers : string[]) : number[] {
  let numbersArray : number[] = [];
  for (const NUMBER of numbers) {
    if (isNaN(Number(NUMBER))) throw new Error('Introduced values MUST be numbers.');
    numbersArray.push(Number(NUMBER));
  }
  return(numbersArray);
}

main();