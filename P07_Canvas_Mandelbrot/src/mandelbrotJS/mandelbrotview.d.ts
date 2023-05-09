/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 15 2023
 * @desc MandelbrotView
 * @module mandelbrot-view
 */
export class MandelbrotView {
    /**
    * @desc Create a new MandelbrotView class
    * @param canvas - canvas element
    * @param mandelbrotset - mandelbrot set to paint
    */
    constructor(canvas: any, mandelbrotSet: any);
    canvas: any;
    mandelbrotSet: any;
    context: any;
    height: number;
    width: number;
    complexNumbers: any[];
    /** @desc Draw the stored Mandelbrot set */
    update(): void;
    /** @desc Draw the area and error values */
    drawData(): void;
}
