/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 18 2023
 * @desc MovingObject class

 */

import { Point2D } from "../view/point2d.js";

/** @desc MovingObject class */
export abstract class MovingObject {
  protected coordinateXScale: number;
  protected coordinateYScale: number;
  protected readonly BORDER_WIDTH: number = 2;
  /**
  * @desc Create a new MovingObject object 
  * @param centerPoint
  * @param canvasWidth  
  * @param canvasHeight
  */
  protected constructor(
    protected centerPoint: Point2D,
    canvasWidth: number,
    canvasHeight: number){
    this.coordinateXScale = this.centerPoint.getCoordinateX() / canvasWidth;
    this.coordinateYScale = this.centerPoint.getCoordinateY() / canvasHeight;
  }

  /**
   * @desc Change the object position if the canvas size changes.
   * @param newWidth - new canvas width
   * @param newHeight - new canvas height
   */
  protected adaptPosition(newWidth: number, newHeight: number): void {
    this.centerPoint = new Point2D(this.coordinateXScale * newWidth, this.coordinateYScale * newHeight);
    this.adaptScales(newWidth, newHeight);
  }

  /**
   * @desc Change the object relative position if the canvas size changes.
   * @param newWidth - new canvas width
   * @param newHeight - new canvas height
   */
  protected adaptScales(newWidth: number, newHeight: number): void {
    this.coordinateXScale = this.centerPoint.getCoordinateX() / newWidth;
    this.coordinateYScale = this.centerPoint.getCoordinateY() / newHeight;
  }

  /**
   * @desc Draw the current object in a canvas
   * @param context - canvas context
  */
  abstract draw(context: CanvasRenderingContext2D): void;

  /**
   * @desc Getter method for the x coordinate of the center point
   * @return x coordinate
   */
  public getCoordinateX(): number {
    return(this.centerPoint.getCoordinateX());
  }

  /**
   * @desc Getter method for the y coordinate of the center point
   * @return y coordinate
   */
  public getCoordinateY(): number {
    return(this.centerPoint.getCoordinateY());
  }
}