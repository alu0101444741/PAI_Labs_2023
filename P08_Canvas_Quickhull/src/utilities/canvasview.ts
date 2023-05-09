/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 24 2023
 * @desc CanvasView
 */

 import { Point2D } from "./point2d.js";

 /** @desc QuickhullAnimation class */
 export abstract class CanvasView {
  protected readonly HEIGHT: number;
  protected readonly WIDTH: number;
  protected readonly BORDER_SPACE: number = 50;
  protected readonly POINT_SIZE: number = 1;
  protected readonly CANVAS!: HTMLCanvasElement;
  protected readonly CONTEXT: CanvasRenderingContext2D;
  /** 
  * @desc Create a new QuickhullAnimation object
  * @param MILISECONDS - miliseconds between frames
  */
  constructor(protected readonly MILISECONDS: number) {
    this.CANVAS = document.getElementById('mainCanvas') as HTMLCanvasElement;    
    this.CONTEXT = this.CANVAS.getContext('2d') as CanvasRenderingContext2D;
    this.HEIGHT = Number(this.CANVAS.getAttribute('height'));
    this.WIDTH = Number(this.CANVAS.getAttribute('width'));
  }

  /** @desc Draw loop of the Quickhull algorithm */
  public abstract update(): void;

  /** @desc Draw the stored points */
  protected drawPoint(point: Point2D): void {
    this.CONTEXT.beginPath();
    this.CONTEXT.ellipse(point.getCoordinateX(), point.getCoordinateY(), this.POINT_SIZE, this.POINT_SIZE, Math.PI / 4, 0, 2 * Math.PI);
    this.CONTEXT.fill();
    this.CONTEXT.closePath();    
  }

  /** 
  * @desc Draw a line given two points
  * @param firstPoint
  * @param secondPoint
  */
  protected drawLine(firstPoint: Point2D, secondPoint: Point2D): void {    
    this.CONTEXT.beginPath();                
    this.CONTEXT.moveTo(firstPoint.getCoordinateX(), firstPoint.getCoordinateY());
    this.CONTEXT.lineTo(secondPoint.getCoordinateX(), secondPoint.getCoordinateY());
    this.CONTEXT.stroke();
    this.CONTEXT.closePath();
  }

  /** @desc Remove all the canvas content */
  protected cleanCanvas(): void {
    this.CONTEXT.beginPath();
    this.CONTEXT.fillStyle = 'black';
    this.CONTEXT.fillRect(0, 0, this.WIDTH, this.HEIGHT);
    this.CONTEXT.closePath();
  }
}