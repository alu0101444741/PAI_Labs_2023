/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc Quickhull
 */
import { Line2D } from "../utilities/line2d.js";
import { Point2D } from "../utilities/point2d.js";
export class Quickhull {
    constructor(points) {
        this.points = points;
        this.convexHull = this.createConvexHull([...points]);
    }
    createConvexHull(points) {
        if (points.length <= 2)
            return (points);
        let convexHull = [];
        let sortedPoints = points.sort(function (firstPoint, secondPoint) {
            if (firstPoint.getCoordinateX() > secondPoint.getCoordinateX())
                return (-1);
            else if (firstPoint.getCoordinateX() === secondPoint.getCoordinateX())
                if (firstPoint.getCoordinateY() > secondPoint.getCoordinateY())
                    return (-1);
            return (1);
        }); //console.log('Sorted points:'); sortedPoints.forEach(x => console.log(x.toString()));
        let farthestPointAbove = sortedPoints[0];
        let farthestPointBelow = sortedPoints[sortedPoints.length - 1];
        sortedPoints.pop();
        sortedPoints.shift();
        let dividerLine = new Line2D(farthestPointAbove, farthestPointBelow);
        let pointsAbove = this.getPointsAbove([...sortedPoints], dividerLine, true); //console.log('Points above:'); pointsAbove.forEach(x => console.log(x.toString()));
        let pointsBelow = this.getPointsAbove([...sortedPoints], dividerLine, false); //console.log('Points below:');pointsBelow.forEach(x => console.log(x.toString()));
        convexHull = convexHull.concat(this.quickHull(farthestPointAbove, farthestPointBelow, [...pointsAbove], true));
        console.log('Current hull (1stQH)');
        convexHull.forEach(x => console.log(x.toString()));
        convexHull = convexHull.concat(this.quickHull(farthestPointAbove, farthestPointBelow, [...pointsBelow], false));
        console.log('Current hull (2ndQH)');
        convexHull.forEach(x => console.log(x.toString()));
        return (convexHull.slice());
    }
    quickHull(farthestPointAbove, farthestPointBelow, points, above) {
        if (points.length === 0)
            return ([]); //console.log('There at least one point.');
        if (farthestPointBelow.equal(new Point2D(0, 0)) || farthestPointAbove.equal(new Point2D(0, 0)))
            return ([]);
        let convexHull = [];
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
        console.log('The farthest point is ' + farthestPoint.toString());
        convexHull.push(farthestPoint);
        for (let i = 0; i < points.length; ++i) {
            if (points[i].equal(farthestPoint)) {
                points.splice(i, 1);
                break;
            }
        }
        let pointsAboveHighestPoint = this.getPointsAbove(points.slice(), new Line2D(farthestPointAbove, farthestPoint), true);
        let pointsBelowHighestPoint = this.getPointsAbove(points.slice(), new Line2D(farthestPointAbove, farthestPoint), false);
        let pointsAboveLowestPoint = this.getPointsAbove(points.slice(), new Line2D(farthestPointBelow, farthestPoint), true);
        let pointsBelowLowestPoint = this.getPointsAbove(points.slice(), new Line2D(farthestPointBelow, farthestPoint), false);
        if (above) {
            convexHull = convexHull.concat(this.quickHull(farthestPointAbove, farthestPoint, pointsAboveHighestPoint.slice(), true));
            convexHull = convexHull.concat(this.quickHull(farthestPoint, farthestPointBelow, pointsAboveLowestPoint.slice(), true));
        }
        else {
            convexHull = convexHull.concat(this.quickHull(farthestPointAbove, farthestPoint, pointsBelowHighestPoint.slice(), false));
            convexHull = convexHull.concat(this.quickHull(farthestPoint, farthestPointBelow, pointsBelowLowestPoint.slice(), false));
        }
        //console.log()
        return (convexHull.slice());
    }
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
    getPoints() {
        return (this.points);
    }
    getConvexHull() {
        return (this.convexHull);
    }
}
