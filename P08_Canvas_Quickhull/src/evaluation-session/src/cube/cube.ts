/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc Cube
 */

import { CanvasView } from "../../../utilities/canvasview.js";
import { Point2D } from "../../../utilities/point2d.js";

export class Cube extends CanvasView {
  private readonly points: Point2D[] = [];
  private readonly backgroundPoints: Point2D[] = [];
  constructor(
    private readonly cubeHeight: number,
    private readonly cubeWidth: number,
    protected readonly MILISECONDS: number) {
    super(MILISECONDS);
    //let AMPLIFIED_BORDER_SPACE: number = this.HEIGHT / 2;
    let middlePoint: Point2D = new Point2D(this.WIDTH / 2, this.HEIGHT / 2)
    let topLeftPoint = new Point2D(middlePoint.getCoordinateX() - this.cubeWidth / 2, middlePoint.getCoordinateY() - this.cubeHeight / 2);
    let topRightPoint = new Point2D(topLeftPoint.getCoordinateX() + this.cubeWidth, middlePoint.getCoordinateY() - this.cubeHeight / 2);
    let bottomLeftPoint = new Point2D(middlePoint.getCoordinateX() - this.cubeWidth / 2, topLeftPoint.getCoordinateY() + this.cubeHeight);
    let bottomRightPoint = new Point2D(bottomLeftPoint.getCoordinateX() + this.cubeWidth, topRightPoint.getCoordinateY() + this.cubeHeight);    
    this.points = [topLeftPoint, topRightPoint, bottomRightPoint, bottomLeftPoint];

    for (const point of this.points) {
      this.backgroundPoints.push(new Point2D(point.getCoordinateX() + this.cubeWidth / 4, point.getCoordinateY() - this.cubeHeight / 4));
    }      
  }

  public update(): void {
    this.CONTEXT.strokeStyle = 'black';
    // this.CONTEXT.fillStyle = 'black';
    this.CONTEXT.lineWidth = 3;
    // this.drawPoints(this.points);
    // this.drawPoints(this.backgroundPoints);
    this.drawLines();
  }

  /** @desc Draw the stored points */
  /* private drawPoints(points: Point2D[]): void {     
    this.CONTEXT.fillStyle = 'cyan';
    for (const point of points) {
      this.drawPoint(point);
    }        
  }*/

  /** @desc Draw lines between points */
  private drawLines(): void {    
    for (let i = 0; i < this.points.length; ++i) {
      this.CONTEXT.setLineDash([]);
      this.drawLine(this.points[i], this.points[(i + 1) % this.points.length]);
      if (i === 2 || i === 3) this.CONTEXT.setLineDash([5, 15]);
      this.drawLine(this.backgroundPoints[i], this.backgroundPoints[(i + 1) % this.points.length]);
      this.CONTEXT.setLineDash([]);
      if (i === 3) this.CONTEXT.setLineDash([5, 15]);
      this.drawLine(this.points[i], this.backgroundPoints[i]);
    }
  }
}