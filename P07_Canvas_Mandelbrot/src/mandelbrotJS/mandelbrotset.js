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
import { ComplexNumber } from "./complexnumber.js";
/** @desc MandelbrotSet class */
export class MandelbrotSet {
    /**
     * @desc Constructor de la clase Mandelbrot
     * @param
    */
    constructor(maximumIterations) {
        this.maximumIterations = maximumIterations;
        this.mandelbrotSet = new Set();
        this.START_POINT_REAL = -2;
        this.START_POINT_IMAGINARY = -1;
        this.END_POINT_REAL = 1;
        this.END_POINT_IMAGINARY = 1;
        this.area = 0;
        this.error = 0;
    }
    /**
     * @desc Método privado para comprobar que un punto pertenece al conjunto
     * de Mandelbrot.
     * @param {Complejo} complexNumber - número a comprobar
     * @return {Number} En caso de no pertenecer devolverá -1. En otro caso,
     * el número de iteraciones necesarias para alcanzar un valor umbral.
    */
    iterationsNeeded(complexNumber) {
        let newComplexNumber = new ComplexNumber(complexNumber.getRealPart(), complexNumber.getImaginaryPart());
        let iterations = 0;
        for (let i = 0; ((i < this.maximumIterations) && (newComplexNumber.abs() <= 2.0)); ++i) {
            newComplexNumber = newComplexNumber.multiply(newComplexNumber);
            newComplexNumber = newComplexNumber.add(complexNumber);
            ++iterations;
        }
        //if (iterations === this.maximumIterations) this.#mandelbrotSet.add(complexNumber);    
        return (iterations);
    }
    /**
     * @desc Create the Mandelbrot set given the dimensions of the canvas.
     * @param maximumWidth
     * @param maximumHeight
     */
    createSet(maximumWidth, maximumHeight) {
        let insidePointsCount = 0;
        for (let width = 0; width < maximumWidth; ++width) {
            for (let height = 0; height < maximumHeight; ++height) {
                let newNumber = new ComplexNumber(this.START_POINT_REAL + (width / maximumWidth) * (this.END_POINT_REAL - this.START_POINT_REAL), this.START_POINT_IMAGINARY + (height / maximumHeight) * (this.END_POINT_IMAGINARY - this.START_POINT_IMAGINARY));
                let iterationsNeeded = this.iterationsNeeded(newNumber);
                if (iterationsNeeded <= this.maximumIterations) {
                    newNumber.setColor(this.chooseColor(iterationsNeeded));
                    this.mandelbrotSet.add(newNumber);
                    if (iterationsNeeded == this.maximumIterations)
                        ++insidePointsCount;
                }
            }
        }
        this.area = 2 * 2.5 * 1.125 * insidePointsCount / this.mandelbrotSet.size;
        this.error = this.area / Math.sqrt(this.mandelbrotSet.size);
    }
    /**
     * @desc Método privado para conseguir un color según un valor determinado.
     * Dado que son 7 colores distintos, el valor con el que se determina el color
     * será el módulo 7 del número pasado como parámetro.
     * @param number - número a comprobar
     * @return cadena en formato 'rgb(A,B,C)' donde A, B y C son números entre 0 y 255.
    */
    chooseColor(number) {
        if (number === this.maximumIterations) {
            return ('rgb(0,0,0)');
        }
        else if (number < this.maximumIterations / 2) {
            return (`rgb(${255 - number * (this.maximumIterations / 2)},0,0)`);
        }
        let color = number % 7;
        switch (color) {
            case 0: return ('rgb(44,255,44)');
            case 1: return ('rgb(88,235,88)');
            case 2: return ('rgb(120,215,120)');
            case 3: return ('rgb(164,195,164)');
            case 4: return ('rgb(200,175,200)');
            case 5: return ('rgb(230,155,230)');
            case 6: return ('rgb(255,135,255)');
        }
        return ('rgb(0,0,0)');
    }
    /**
     * @dec Getter method for the complex number set
     * @returns all stored complex numbers
     */
    getNumbers() {
        return (this.mandelbrotSet);
    }
    /**
     * @desc Getter method for computed area
     * @returns area
     */
    getArea() {
        return (this.area);
    }
    /**
     * @desc Getter method for computed error
     * @returns error
     */
    getError() {
        return (this.error);
    }

    changeMaximumIterations(iterations) {
        this.maximumIterations = this.maximumIterations + iterations;
        this.mandelbrotSet.clear();
        this.createSet();
    }
}
