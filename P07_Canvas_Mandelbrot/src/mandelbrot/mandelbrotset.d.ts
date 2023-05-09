/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 15 2023
 * @desc Clase MandelbrotSet
 * @module mandelbrot-set
 */
import { ComplexNumber } from "./complexnumber";
/** @desc MandelbrotSet class */
export declare class MandelbrotSet {
    private maximumIterations;
    private mandelbrotSet;
    private readonly START_POINT_REAL;
    private readonly START_POINT_IMAGINARY;
    private readonly END_POINT_REAL;
    private readonly END_POINT_IMAGINARY;
    private area;
    private error;
    /**
     * @desc Constructor de la clase Mandelbrot
     * @param
    */
    constructor(maximumIterations: number);
    /**
     * @desc Método privado para comprobar que un punto pertenece al conjunto
     * de Mandelbrot.
     * @param {Complejo} complexNumber - número a comprobar
     * @return {Number} En caso de no pertenecer devolverá -1. En otro caso,
     * el número de iteraciones necesarias para alcanzar un valor umbral.
    */
    private iterationsNeeded;
    /**
     * @desc Create the Mandelbrot set given the dimensions of the canvas.
     * @param maximumWidth
     * @param maximumHeight
     */
    createSet(maximumWidth: number, maximumHeight: number): void;
    /**
     * @desc Método privado para conseguir un color según un valor determinado.
     * Dado que son 7 colores distintos, el valor con el que se determina el color
     * será el módulo 7 del número pasado como parámetro.
     * @param number - número a comprobar
     * @return cadena en formato 'rgb(A,B,C)' donde A, B y C son números entre 0 y 255.
    */
    private chooseColor;
    /**
     * @dec Getter method for the complex number set
     * @returns all stored complex numbers
     */
    getNumbers(): Set<ComplexNumber>;
    /**
     * @desc Getter method for computed area
     * @returns area
     */
    getArea(): number;
    /**
     * @desc Getter method for computed error
     * @returns error
     */
    getError(): number;
}
