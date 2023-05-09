/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc Board class
*/

import {Polygon} from './polygon.js';
import { Rectangle } from './rectangle.js';

/** @desc Board class */
export class Board {
  private readonly CANVAS: HTMLCanvasElement;
  private readonly CONTEXT: CanvasRenderingContext2D | null = null;
  private readonly WIDTH: number = 0;
  private readonly HEIGHT: number = 0;
  private readonly COLORS: string[] = ['red', 'yellow', 'blue', 'black', 'purple'];

  /** @desc Create a new Board object */
  constructor() {
    this.CANVAS = document.getElementById('mainCanvas') as HTMLCanvasElement;
    //if (this.CANVAS instanceof HTMLCanvasElement) {
      this.CONTEXT = this.CANVAS.getContext('2d');
      this.WIDTH = Number(this.CANVAS.getAttribute('width'));
      this.HEIGHT = Number(this.CANVAS.getAttribute('height'));
    /*}
    else {
      throw new Error('Canvas not found');
    }*/
  }

  /**
   * @desc Draw a given polygon on the canvas
   * @param polygon - object to draw
   */
  public drawPolygon(polygon: Polygon): void {
    if (this.CONTEXT) polygon.draw(this.CONTEXT);
  }

  /**
   * @desc Draw a given amount of rectangles with random sizes and positions
   * @param numberOfRectangles 
   */
  public createRandomRectangles(numberOfRectangles: number): void {
    for (let i = 0; i < numberOfRectangles; ++i) {      
      let randomCoordinateX: number = Math.random() * this.WIDTH;
      let randomCoordinateY: number = Math.random() * this.HEIGHT;
      let randomWidth: number = Math.random() * (this.WIDTH / 4);
      let randomHeight: number = Math.random() * (this.HEIGHT / 4);
      let randomColor: string = this.COLORS[Math.floor(this.COLORS.length * Math.random())];
      let randomBorderColor: string = this.COLORS[Math.floor(this.COLORS.length * Math.random())];
      if (this.CONTEXT) {
        this.CONTEXT.lineWidth = Math.floor(10 * Math.random());
        (new Rectangle(randomWidth, randomHeight, randomCoordinateX, randomCoordinateY, randomColor, randomBorderColor)).draw(this.CONTEXT);
      }      
    }
  }
}
