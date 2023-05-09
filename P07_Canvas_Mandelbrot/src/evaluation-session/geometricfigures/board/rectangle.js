/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc Rectangle class
*/
import { Polygon } from "./polygon.js";
/** @desc Rectangle class. Implements Polygon */
export class Rectangle extends Polygon {
    /**
     * @desc Create a new Rectangle object
     * @param width
     * @param height
     * @param coordinateX - coordinate x of the canvas
     * @param coordinateY - coordinate y of the canvas
     * @param color
     */
    constructor(width, height, coordinateX, coordinateY, color, borderColor) {
        super(color, borderColor);
        this.width = width;
        this.height = height;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.color = color;
        this.borderColor = borderColor;
    }
    /**
     * @desc Getter method for the amount of edges of the rectangle
     * @returns amount of edges
     */
    getNumberOfEdges() {
        return (4);
    }
    /**
     * @desc Getter method for the area of the rectangle
     * @returns area
     */
    getArea() {
        return (this.width * this.height);
    }
    /**
     * @desc Computes the perimeter of the current rectangle
     * @returns perimeter
     */
    computePerimeter() {
        return (2 * (this.width + this.height));
    }
    /**
     * @desc Draws the current rectangle on a canvas 2D context
     * @param context
     */
    draw(context) {
        if (context) {
            context.fillStyle = this.color;
            context.strokeStyle = this.borderColor;
            context.fillRect(this.coordinateX, this.coordinateY, this.width, this.height);
            context.strokeRect(this.coordinateX, this.coordinateY, this.width, this.height);
        }
    }
}
