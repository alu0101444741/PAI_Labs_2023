/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc Line2D class
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
        let distanceX = Math.abs(this.endPoint.getCoordinateX() - this.startPoint.getCoordinateX());
        let distanceY = Math.abs(this.endPoint.getCoordinateY() - this.startPoint.getCoordinateY());
        this.length = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));
        this.slope = (this.endPoint.getCoordinateY() - this.startPoint.getCoordinateY()) / (this.endPoint.getCoordinateX() - this.startPoint.getCoordinateX());
        this.coefficientC = startPoint.getCoordinateY() - (startPoint.getCoordinateX() * this.slope);
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
        return (this.length);
    }
    /**
     * @desc Getter method for the color of the line
     * @return color
     */
    getColor() {
        return ((this.color) ? this.color : 'black');
    }
    /**
     * @desc Getter method for the slope of the line
     * @returns slope value
     */
    getSlope() {
        return (this.slope);
    }
    /**
     * @desc Getter method for the coefficient C of the line
     * @returns coefficient C value
     */
    getCoefficientC() {
        return (this.coefficientC);
    }
    /**
    * @desc Método para obtener una cadena con la información de la recta
    * @return cadena en formato: puntoIncial, puntoFinal
    */
    toString() {
        return (`Start:${this.startPoint.toString()},\n End:${this.endPoint.toString()},\n`);
    }
}
