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
export class MovingObject {
    /**
    * @desc Create a new MovingObject object
    * @param centerPoint
    * @param canvasWidth
    * @param canvasHeight
    */
    constructor(centerPoint, canvasWidth, canvasHeight, color) {
        this.centerPoint = centerPoint;
        this.color = color;
        this.BORDER_WIDTH = 2;
        this.size = 0;
        this.coordinateXScale = this.centerPoint.getCoordinateX() / canvasWidth;
        this.coordinateYScale = this.centerPoint.getCoordinateY() / canvasHeight;
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
