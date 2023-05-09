/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc Triangle class
*/
import { Polygon } from "./polygon.js";
/** @desc Triangle class. Implements Polygon */
export class Triangle extends Polygon {
    /**
     * @desc Create a new Triangle object
     * @param edges - three edges
     * @param color
     * @param borderColor
     */
    constructor(edges, color, borderColor) {
        super(color, borderColor);
        this.edges = edges;
        this.color = color;
        this.borderColor = borderColor;
    }
    /**
     * @desc Getter method for the amount of edges of the rectangle
     * @returns amount of edges
     */
    getNumberOfEdges() {
        return (3);
    }
    /**
     * @desc Getter method for the area of the rectangle using Heron's formula
     * @returns area
     */
    getArea() {
        let firstEdgeLength = this.edges[0].getLength();
        let secondEdgeLength = this.edges[1].getLength();
        let thirdEdgeLength = this.edges[2].getLength();
        let semiperimeter = this.computePerimeter() / 2;
        return (Math.sqrt(semiperimeter * (semiperimeter - firstEdgeLength) * (semiperimeter - secondEdgeLength) * (semiperimeter - thirdEdgeLength)));
    }
    /**
     * @desc Computes the perimeter of the current rectangle
     * @returns perimeter
     */
    computePerimeter() {
        let firstEdgeLength = this.edges[0].getLength();
        let secondEdgeLength = this.edges[1].getLength();
        let thirdEdgeLength = this.edges[2].getLength();
        return (firstEdgeLength + secondEdgeLength + thirdEdgeLength);
    }
    /**
     * @desc Draws the current rectangle on a canvas 2D context
     * @param context
     */
    draw(context) {
        if (context) {
            context.beginPath();
            context.fillStyle = this.color;
            context.strokeStyle = this.borderColor;
            console.log('Border ' + this.borderColor + ' Color ' + this.color);
            context.moveTo(this.edges[0].getStartPoint().getCoordinateX(), this.edges[0].getStartPoint().getCoordinateY());
            context.lineTo(this.edges[1].getStartPoint().getCoordinateX(), this.edges[1].getStartPoint().getCoordinateY());
            context.moveTo(this.edges[1].getStartPoint().getCoordinateX(), this.edges[1].getStartPoint().getCoordinateY());
            context.lineTo(this.edges[2].getStartPoint().getCoordinateX(), this.edges[2].getStartPoint().getCoordinateY());
            context.moveTo(this.edges[2].getStartPoint().getCoordinateX(), this.edges[2].getStartPoint().getCoordinateY());
            context.lineTo(this.edges[0].getStartPoint().getCoordinateX(), this.edges[0].getStartPoint().getCoordinateY());
            console.log('Triangle area' + this.getArea());
            context.closePath();
            context.stroke();
            context.fill();
        }
    }
}
