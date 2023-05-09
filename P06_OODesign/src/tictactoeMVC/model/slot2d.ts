/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 11 2023
 * @desc Clase Slot2D
 * @module slot-2d
 */

import { Point2D } from './point2d';

/** @desc Clase Slot2D */
export class Slot2D {
  private centerPoint: Point2D;
  private topLeftPoint: Point2D;
  private bottomRightPoint: Point2D;
  private objectContained: string;
  private hasObject: boolean;
  /**
   * @desc Constructor de la clase Slot2D.
   * 
   * @param coordinateX - top left point coordinate X
   * @param coordinateY - top left point coordinate Y
   * @param width - anchura la casilla
   * @param height - altura la casilla
   */
  constructor(
      coordinateX: number,
      coordinateY: number,
      private width: number,
      private height: number) {    
    this.centerPoint = new Point2D(coordinateX + width / 2, coordinateY + height / 2);
    this.topLeftPoint = new Point2D(coordinateX, coordinateY);
    this.bottomRightPoint = new Point2D(coordinateX + width, coordinateY + height);
    this.objectContained = '';
    this.hasObject = false;
  }

  /**
   * @desc Método para asignar una pieza de puzzle a la casilla. 
   * @param object - pieza nueva a contener
   */
  setObject(object: string): void { 
    this.objectContained = object;
    this.hasObject = true;
  }

  /**
   * @desc Método para eliminar la pieza contenida. 
   */
  deleteObject(): void {
    this.objectContained = '';
    this.hasObject = false;
  }

  /**
   * @desc Método para conocer si un punto se encuentra incluido en el área del rectángulo de la casilla (dentro de sus cuatro vértices)
   * @param point - punto a comprobar
   * @return 'true' si está incluido
   */
  pointInsideSlotRectangle(point: Point2D): boolean {
    return(((point.getCoordinateX() >= this.topLeftPoint.getCoordinateX()) &&
            (point.getCoordinateY() >= this.topLeftPoint.getCoordinateY())) &&
          ((point.getCoordinateX() <= this.bottomRightPoint.getCoordinateX()) &&
            (point.getCoordinateY() <= this.bottomRightPoint.getCoordinateY())));
  }

  /**
   * @desc Método para obtener una cadena con la información de la casilla
   * @return {String} cadena en formato: {coordenada X del centro, coordenada Y del centro, tamaño de lado}
   */
  toString() {
    return(`X:${this.centerPoint.getCoordinateX()}, Y:${this.centerPoint.getCoordinateY()}`);
  }

  /**
   * @desc Método getter para saber si la casilla contiene una pieza de puzzle. 
   * @return 'true' si contiene alguna pieza
   */
  containsObject(): boolean {    
    return(this.hasObject);
  }

  /**
   * @desc Método getter para obtener la anchura de la casilla. 
   * @return anchura
   */
  getHeight() {    
    return(this.height);
  }

  /**
   * @desc Método getter para obtener la anchura de la casilla. 
   * @return anchura
   */
  getWidth() {    
    return(this.width);
  }

  /**
   * @desc Método getter para obtener la pieza asignada a la casilla. 
   * @return pieza contenida
   */
  getObjectContained(): string {    
    return(this.objectContained);
  }

  /**
   * @desc Método getter para obtener el vértice superior izquierdo de la casilla.
   * @return vértice superior izquierdo
   */
  getTopLeftPoint(): Point2D {
    return (this.topLeftPoint);
  }

  /**
   * @desc Método getter para obtener el vértice inferior derecho de la casilla.
   * @return vértice inferior derecho
   */
  getBottomRightPoint(): Point2D {
    return (this.bottomRightPoint);
  }

  /**
   * @desc Método getter para obtener el vértice central de la casilla.
   * @return vértice central
   */
  getCenterPoint(): Point2D {
    return (this.centerPoint);
  }
}