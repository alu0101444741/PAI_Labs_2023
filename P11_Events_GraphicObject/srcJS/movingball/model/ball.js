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
    /**
    * @desc Create a new Ball object
    * @param centerPoint
    * @param diameter
    */
    constructor(centerPoint, canvasWidth, canvasHeight, diameter) {
        super(centerPoint, canvasWidth, canvasHeight);
        this.centerPoint = centerPoint;
        this.diameter = diameter;
    }
    /**
     * @desc Update the Ball coordinates
     * @param direction - point as a vector
     * @param pixelsToMove - amount of pixels
     * @param canvasWidth - ball coordinate x cannot go through this value
     * @param canvasHeight - ball coordinate y cannot go through this value
     */
    update(direction, pixelsToMove, canvasWidth, canvasHeight) {
        let coordinateX = this.getCoordinateX(), coordinateY = this.getCoordinateY();
        if (direction.equal(AnimationView.DIRECTIONS[0]))
            coordinateY = Math.max(this.getCoordinateY() - pixelsToMove, this.diameter + this.BORDER_WIDTH);
        else if (direction.equal(AnimationView.DIRECTIONS[1]))
            coordinateY = Math.min(this.getCoordinateY() + pixelsToMove, canvasHeight - (this.diameter + this.BORDER_WIDTH));
        else if (direction.equal(AnimationView.DIRECTIONS[3]))
            coordinateX = Math.min(this.getCoordinateX() + pixelsToMove, canvasWidth - (this.diameter + this.BORDER_WIDTH));
        else
            coordinateX = Math.max(this.getCoordinateX() - pixelsToMove, this.diameter + this.BORDER_WIDTH);
        this.centerPoint = new Point2D(coordinateX, coordinateY);
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
    }
    /**
     * @desc Draw the ball in a canvas context
     * @param context - canvas context
    */
    draw(context) {
        context.beginPath();
        context.fillStyle = 'red';
        context.lineWidth = this.BORDER_WIDTH;
        context.strokeStyle = 'rgb(0,0,0)';
        context.ellipse(this.getCoordinateX(), this.getCoordinateY(), this.diameter, this.diameter, Math.PI / 4, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
    /**
     * @desc Getter method for the ball diameter
     * @return ball diameter
     */
    getDiameter() {
        return (this.diameter);
    }
}
