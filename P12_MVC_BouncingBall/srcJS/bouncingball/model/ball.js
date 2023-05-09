/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 1 2023
 * @desc Ball class
 */
import { MovingObject } from "./movingobject.js";
/** @desc Ball class. Extends MovingObject */
export class Ball extends MovingObject {
    /**
    * @desc Create a new Ball object
    * @param centerPoint
    * @param canvasWidth
    * @param canvasHeight
    * @param diameter
    */
    constructor(centerPoint, canvasWidth, canvasHeight, diameter, color) {
        super(centerPoint, canvasWidth, canvasHeight, color);
        this.centerPoint = centerPoint;
        this.diameter = diameter;
        this.color = color;
        this.size = this.diameter;
    }
    /**
     * @desc Update the Ball properties
     * @param canvasWidth - ball coordinate x cannot go through this value
     * @param canvasHeight - ball coordinate y cannot go through this value
     */
    update(canvasWidth, canvasHeight) {
        this.detectCollision(0, canvasWidth, 0, canvasHeight);
        this.velocity.addVector(this.acceleration);
        // this.velocity.limit(this.MAXIMUM_VELOCITY);
        this.centerPoint.addVector(this.velocity);
        this.adaptScales(canvasWidth, canvasHeight);
    }
    /**
     * @desc Change the ball position and diameter if the canvas size changes.
     * @param newWidth - new canvas width
     * @param newHeight - new canvas height
     * @param sizeFactor - the ball diameter will be the canvas height divided by this factor
     */
    adapt(newWidth, newHeight, sizeFactor) {
        super.adaptPosition(newWidth, newHeight);
        this.diameter = newHeight / sizeFactor;
        this.size = this.diameter;
    }
    /**
     * @desc Draw the ball in a canvas context
     * @param context - canvas context
    */
    draw(context) {
        context.beginPath();
        context.fillStyle = this.color;
        //context.lineWidth = this.BORDER_WIDTH;
        //context.strokeStyle = 'rgb(0,0,0)';
        context.ellipse(this.getCoordinateX(), this.getCoordinateY(), this.diameter, this.diameter, Math.PI / 4, 0, Math.PI * 2);
        context.fill();
        //context.stroke();
    }
    /**
     * @desc Getter method for the ball diameter
     * @return ball diameter
     */
    getDiameter() {
        return (this.diameter);
    }
}
