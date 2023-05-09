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
export class MovingObject {
    /**
    * @desc Create a new MovingObject object
    * @param centerPoint
    * @param canvasWidth
    * @param canvasHeight
    * @param color
    */
    constructor(centerPoint, canvasWidth, canvasHeight, color) {
        this.centerPoint = centerPoint;
        this.color = color;
        this.velocity = new Vector2D(0, 0);
        this.acceleration = new Vector2D(0, 0);
        this.MAXIMUM_VELOCITY = 5;
        this.BORDER_WIDTH = 2;
        this.size = 0;
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
    detectCollision(leftEdge, rightEdge, topEdge, bottomEdge) {
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
    applyForce(vector) {
        this.acceleration.addVector(vector);
    }
    /**
     * @desc Add a vector to the velocity of the object
     * @param vector
     */
    increaseVelocity(vector) {
        this.velocity.addVector(vector);
    }
    /**
     * @desc Change the object position if the canvas size changes.
     * @param newWidth - new canvas width
     * @param newHeight - new canvas height
     */
    adaptPosition(newWidth, newHeight) {
        this.centerPoint = new Point2D(this.coordinateXScale * newWidth, this.coordinateYScale * newHeight);
        this.adaptScales(newWidth, newHeight);
    }
    /**
     * @desc Change the object relative position if the canvas size changes.
     * @param newWidth - new canvas width
     * @param newHeight - new canvas height
     */
    adaptScales(newWidth, newHeight) {
        this.coordinateXScale = this.centerPoint.getCoordinateX() / newWidth;
        this.coordinateYScale = this.centerPoint.getCoordinateY() / newHeight;
    }
    /**
     * @desc Getter method for the acceleration vector
     * @return acceleration vector
     */
    getAcceleration() {
        return (this.acceleration);
    }
    /**
     * @desc Getter method for the velocity vector
     * @return velocity vector
     */
    getVelocity() {
        return (this.velocity);
    }
    /**
     * @desc Getter method for the x coordinate of the center point
     * @return x coordinate
     */
    getCoordinateX() {
        return (this.centerPoint.getCoordinateX());
    }
    /**
     * @desc Getter method for the y coordinate of the center point
     * @return y coordinate
     */
    getCoordinateY() {
        return (this.centerPoint.getCoordinateY());
    }
    /**
     * @desc Getter method for the size of the object
     * @return size
     */
    getSize() {
        return (this.size);
    }
}
