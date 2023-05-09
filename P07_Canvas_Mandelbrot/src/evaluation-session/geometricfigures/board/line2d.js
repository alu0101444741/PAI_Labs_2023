/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Jun 25 2022
 * @desc Clase Line2D
 * @module line-2d
 */
/** @desc Line2D class */
export class Line2D {
    /**
     * @desc Create a new Line2D object.
     * @param startPoint - where the line starts
     * @param endPoint - where the line finishes
     * @param color
     */
    constructor(startPoint, endPoint, color) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.color = color;
    }
    /**
     * @desc Getter method for the start point
     * @return start point
     */
    getStartPoint() {
        return (this.startPoint);
    }
    /**
    * @desc Getter method for the end point
    * @return end point
    */
    getEndPoint() {
        return (this.endPoint);
    }
    /**
    * @desc Getter method for the lenght of the line
    * @return length
    */
    getLength() {
        return (distanceBetweenTwoPoints(this.startPoint, this.endPoint));
    }
    /**
    * @desc Getter method for the color of the line
    * @return color
    */
    getColor() {
        return ((this.color) ? this.color : 'black');
    }
    /**
     * @desc Método para obtener una cadena con la información de la recta
     * @return {String} cadena en formato: {puntoIncial, puntoFinal, pendiente}
     */
    toString() {
        return (`Start:${this.startPoint.toString()},\n End:${this.endPoint.toString()},\n`);
    }
}
/**
 * @desc Función para obtener la distancia entre dos puntos
 * @param startPoint - punto inicial
 * @param endPoint - punto final
 * @return distancia
 */
export function distanceBetweenTwoPoints(startPoint, endPoint) {
    let distanceX = Math.abs(endPoint.getCoordinateX() - startPoint.getCoordinateX());
    let distanceY = Math.abs(endPoint.getCoordinateY() - startPoint.getCoordinateY());
    return (Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2)));
}
