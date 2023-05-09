/** @desc MandelbrotSet class */
export class MandelbrotSet {
    /**
     * @desc Constructor de la clase Mandelbrot
     * @param
    */
    constructor(maximumIterations: any);
    maximumIterations: any;
    mandelbrotSet: Set<any>;
    START_POINT_REAL: number;
    START_POINT_IMAGINARY: number;
    END_POINT_REAL: number;
    END_POINT_IMAGINARY: number;
    area: number;
    error: number;
    /**
     * @desc Método privado para comprobar que un punto pertenece al conjunto
     * de Mandelbrot.
     * @param {Complejo} complexNumber - número a comprobar
     * @return {Number} En caso de no pertenecer devolverá -1. En otro caso,
     * el número de iteraciones necesarias para alcanzar un valor umbral.
    */
    iterationsNeeded(complexNumber: any): number;
    /**
     * @desc Create the Mandelbrot set given the dimensions of the canvas.
     * @param maximumWidth
     * @param maximumHeight
     */
    createSet(maximumWidth: any, maximumHeight: any): void;
    /**
     * @desc Método privado para conseguir un color según un valor determinado.
     * Dado que son 7 colores distintos, el valor con el que se determina el color
     * será el módulo 7 del número pasado como parámetro.
     * @param number - número a comprobar
     * @return cadena en formato 'rgb(A,B,C)' donde A, B y C son números entre 0 y 255.
    */
    chooseColor(number: any): string;
    /**
     * @dec Getter method for the complex number set
     * @returns all stored complex numbers
     */
    getNumbers(): Set<any>;
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
    changeMaximumIterations(iterations: any): void;
}
