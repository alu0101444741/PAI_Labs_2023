/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc ConvexhullAnimation
 */

import { CanvasView } from "../utilities/canvasview.js";
import { Point2D } from "../utilities/point2d.js";

/** @desc ConvexhullAnimation class */
export class ConvexhullAnimation extends CanvasView{
  private allPoints: Point2D[] = [];
  private convexHull: Point2D[] = [];
  private leftMostPoint: Point2D;
  private currentPoint: Point2D;
  private currentIndex: number;
  private nextPoint: Point2D;
   /** 
   * @desc Create a new ConvexhullAnimation object
   * @param pointsAmount - how many points to draw
   * @param MILISECONDS - miliseconds between frames
   */
  constructor(pointsAmount: number, protected readonly MILISECONDS: number) {
    super(MILISECONDS);
    for (let i = 0; i < pointsAmount; ++i) {
      this.allPoints.push(new Point2D(Math.floor(this.BORDER_SPACE + (this.WIDTH - this.BORDER_SPACE) * Math.random()),
                                      Math.floor(this.BORDER_SPACE + (this.HEIGHT - this.BORDER_SPACE) * Math.random())))
    }
    this.allPoints = this.allPoints.sort(
      function(firstPoint: Point2D, secondPoint: Point2D) {
        if (firstPoint.getCoordinateX() > secondPoint.getCoordinateX()) return(1);
        else if (firstPoint.getCoordinateX() === secondPoint.getCoordinateX()) 
        if (firstPoint.getCoordinateY() > secondPoint.getCoordinateY()) return(1);    
        return(-1);
    });
    this.leftMostPoint = this.allPoints[0];
    this.currentPoint = this.leftMostPoint;
    this.nextPoint = this.allPoints[1];
    this.currentIndex = 2;
    this.convexHull.push(this.currentPoint);
  }

  /** @desc Draw loop of the Convexhull algorithm */
  public update(): void {    
    this.cleanCanvas();
    this.drawPoints();
    this.drawConvexHull();
    this.computeConvexHull();
    setTimeout(() => window.requestAnimationFrame(() => this.update()), this.MILISECONDS);
  }

  /** @desc Method to include all the quickhull algorithm steps */
  private computeConvexHull(): void {
    let pointToCheck: Point2D = this.allPoints[this.currentIndex];
    let vectorToNextPoint: number[] = this.nextPoint.subtract(this.currentPoint).toArray();
    if (pointToCheck !== undefined) {
      let vectorToCheckingPoint: number[] = pointToCheck.subtract(this.currentPoint).toArray();      
      vectorToNextPoint.push(0);
      vectorToCheckingPoint.push(0);      
      if (crossProduct(vectorToNextPoint, vectorToCheckingPoint)[2] < 0) {
        this.nextPoint = pointToCheck;
      }
      this.CONTEXT.lineWidth = 2;
      this.CONTEXT.strokeStyle = 'azure';       
      this.drawLine(this.currentPoint, pointToCheck);
      ++ this.currentIndex;
      if (this.currentIndex === this.allPoints.length) {
        if (!this.currentPoint.equal(this.nextPoint)) {
          this.convexHull.push(this.nextPoint);
          this.currentPoint = this.nextPoint;
          this.nextPoint = this.leftMostPoint;
          this.currentIndex = 0;
        }
      }
    }    
  }

  /** @desc Draw the convex hull current stored points */
  private drawConvexHull(): void {    
    this.CONTEXT.fillStyle = 'coral';
    this.CONTEXT.strokeStyle = 'red'; 
    this.CONTEXT.lineWidth = 5;
    for (let i = 0; i < this.convexHull.length; ++i) {
      this.drawPoint(this.convexHull[i]);
      if (this.convexHull.length > 1) {
        this.drawLine(this.convexHull[i], this.convexHull[(i + 1) % this.convexHull.length]);
      }
    } 
  }

  /** @desc Draw the stored points */
  private drawPoints(): void {     
    this.CONTEXT.fillStyle = 'cyan';
    for (let i = 0; i < this.allPoints.length; ++i) {
      this.drawPoint(this.allPoints[i]);
    }        
  }
}

/**
 * @desc Compute the cross product of two 3-dimensional vectors
 * @param first 
 * @param second 
 * @returns 3-dimensional vector as a result of the product
 */
function crossProduct(first: number[], second: number[]): number[] {  
  return([first[1] * second[2] - first[2] * second[1],
          first[2] * second[0] - first[0] * second[2],
          first[0] * second[1] - first[1] * second[0]]);
}