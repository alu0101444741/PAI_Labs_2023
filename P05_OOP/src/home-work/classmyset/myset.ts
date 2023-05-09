/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 06 2023
 * @desc Class MySet
 * @module myset
 */

'use static';

import { isNaturalNumber } from "../utilities/utilities";

/** @desc Class MySet */
export class MySet {
  /**
   * @desc MySet class constructor
   * @param numbers - array de números naturales
   */
  constructor(private collection : number[] = []) {
    /*this.collection = [];    
    for (const NUMBER of numbers) {
      this.add(NUMBER);
    }    */
  }

  /**
  * @desc Adds a new number to the set
  * @param newNumber - natural number
  */
  public add(newNumber : number) : void {
    let number : number = Number(newNumber);
    isNaturalNumber(number);
    if (!this.collection.includes(number)) {
      this.collection.push(number);
    }
  }

  /**
  * @desc Creates both sets union
  * @param otherSet - MySet instance
  * @return union on a new MySet instance
  */
  public union(otherSet : MySet) : MySet {
    let resultSet : MySet = new MySet();
    for (const NUMBER of this.collection) resultSet.add(NUMBER);
    for (const NUMBER of otherSet.collection) resultSet.add(NUMBER);
    return(resultSet);
  }

  /**
  * @desc Creates both sets intersection
  * @param otherSet - MySet instance
  * @return intersection on a new MySet instance
  */
  public intersection(otherSet : MySet) : MySet {
    let resultSet : MySet = new MySet();
    for (const NUMBER of this.collection) {
      if (otherSet.contains(NUMBER)) {
        resultSet.add(NUMBER);
      }
    }
    return(resultSet);
  }

  /**
  * @desc Creates both sets difference
  * @param otherSet - MySet instance
  * @return difference on a new MySet instance
  */
  public difference(otherSet : MySet) {
   let resultSet : MySet = new MySet();
   for (const NUMBER of this.collection) {
     if (!otherSet.contains(NUMBER)) {
       resultSet.add(NUMBER);
     }
   }
   return(resultSet);
 }

  /**
  * @desc Check if a given set is a subset of the current one.
  * @param otherSet - MySet instance
  * @return 'true' if is subset
  */
  public subset(otherSet : MySet) {
    if(otherSet.size() > this.size()) {
      return(false);
    }
    for(const NUMBER of otherSet.collection) {
      if (!this.contains(NUMBER)) {
        return(false);
      }
    }
    return(true);
  }

 /**
  * @desc Check if a given set and the current one are disjoint.
  * @param otherSet - MySet instance
  * @return 'true' if they are disjoint
  */
 public disjoint(otherSet : MySet) : boolean {
   for (const NUMBER of this.collection) {
     if (otherSet.contains(NUMBER)) {
       return(false);
     }
   }
   return(true);
 }

  /**
  * @desc Check if the current set is equal (contains the same) to another one.
  * @param otherSet - MySet instance
  * @return 'true' if they are equal
  */
  public eql(otherSet : MySet) : boolean {
    if(this.size() === otherSet.size()) {
      for (const NUMBER of this.collection) {
        if (!otherSet.contains(NUMBER)) {
          return(false);
        }
      }
      return(true);
    }
    return(false);
  }

  /**
  * @desc Check if a given number is contained by the set
  * @param number - natural number
  * @return 'true' if is contained
  */
  public contains(number : number) : boolean {
    let theNumber : number = Number(number);
    isNaturalNumber(theNumber);
    if (this.collection.includes(theNumber)) {
      return(true);
    }
    return(false);
  }

  /**
  * @desc Check if the set is empty (contains nothing)
  * @return 'true' if empty 
  */
  public empty() : boolean {
    if (this.collection.length === 0) {
      return(true);
    }
    return(false);
  }

  /**
  * @desc Returns set's size
  * @return how many numbers are contained
  */
  public size() : number {
    return(this.collection.length);
  } 

  /**
   * @desc Returns a string with all contained numbers
   * @return string on format { 1 2 3 4 } 
   */
  public toString() : string { 
    let stringifiedSet = '{';
    for (const NUMBER of this.collection) {
      stringifiedSet += ` ${NUMBER}`;
    }
    stringifiedSet += ' }';
    return(stringifiedSet);
  }
}
