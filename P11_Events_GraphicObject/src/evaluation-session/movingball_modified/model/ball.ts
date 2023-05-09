/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 18 2023
 * @desc Ball class
 */

import { AnimationView } from "../view/animationview.js";
import { Point2D } from "../view/point2d.js";
import { MovingObject } from "./movingobject.js";

/** @desc Ball class */
export class Ball extends MovingObject {
  private ballImage: HTMLImageElement;
  /**
  * @desc Create a new Ball object 
  * @param centerPoint
  * @param diameter
  */
  constructor(
    protected centerPoint: Point2D,
    canvasWidth: number,
    canvasHeight: number,
    private diameter: number,
    protected color: string) {
      super(centerPoint, canvasWidth, canvasHeight, color);
    this.ballImage = new Image();
    this.ballImage.src = './../www/bola.png';
    this.size = this.diameter;
  } 

  /**
   * @desc Update the Ball coordinates
   * @param direction - point as a vector
   * @param pixelsToMove - amount of pixels
   * @param canvasWidth - ball coordinate x cannot go through this value
   * @param canvasHeight - ball coordinate y cannot go through this value
   */
  public update(direction: Point2D, pixelsToMove: number, canvasWidth: number, canvasHeight: number): void {
    let coordinateX: number = this.getCoordinateX(), coordinateY: number = this.getCoordinateY();
    let rightBorder: number = canvasWidth - this.diameter / 2;
    let downBorder: number = canvasHeight - this.diameter / 2;

    coordinateY = Math.max(this.getCoordinateY() - pixelsToMove, this.diameter / 2);
    coordinateY = Math.min(this.getCoordinateY() + pixelsToMove, downBorder);
    coordinateX = Math.min(this.getCoordinateX() + pixelsToMove, rightBorder);
    coordinateX = Math.max(this.getCoordinateX() - pixelsToMove, this.diameter / 2);

    this.centerPoint = this.centerPoint.add(direction.multiply(pixelsToMove));
    if (this.getCoordinateX() > rightBorder) this.centerPoint.setCoordinates(rightBorder, this.getCoordinateY());    
    if (this.getCoordinateX() < this.diameter / 2) this.centerPoint.setCoordinates(this.diameter / 2, this.getCoordinateY());    
    if (this.getCoordinateY() > downBorder) this.centerPoint.setCoordinates(this.getCoordinateX(), downBorder);    
    if (this.getCoordinateY() < this.diameter / 2) this.centerPoint.setCoordinates(this.getCoordinateX(), this.diameter / 2);
    //this.centerPoint = new Point2D(coordinateX, coordinateY);
    this.adaptScales(canvasWidth, canvasHeight);
  }

  /**
   * @desc Change the ball position and diameter if the canvas size changes.
   * @param newWidth - new canvas width
   * @param newHeight - new canvas height
   * @param sizeFactor - the ball diameter will be the canvas height divided by this factor
   */
  public adapt(newWidth: number, newHeight: number, sizeFactor: number): void {
    super.adaptPosition(newWidth, newHeight);
    this.diameter = newHeight / sizeFactor;
    this.size = this.diameter;
  }

  /**
   * @desc Draw the ball in a canvas context
   * @param context - canvas context
  */
  public draw(context: CanvasRenderingContext2D): void {
    /*context.beginPath();
    context.fillStyle = this.color;
    context.lineWidth = this.BORDER_WIDTH;
    context.strokeStyle = 'rgb(0,0,0)';
    context.ellipse(this.getCoordinateX(), this.getCoordinateY(), this.diameter, this.diameter, Math.PI / 4, 0, Math.PI * 2);
    context.fill();
    context.stroke();*/
    context.drawImage(this.ballImage, this.getCoordinateX() - this.size / 2, this.getCoordinateY() - this.size / 2, this.diameter, this.diameter);
    // context.strokeRect(this.getCoordinateX() - this.size / 2, this.getCoordinateY() - this.size / 2, this.diameter, this.diameter);
  }

  /**
   * @desc Getter method for the ball diameter
   * @return ball diameter
   */
  public getDiameter(): number {
    return(this.diameter);
  }  
}