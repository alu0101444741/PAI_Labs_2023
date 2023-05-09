/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc QuickhullView
 */
import { Line2D } from "../utilities/line2d.js";
import { Point2D } from "../utilities/point2d.js";
import { CanvasView } from "../utilities/canvasview.js";
export class QuickhullAnimation extends CanvasView {
    // private quickHullFinished: boolean = false;
    /**
    * @desc Create a new ConvexhullAnimation object
    * @param pointsAmount - how many points to draw
    * @param MILISECONDS - miliseconds between frames
    */
    constructor(pointsAmount, MILISECONDS) {
        super(MILISECONDS);
        this.MILISECONDS = MILISECONDS;
        this.allPoints = [];
        this.convexHull = [];
        this.currentConvexHull = [];
        for (let i = 0; i < pointsAmount; ++i) {
            this.allPoints.push(new Point2D(Math.floor(this.BORDER_SPACE + (this.WIDTH - this.BORDER_SPACE) * Math.random()), Math.floor(this.BORDER_SPACE + (this.HEIGHT - this.BORDER_SPACE) * Math.random())));
        }
        this.convexHull = this.createConvexHull([...this.allPoints]);
        this.convexHull = this.convexHull.sort(function (firstPoint, secondPoint) {
            if (firstPoint.getCoordinateX() > secondPoint.getCoordinateX())
                return (1);
            else if (firstPoint.getCoordinateX() === secondPoint.getCoordinateX())
                if (firstPoint.getCoordinateY() > secondPoint.getCoordinateY())
                    return (1);
            return (-1);
        });
        this.sortHull();
        // this.quickHullFinished = true;
    }
    /** @desc Draw the stored information */
    update() {
        this.cleanCanvas();
        this.drawPoints();
        // if (this.quickHullFinished) this.drawConvexHull(this.convexHull);
        // else this.drawConvexHull(this.currentConvexHull);
        this.drawConvexHull(this.convexHull);
    }
    /**
     * @desc Create the convex hull of a given array of points by using the Quickhull algorithm.
     * @param points
     * @returns convex hull as an array of points
     */
    createConvexHull(points) {
        if (points.length <= 2)
            return (points);
        points = points.sort(function (firstPoint, secondPoint) {
            if (firstPoint.getCoordinateX() > secondPoint.getCoordinateX())
                return (1);
            else if (firstPoint.getCoordinateX() === secondPoint.getCoordinateX())
                if (firstPoint.getCoordinateY() > secondPoint.getCoordinateY())
                    return (1);
            return (-1);
        });
        // MEJOR ENCONTRAR LOS PUNTOS A MANO. ¡¡¡¡ NO ORDENAR !!!!
        let leftMostPoint = points[0];
        let rightMostPoint = points[points.length - 1];
        this.currentConvexHull.push(leftMostPoint);
        this.currentConvexHull.push(rightMostPoint);
        points.pop();
        points.shift();
        let dividerLine = new Line2D(leftMostPoint, rightMostPoint);
        let pointsAbove = this.getPointsAbove([...points], dividerLine, true);
        let pointsBelow = this.getPointsAbove([...points], dividerLine, false);
        this.currentConvexHull.push(...this.quickHull(leftMostPoint, rightMostPoint, [...pointsAbove], true));
        this.currentConvexHull.push(...this.quickHull(leftMostPoint, rightMostPoint, [...pointsBelow], false));
        return (this.currentConvexHull.slice());
    }
    /**
     * @desc Quickhull algorithm. Recursively adds a point to the convex hull.
     * @param farthestPointAbove
     * @param farthestPointBelow
     * @param points - current convex hull
     * @param above - 'true' to search above the divider line and 'false' to searh below it.
     * @returns new current convex hull
     */
    quickHull(farthestPointAbove, farthestPointBelow, points, above) {
        // setTimeout(() => window.requestAnimationFrame(() => this.update()), this.MILISECONDS);
        if ((points.length === 0) || farthestPointBelow.equal(new Point2D(0, 0)) || farthestPointAbove.equal(new Point2D(0, 0)))
            return ([]);
        let highestDistance = -1;
        let farthestPoint = new Point2D(0, 0);
        let dividerLine = new Line2D(farthestPointAbove, farthestPointBelow);
        for (let i = 0; i < points.length; ++i) {
            let currentPointDistance = Math.abs(points[i].distanceFromLine(dividerLine));
            if (currentPointDistance > highestDistance) {
                highestDistance = currentPointDistance;
                farthestPoint = points[i];
            }
        }
        if (farthestPoint.equal(new Point2D(0, 0)))
            return ([]);
        this.currentConvexHull.push(farthestPoint);
        if (points.length === 1)
            points.pop();
        else {
            for (let i = 0; i < points.length; ++i) {
                if (points[i].equal(farthestPoint)) {
                    points.splice(i, 1);
                    break;
                }
            }
        }
        let pointsAboveHighestPoint = this.getPointsAbove(points.slice(), new Line2D(farthestPointAbove, farthestPoint), true);
        let pointsBelowHighestPoint = this.getPointsAbove(points.slice(), new Line2D(farthestPointAbove, farthestPoint), false);
        let pointsAboveLowestPoint = this.getPointsAbove(points.slice(), new Line2D(farthestPointBelow, farthestPoint), true);
        let pointsBelowLowestPoint = this.getPointsAbove(points.slice(), new Line2D(farthestPointBelow, farthestPoint), false);
        if (above) {
            this.currentConvexHull.push(...this.quickHull(farthestPointAbove, farthestPoint, pointsAboveHighestPoint.slice(), true));
            this.currentConvexHull.push(...this.quickHull(farthestPoint, farthestPointBelow, pointsAboveLowestPoint.slice(), true));
        }
        else {
            this.currentConvexHull.push(...this.quickHull(farthestPointAbove, farthestPoint, pointsBelowHighestPoint.slice(), false));
            this.currentConvexHull.push(...this.quickHull(farthestPoint, farthestPointBelow, pointsBelowLowestPoint.slice(), false));
        }
        return (this.currentConvexHull.slice());
    }
    /**
     * @desc Get the points above or below a given segment.
     * @param points - points to search on
     * @param dividerLine - segment
     * @param above - 'true' to search above the line, 'false' to search below it
     * @returns points above or below the segment
     */
    getPointsAbove(points, dividerLine, above) {
        let pointsAbove = [];
        if (dividerLine.getStartPoint().getCoordinateX() === dividerLine.getEndPoint().getCoordinateX())
            return ([]);
        let slope = dividerLine.getSlope();
        let coefficientC = dividerLine.getCoefficientC();
        for (let i = 0; i < points.length; ++i) {
            if (above && (points[i].getCoordinateY() > (slope * points[i].getCoordinateX() + coefficientC))) {
                pointsAbove.push(points[i]);
            }
            else if (!above && (points[i].getCoordinateY() < (slope * points[i].getCoordinateX() + coefficientC))) {
                pointsAbove.push(points[i]);
            }
        }
        return (pointsAbove.slice());
    }
    /** @desc Sort the convex hull */
    sortHull() {
        let orderedHull = [];
        orderedHull.push(this.convexHull[0]);
        let remainingPoints = [...this.convexHull];
        for (let i = 0; i < this.convexHull.length; ++i) {
            let nearestPointIndex = -1;
            let minimumDistance = Infinity;
            for (let j = 0; j < remainingPoints.length; ++j) {
                let distance = orderedHull[i].distanceToAnotherPoint(remainingPoints[j]);
                if (distance < minimumDistance) {
                    nearestPointIndex = j;
                    minimumDistance = distance;
                }
            }
            if (nearestPointIndex !== -1) {
                orderedHull.push(remainingPoints[nearestPointIndex]);
                remainingPoints.splice(nearestPointIndex, 1);
            }
        }
        this.convexHull = [...orderedHull];
    }
    /** @desc Draw the convex hull current stored points */
    drawConvexHull(convexHull) {
        this.CONTEXT.fillStyle = 'coral';
        this.CONTEXT.strokeStyle = 'red';
        this.CONTEXT.lineWidth = 5;
        for (let i = 0; i < convexHull.length; ++i) {
            this.drawPoint(convexHull[i]);
            if (this.convexHull.length > 1) {
                this.drawLine(convexHull[i], convexHull[(i + 1) % convexHull.length]);
            }
        }
    }
    /** @desc Draw the stored points */
    drawPoints() {
        this.CONTEXT.fillStyle = 'cyan';
        for (let i = 0; i < this.allPoints.length; ++i) {
            this.drawPoint(this.allPoints[i]);
        }
    }
}
