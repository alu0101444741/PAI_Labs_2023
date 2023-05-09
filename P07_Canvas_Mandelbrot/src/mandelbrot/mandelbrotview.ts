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

import { ComplexNumber } from "./complexnumber";
import { MandelbrotSet } from "./mandelbrotset";

export class MandelbrotView {
  private height: number;
  private width: number;
  private context: CanvasRenderingContext2D | null = null;
  private complexNumbers: ComplexNumber[];
   /** 
   * @desc Create a new MandelbrotView class
   * @param canvas - canvas element
   * @param mandelbrotset - mandelbrot set to paint
   */
  constructor(
    private canvas: HTMLCanvasElement,
    private mandelbrotSet: MandelbrotSet) {    
    this.canvas = canvas;
    if (this.canvas instanceof HTMLCanvasElement) {
      this.context = canvas.getContext('2d');
    }
    this.height = Number(canvas.getAttribute('height'));
    this.width = Number(canvas.getAttribute('width'));
    this.mandelbrotSet.createSet(this.width, this.height);
    this.complexNumbers = Array.from(this.mandelbrotSet.getNumbers());
  }

  /** @desc Draw the stored Mandelbrot set */
  public update(): void {
    let counter: number = 0;
    if (this.context) {
      for (let coordinateX = 0; coordinateX < this.width; ++coordinateX) {
        for (let coordinateY = 0; coordinateY < this.height; ++coordinateY) {
            this.context.fillStyle = this.complexNumbers[counter].getColor();
            this.context.fillRect(coordinateX, coordinateY, 1, 1);
            ++counter;
        }
      }
      this.drawData();
    }    
    //window.requestAnimationFrame(() => this.update());
  }

  /** @desc Draw the area and error values */
  private drawData(): void {
    if (this.context) {      
      this.context.fillStyle = 'white';
      this.context.font = '25px Rubik';   
      this.context.textAlign = "center";
      this.context.textBaseline = "middle";
      this.context.fillText(`Area: ${this.mandelbrotSet.getArea().toFixed(6)}`, this.width * 0.9, this.height * 0.85);
      this.context.fillText(`Error: ${this.mandelbrotSet.getError().toFixed(6)}`, this.width * 0.9, this.height * 0.9);
      this.context.fill();
    } 
  }
}