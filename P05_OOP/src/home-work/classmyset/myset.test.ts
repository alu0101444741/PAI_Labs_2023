/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 19 2022
 * @desc Tests for class MySet
 *       
 */
'use strict';
import { MySet } from './myset';

describe('MySet', () => {
  let mySet : MySet;

  beforeEach(() => {
    mySet = new MySet();
    mySet.add(5);
    mySet.add(1);
    mySet.add(1);
    mySet.add(0);
  });

  test('has a toString method', () => {
    expect(mySet.toString()).toBe('{ 5 1 0 }');
  });

  test('has an add method', () => {
    mySet.add(100000000);
    expect(mySet.toString()).toBe('{ 5 1 0 50 }');
    mySet.add(50);
    expect(mySet.toString()).toBe('{ 5 1 0 50 }');
    mySet.add(51);
    expect(mySet.toString()).toBe('{ 5 1 0 50 51 }');
  });

  test('has an union method', () => {
    let otherSet = new MySet();
    otherSet.add(5);
    otherSet.add(1);
    otherSet.add(6);
    otherSet.add(15);
    let resultSet = mySet.union(otherSet);
    expect(resultSet.toString()).toBe('{ 5 1 0 6 15 }');
    otherSet.add(7);
    otherSet.add(1);
    otherSet.add(0);
    resultSet = mySet.union(otherSet);
    expect(resultSet.toString()).toBe('{ 5 1 0 6 15 7 }');
  });

  test('has an intersection method', () => {
    let otherSet = new MySet();
    otherSet.add(5);
    otherSet.add(1);
    otherSet.add(6);
    otherSet.add(15);
    let resultSet = mySet.intersection(otherSet);
    expect(resultSet.toString()).toBe('{ 5 1 }');
    mySet.add(7);
    otherSet.add(1);
    otherSet.add(0);
    resultSet = mySet.intersection(otherSet);
    expect(resultSet.toString()).toBe('{ 5 1 0 }');
    mySet.add(15);
    resultSet = mySet.intersection(otherSet);
    expect(resultSet.toString()).toBe('{ 5 1 0 15 }');
  });

  test('has a difference method', () => {
    let otherSet = new MySet();
    otherSet.add(5);
    otherSet.add(1);
    otherSet.add(6);
    otherSet.add(15);
    mySet.add(15);
    mySet.add(16);
    let resultSet = mySet.difference(otherSet);
    expect(resultSet.toString()).toBe('{ 0 16 }');
  });

  test('has a subset method', () => {
    let otherSet = new MySet();
    otherSet.add(5);
    otherSet.add(1);
    otherSet.add(0);
    expect(mySet.subset(otherSet)).toBe(true);
    otherSet.add(6);
    expect(mySet.subset(otherSet)).toBe(false);
    mySet.add(6);
    expect(mySet.subset(otherSet)).toBe(true);
    mySet.add(100);
    expect(mySet.subset(otherSet)).toBe(true);
    expect(otherSet.subset(mySet)).toBe(false);
  });

  test('has a disjoint method', () => {
    let otherSet = new MySet();
    expect(mySet.disjoint(otherSet)).toBe(true);
    otherSet.add(6);
    expect(mySet.disjoint(otherSet)).toBe(true);
    otherSet.add(1);
    expect(mySet.disjoint(otherSet)).toBe(false);
    otherSet.add(0);
    expect(mySet.disjoint(otherSet)).toBe(false);
    otherSet.add(0);
    expect(mySet.disjoint(otherSet)).toBe(false);
    otherSet.add(6);
    expect(mySet.disjoint(otherSet)).toBe(false);
  });

  test('has a equal method', () => {
    let otherSet = new MySet();
    otherSet.add(5);
    otherSet.add(1);
    otherSet.add(0);
    expect(mySet.eql(otherSet)).toBe(true);
    otherSet.add(0);
    expect(mySet.eql(otherSet)).toBe(true);
    otherSet.add(6);
    expect(mySet.eql(otherSet)).toBe(false);
  });

  test('has a contains method', () => {
    mySet.add(50);
    expect(mySet.contains(50)).toBe(true);
    expect(mySet.contains(5)).toBe(true);
    mySet.add(51);
    expect(mySet.contains(51)).toBe(true);
    expect(mySet.contains(3)).toBe(false);
    expect(mySet.contains(9)).toBe(false);
  });

  test('has a size method', () => {
    expect(mySet.size()).toBe(3);
    mySet.add(50);
    expect(mySet.size()).toBe(4);
    mySet.add(51);
    mySet.add(41);
    mySet.add(251);
    expect(mySet.size()).toBe(7);
  });

  test('has an empty method', () => {
    expect(mySet.empty()).toBe(false);
    let otherSet = new MySet();
    expect(otherSet.empty()).toBe(true);
    otherSet.add(5);
    expect(otherSet.empty()).toBe(false);
  });
});