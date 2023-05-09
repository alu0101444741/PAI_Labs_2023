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
    private /*readonly*/ coordinateX: number,
    private /*readonly*/ coordinateY: number) {
  }

  /**
   * @desc Checks if the current point is inside of a given rectangle.
   * @param topLeftPoint - top left point of a rectangle
   * @param width
   * @param height 
   * @returns 'true' if the point is inside
   */
  public insideRectangle(topLeftPoint: Point2D, width: number, height: number): boolean {
    return  (((this.coordinateX >= topLeftPoint.getCoordinateX()) &&
            (this.coordinateX <= topLeftPoint.getCoordinateX() + width)) &&
            ((this.coordinateY >= topLeftPoint.getCoordinateY()) &&
            (this.coordinateY <= topLeftPoint.getCoordinateY() + height)));
  }

  /**
   * @desc Create a random Point2D object in a given area.
   * @param minimumY 
   * @param maximumY 
   * @param minimumX 
   * @param maximumX 
   * @returns random point
   */
  public static randomPoint(minimumY: number, maximumY: number, minimumX: number, maximumX: number): Point2D {
    return(new Point2D(
      minimumX + Math.floor(Math.random() * (maximumX - minimumX * 2)),
      minimumY + Math.floor(Math.random() * (maximumY - minimumY * 2))));
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
   * @desc Create a new Point2D as a result of multiplying the coordinates of the current point with a given number
   * @param multiplier
   * @returns new point
   */
  public multiply(multiplier: number): Point2D {
    return(new Point2D(this.coordinateX * multiplier, this.coordinateY * multiplier));
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

  public setCoordinates(x: number, y: number): void {
    this.coordinateX = x;
    this.coordinateY = y;
  }

  /**
   * @desc Information of the point on a string
   * @return string formated as 'x: 45, y: 45'
   */
  public toString(): string {
    return(`x:${this.coordinateX}, y:${this.coordinateY}`);
  }
}