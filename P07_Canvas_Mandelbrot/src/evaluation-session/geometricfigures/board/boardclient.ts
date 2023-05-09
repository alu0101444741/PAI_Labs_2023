/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc Client program for Board class
*/

import { Board } from './board.js';
import { Line2D } from './line2d.js';
import { Point2D } from './point2d.js';
import { Rectangle } from './rectangle.js';
import { Triangle } from './triangle.js';

function main(): void {   
  let board = new Board();
  board.drawPolygon(new Rectangle(10, 15, 50, 50, 'red', 'black')); 
  // board.createRandomRectangles(10); 

  let firstTrianglePoint: Point2D = new Point2D(150, 150);
  let secondTrianglePoint: Point2D = new Point2D(150, 200);
  let thirdTrianglePoint: Point2D = new Point2D(200, 200);
  let edges: Line2D[] = [
    new Line2D(firstTrianglePoint, secondTrianglePoint),
    new Line2D(secondTrianglePoint, thirdTrianglePoint),
    new Line2D(thirdTrianglePoint, firstTrianglePoint)
  ]
  board.drawPolygon(new Triangle(edges,'red', 'black'))
}
main();