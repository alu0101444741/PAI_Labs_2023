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
  protected size: number = 0;
  /**
  * @desc Create a new MovingObject object 
  * @param centerPoint
  * @param canvasWidth  
  * @param canvasHeight
  */
  protected constructor(
    protected centerPoint: Point2D,
    canvasWidth: number,
    canvasHeight: number,
    protected color: string){
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
   * @desc Update the object coordinates
   * @param direction - point as a vector
   * @param pixelsToMove - amount of pixels
   * @param canvasWidth - coordinate x that the object cannot go through this value
   * @param canvasHeight - coordinate y that the object cannot go through this value
   */
  public abstract update(direction: Point2D, pixelsToMove: number, canvasWidth: number, canvasHeight: number): void;

  /**
   * @desc Change the object position and diameter if the canvas size changes.
   * @param newWidth - new canvas width
   * @param newHeight - new canvas height
   * @param sizeFactor - object dimensions will be determined by this factor
   */
  public abstract adapt(newWidth: number, newHeight: number, sizeFactor: number): void;

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

  /**
   * @desc Getter method for the size of the object
   * @return size
   */
   public getSize(): number {
    return(this.size);
  }
}