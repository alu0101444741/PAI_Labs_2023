/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 1 2023
 * @desc CanvasView
 */

import { Point2D } from './point2d.js';

/** @desc CanvasView class */
export abstract class CanvasView {
  protected HEIGHT: number;
  protected WIDTH: number;  
  protected readonly BORDER_SPACE: number = 50;
  protected readonly POINT_SIZE: number = 5;
  protected CANVAS!: HTMLCanvasElement;
  protected readonly CONTEXT: CanvasRenderingContext2D;
  protected readonly COLORS: string[] = 
  ['Aqua', 'Aquamarine', 'Blue', 'Chocolate', 'Orange', 'Red', 
  'Brown', 'CadetBlue', 'BlueViolet', 'Cyan', 'Crimson', 'Coral',
  'DarkRed', 'DarkMagenta', 'DarkSalmon', 'DeepPink', 'ForestGreen', 'Gold',
  'Fuchsia', 'Green', 'Yellow', 'Khaki'];
  /** 
   * @desc Create a new CanvasView object
   */
  constructor() {
    this.CANVAS = document.getElementById('mainCanvas') as HTMLCanvasElement;    
    this.CONTEXT = this.CANVAS.getContext('2d') as CanvasRenderingContext2D;
    this.HEIGHT = Number(this.CANVAS.getAttribute('height'));
    this.WIDTH = Number(this.CANVAS.getAttribute('width'));
  } 

  /** 
   * @desc Draw a point on the canvas
   * @param point - point object with coordinates
   * @param color
   */
  protected drawPoint(point: Point2D, color?: string): void {
    this.CONTEXT.beginPath();
    this.CONTEXT.fillStyle = (color) ? color : 'black';
    this.CONTEXT.ellipse(point.getCoordinateX(), point.getCoordinateY(), this.POINT_SIZE, this.POINT_SIZE, Math.PI / 4, 0, 2 * Math.PI);
    this.CONTEXT.fill();
    this.CONTEXT.closePath();    
  }

  /** 
   * @desc Draw a circle on the canvas.
   * @param centerPoint - point object with coordinates
   * @param radius
   * @param borderWidth - border lines width
   * @param borderColor
   * @param fill - 'true' to fill the circle
   * @param fillerColor
   */
  protected drawCircle(centerPoint: Point2D, radius: number, borderWidth?: number, borderColor?: string, fill?: boolean, fillerColor?: string): void {
    this.CONTEXT.beginPath();
    this.CONTEXT.lineWidth = (borderWidth) ? borderWidth : 2;
    this.CONTEXT.strokeStyle = (borderColor) ? borderColor : 'black'; 
    this.CONTEXT.fillStyle = (fillerColor) ? fillerColor : 'black';      
    this.CONTEXT.ellipse(centerPoint.getCoordinateX(), centerPoint.getCoordinateY(), radius, radius, Math.PI / 4, 0, 2 * Math.PI);
    this.CONTEXT.stroke();
    if (fill === true) this.CONTEXT.fill();
    this.CONTEXT.closePath();    
  }

  /** 
   * @desc Draw a rectangle on the canvas.
   * @param centerPoint - point object with coordinates
   * @param width
   * @param height
   * @param borderWidth - border lines width
   * @param borderColor
   * @param fill - 'true' to fill the rectangle
   * @param fillerColor
   */
  protected drawRectangle(centerPoint: Point2D, width: number, height: number, borderWidth?: number, borderColor?: string, fill?: boolean, fillerColor?: string): void {
    this.CONTEXT.beginPath();
    this.CONTEXT.lineWidth = (borderWidth) ? borderWidth : 5;
    this.CONTEXT.strokeStyle = (borderColor) ? borderColor : 'black';    
    this.CONTEXT.strokeRect(centerPoint.getCoordinateX() - width / 2, centerPoint.getCoordinateY() - height / 2, width, height);
    if (fill === true) {
      this.CONTEXT.fillStyle = (fillerColor) ? fillerColor : 'black';
      this.CONTEXT.fillRect(centerPoint.getCoordinateX() - width / 2, centerPoint.getCoordinateY() - height / 2, width, height);
    }
    this.CONTEXT.closePath();    
  }

  /** 
  * @desc Draw a line given two points
  * @param firstPoint
  * @param secondPoint
  */
  protected drawLine(firstPoint: Point2D, secondPoint: Point2D, lineWidth?: number, color?: string): void {    
    this.CONTEXT.beginPath();   
    this.CONTEXT.strokeStyle = (color) ? color : 'black';
    this.CONTEXT.lineWidth = (lineWidth) ? lineWidth : 1;
    this.CONTEXT.moveTo(firstPoint.getCoordinateX(), firstPoint.getCoordinateY());
    this.CONTEXT.lineTo(secondPoint.getCoordinateX(), secondPoint.getCoordinateY());
    this.CONTEXT.stroke();
    this.CONTEXT.closePath();
  }

  /** 
  * @desc Draw a given text on a given position
  * @param position
  * @param text - text to write
  * @param fontSize - on pixels (px)
  * @param color - color of the font
  * @param rotation - degrees
  */
  protected drawText(position: Point2D, text: string, fontSize: number, color: string, rotation?: number): void {
    this.CONTEXT.beginPath();  
    this.CONTEXT.fillStyle = (color) ? color : 'black';
    this.CONTEXT.font = `${fontSize}px Rubik`;   
    this.CONTEXT.textAlign = "center";
    this.CONTEXT.textBaseline = "middle";
    if (rotation) {
      this.CONTEXT.save();
      this.CONTEXT.translate(position.getCoordinateX(), position.getCoordinateY());
      this.CONTEXT.rotate(rotation * Math.PI / 180);
      this.CONTEXT.fillText(text, 0, 0);
      this.CONTEXT.fill();
      this.CONTEXT.restore();
    }
    else {
      this.CONTEXT.fillText(text, position.getCoordinateX(), position.getCoordinateY());
      this.CONTEXT.fill();
    }
    this.CONTEXT.closePath();
  }

  /** @desc Makes the canvas responsive. */
  public resizeCanvas(): void {
    this.WIDTH = window.innerWidth * 0.975;
    this.HEIGHT = window.innerHeight  * 0.75;
    this.CANVAS.setAttribute('height', this.HEIGHT.toString());
    this.CANVAS.setAttribute('width', this.WIDTH.toString());
    this.adaptObjects();
  }

  /** @desc Change the size of all elements so they fit properly on the canvas. */  
  protected abstract adaptObjects(): void;

  /** @desc Remove all the canvas content */
  protected cleanCanvas(): void {
    this.CONTEXT.beginPath();
    this.CONTEXT.fillStyle = 'black';
    this.CONTEXT.fillRect(0, 0, this.WIDTH, this.HEIGHT);
    this.CONTEXT.closePath();
  }

  /**
   * @desc Draws the background of the canvas
   * @param color
   */
  protected drawBackground(color?: string): void {    
    this.CONTEXT.fillStyle = (color) ? color : 'black';
    this.CONTEXT.fillRect(0, 0, this.WIDTH, this.HEIGHT);
  }

  protected radialGradient(): CanvasGradient {
    let gradient = this.CONTEXT.createRadialGradient(this.WIDTH / 2, this.HEIGHT / 2, this.HEIGHT / 10, this.WIDTH / 2, this.HEIGHT / 2, this.WIDTH / 2);
    gradient.addColorStop(0, 'gray');
    gradient.addColorStop(0.85, 'darkgray');
    return(gradient)
  }

  /**
   * @desc Getter method for a random color
   * @returns random color
   */
  public getRandomColor(): string {
    return(this.COLORS[Math.floor(Math.random() * this.COLORS.length)])
  }

  /**
   * @desc Getter method for the Canvas element
   * @returns stored canvas
   */
  public getCanvas(): HTMLCanvasElement {
    return(this.CANVAS);
  }
}