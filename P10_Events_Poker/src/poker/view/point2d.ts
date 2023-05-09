/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc Point2D class
 */

/** @desc Point2D class */
export class Point2D {
  /**
   * @desc Create a new Point2D object.
   * @param coordinateX
   * @param coordinateY
   */
  constructor(
    private readonly coordinateX: number,
    private readonly coordinateY: number) {
  }

  /**
  * @desc Distance between the current point a given one.
  * @param point - another point
  * @return distance to the point
  */
  public distanceToAnotherPoint(point: Point2D): number {
    let distanceAxisX = Math.abs(this.coordinateX - point.coordinateX);
    let distanceAxisY = Math.abs(this.coordinateY - point.coordinateY);
    return(Math.sqrt(distanceAxisX * distanceAxisX + distanceAxisY * distanceAxisY));
  }

  /**
   * @desc Compare another point to the current one by the equality of it coordinates.
   * @param point - other point
   * @returns 'true' if they are equal
   */
  public equal(point: Point2D): boolean {
    return((this.coordinateX === point.getCoordinateX()) && (this.coordinateY === point.getCoordinateY()));
  }

  /**
   * @desc Create a new Point2D as a result of adding the coordinates of the current and a given one
   * @param point - other point
   * @returns new point
   */
  public add(point: Point2D): Point2D {
    return(new Point2D(this.coordinateX + point.coordinateX, this.coordinateY + point.coordinateY));
  }

  /**
   * @desc Create a new Point2D as a result of subtracting the coordinates of a given one to the current
   * @param point - other point
   * @returns new point
   */
  public subtract(point: Point2D): Point2D {
    return(new Point2D(this.coordinateX - point.coordinateX, this.coordinateY - point.coordinateY));
  }

  /**
   * @desc Create an array with the current point coordinates
   * @returns array as [coodinateX, coordinateY]
   */
  public toArray(): number[] {
    return([this.coordinateX, this.coordinateY]);
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
   * @desc Information of the point on a string
   * @return string formated as 'x: 45, y: 45'
   */
  public toString(): string {
    return(`x:${this.coordinateX}, y:${this.coordinateY}`);
  }
}