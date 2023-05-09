/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 11 2023
 * @desc Clase Point2D
 * @module point-2d
 */
/** @desc Point2D class */
export class Point2D {
    /**
     * @desc Create a new Point2D object.
     * @param coordinateX
     * @param coordinateY
     * @param color
     */
    constructor(coordinateX, coordinateY, color) {
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.color = color;
    }
    /**
     * @desc Getter method for the x coordinate
     * @return x coordinate
     */
    getCoordinateX() {
        return (this.coordinateX);
    }
    /**
     * @desc Getter method for the y coordinate
     * @return y coordinate
     */
    getCoordinateY() {
        return (this.coordinateY);
    }
    /**
     * @desc Método para obtener una cadena con la información del punto
     * @return cadena en formato: {coordenadaX, coordenadaY}
     */
    toString() {
        return (`x:${this.coordinateX}, y:${this.coordinateY}, color:${this.color}`);
    }
}
