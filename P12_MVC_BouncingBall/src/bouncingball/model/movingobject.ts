/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 1 2023
 * @desc MovingObject class
 */

import { Point2D } from "../view/point2d.js";
import { Vector2D } from "./vector2d.js";

/** @desc MovingObject class */
export abstract class MovingObject {
  protected velocity: Vector2D = new Vector2D(0, 0);
  protected acceleration: Vector2D = new Vector2D(0, 0);
  protected MAXIMUM_VELOCITY: number = 5;
  protected coordinateXScale: number;
  protected coordinateYScale: number;
  protected readonly BORDER_WIDTH: number = 2;
  protected size: number = 0;
  /**
  * @desc Create a new MovingObject object 
  * @param centerPoint
  * @param canvasWidth  
  * @param canvasHeight
  * @param color
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
   * @desc Check collisions and change the direction of the object.
   * @param topEdge
   * @param bottomEdge
   * @param leftEdge
   * @param rightEdge
   */
  protected detectCollision(leftEdge: number, rightEdge: number, topEdge: number, bottomEdge: number): void {
    let width = this.size + Math.abs(this.velocity.getComponentX());
    let height = this.size + Math.abs(this.velocity.getComponentY());
    
    if ((this.getCoordinateX() - width) <= leftEdge) {
      this.centerPoint.setCoordinates(leftEdge + width, this.getCoordinateY());
      this.velocity.setComponentX(-this.velocity.getComponentX());
    }
    else if ((this.getCoordinateX() + width) >= rightEdge) {
      this.centerPoint.setCoordinates(rightEdge - width, this.getCoordinateY());
      this.velocity.setComponentX(-this.velocity.getComponentX());
    }
    if ((this.getCoordinateY() + height) >= bottomEdge) {
      this.centerPoint.setCoordinates(this.getCoordinateX(), bottomEdge - height);
      this.velocity.setComponentY(-this.velocity.getComponentY());
    }
    else if ((this.getCoordinateY() - height) <= topEdge) {
      this.centerPoint.setCoordinates(this.getCoordinateX(), topEdge + height);
      this.velocity.setComponentY(-this.velocity.getComponentY());
    }
  }

  /**
   * @desc Add a vector to the acceleration of the object
   * @param vector 
   */
  public applyForce(vector: Vector2D): void {
    this.acceleration.addVector(vector);
  }

  /**
   * @desc Add a vector to the velocity of the object
   * @param vector 
   */
  public increaseVelocity(vector: Vector2D): void {
    this.velocity.addVector(vector);
  }

  /**
   * @desc Draw the current object in a canvas
   * @param context - canvas context
  */
  public abstract draw(context: CanvasRenderingContext2D): void;

  /**
   * @desc Update the object coordinates
   * @param canvasWidth - coordinate x that the object cannot go through this value
   * @param canvasHeight - coordinate y that the object cannot go through this value
   */
  public abstract update(canvasWidth: number, canvasHeight: number): void;

  /**
   * @desc Change the object position and diameter if the canvas size changes.
   * @param newWidth - new canvas width
   * @param newHeight - new canvas height
   * @param sizeFactor - object dimensions will be determined by this factor
   */
  public abstract adapt(newWidth: number, newHeight: number, sizeFactor: number): void;

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
   * @desc Getter method for the acceleration vector
   * @return acceleration vector
   */
  public getAcceleration(): Vector2D {
    return(this.acceleration);
  }

  /**
   * @desc Getter method for the velocity vector
   * @return velocity vector
   */
  public getVelocity(): Vector2D {
    return(this.velocity);
  }

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