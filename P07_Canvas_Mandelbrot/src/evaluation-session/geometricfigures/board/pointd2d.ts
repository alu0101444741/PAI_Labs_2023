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
    constructor(
      private readonly coordinateX: number,
      private readonly coordinateY: number,
      private readonly color?: string) {
    }  
  
    /**
     * @desc Getter method for the x coordinate
     * @return x coordinate
     */
    public getCoordinateX(): number {
      return(this.coordinateX);
    }
  
    /**
     * @desc Getter method for the y coordinate
     * @return y coordinate
     */
    public getCoordinateY(): number {
      return(this.coordinateY);
    }
  
    /**
     * @desc Método para obtener una cadena con la información del punto
     * @return cadena en formato: {coordenadaX, coordenadaY}
     */
     public toString(): string {
      return(`x:${this.coordinateX}, y:${this.coordinateY}, color:${this.color}`);
    }
  }