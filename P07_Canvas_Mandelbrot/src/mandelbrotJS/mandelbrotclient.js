/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 15 2023
 * @desc Client program for Mandelbrot class
*/
import { MandelbrotSet } from './mandelbrotset.js';
import { MandelbrotView } from './mandelbrotview.js';
/** @desc Función main para probar el funcionamiento de la clase Mandelbrot*/
function main() {
    const CANVAS = document.getElementById('mainCanvas');
    const MAX_NUMBER_ITERATIONS = 35;
    let mandelbrotView = new MandelbrotView(CANVAS, new MandelbrotSet(MAX_NUMBER_ITERATIONS));
    mandelbrotView.update();
}
main();
