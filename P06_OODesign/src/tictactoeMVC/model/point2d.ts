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

//import { Line2D } from './line2d.js';

//export const POINT_SIZE = 5;
//export const MIDDLE_POINT_SIZE = 10;

/** @desc Clase Point2D */
 export class Point2D {
  /**
   * @desc Constructor de la clase Point2D.
   * Además de las coordenadas del mismo, este almacenará el color y el tamaño con el que se
   * dibujaría en un canvas.
   * @param coordinateX - coordenada x del punto
   * @param coordinateY - coordenada y del punto
   * @param color - color asignado
   * @param size - tamaño asignado
   */
 constructor(
    private coordinateX: number,
    private coordinateY: number,
    private color?: string/*,
    private size?: number*/) {
 }
 
 /**
   * @desc Método para obtener la distancia a la que se encuentra de otro punto.
   * @param point - punto con el calcular la distancia
   * @return distancia
   */
 distanceToAnotherPoint(point: Point2D): number {
   let distanceAxisX = Math.abs(this.coordinateX - point.coordinateX);
   let distanceAxisY = Math.abs(this.coordinateY - point.coordinateY);
   return(Math.sqrt(Math.pow(distanceAxisX, 2) + Math.pow(distanceAxisY, 2)));
 }

  /**
   * @desc Método para obtener todos los puntos que se encuentran a una determinada distancia del actual.
   * Los puntos con coordenadas que exceden el marco del canvas serán descartados.
   * @param distance - distancia a la cual deben estar los puntos requeridos
   * @param height - coordenada Y de la cual no se puede exceder
   * @param width - coordenada X de la cual no se puede exceder
   * @return {Point2D[]} array de puntos desordenados
   */
  /*getPointsFromDistance(distance, height, width) {
    let points = [];
    for (let angle = 0.0000; angle < 2 * Math.PI; angle+= 0.0001) {
      let newCoordinateX = this.coordinateX + distance * Math.cos(angle);
      let newCoordinateY = this.coordinateY + distance * Math.sin(angle);
      if ((newCoordinateX > width) || (newCoordinateX < 0) || (newCoordinateY > height) || (newCoordinateY < 0)) continue;
      points.push(new Point2D(newCoordinateX, newCoordinateY, 'blue', POINT_SIZE));
    } 
    return(this.#shuffle(points));
  }*/

  /**
   * @desc Método para desordenar el array de puntos.
   * @param {Array} objects - array a desordenar
   * @return {Array} array desordenado
   */
  /*#shuffle(objects) {
    let objectsRemaining = objects.length;
    let swap, actualObject;
    for (const object of objects) {      
      actualObject = Math.floor(Math.random() * objectsRemaining);
      --objectsRemaining;
      swap = objects[objectsRemaining];
      objects[objectsRemaining] = objects[actualObject];
      objects[actualObject] = swap;
    }
    return(objects);
  }*/

  /**
   * @desc Método para obtener una cadena con la información del punto
   * @return cadena en formato: {coordenadaX, coordenadaY}
   */
  toString(): string {
    return(`x:${this.coordinateX}, y:${this.coordinateY}, color:${this.color}`);
  }

  /**
  * @desc Método para cambiar la coordenada X del punto.
  * @param newCoordinateX - nueva coordenada X
  */
 /*setCoordinateX(newCoordinateX: number): void {
   this.coordinateX = newCoordinateX;
 }*/

 /**
  * @desc Método para cambiar la coordenada Y del punto.
  * @param newCoordinateY - nueva coordenada Y
  */
 /*setCoordinateY(newCoordinateY: number): void) {
   this.coordinateY = newCoordinateY;
 }*/

  /**
   * @desc Método para obtener la coordenada x del punto
   * @return coordenada x
   */
  getCoordinateX(): number {
    return(this.coordinateX);
  }

  /**
   * @desc Método para obtener la coordenada y del punto
   * @return coordenada y
   */
  getCoordinateY(): number {
    return(this.coordinateY);
  }
}