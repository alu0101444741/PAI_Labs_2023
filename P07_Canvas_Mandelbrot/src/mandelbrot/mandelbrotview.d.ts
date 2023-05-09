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
import { MandelbrotSet } from "./mandelbrotset";
export declare class MandelbrotView {
    private canvas;
    private mandelbrotSet;
    private height;
    private width;
    private context;
    private complexNumbers;
    /**
    * @desc Create a new MandelbrotView class
    * @param canvas - canvas element
    * @param mandelbrotset - mandelbrot set to paint
    */
    constructor(canvas: HTMLCanvasElement, mandelbrotSet: MandelbrotSet);
    /** @desc Draw the stored Mandelbrot set */
    update(): void;
    /** @desc Draw the area and error values */
    private drawData;
}
