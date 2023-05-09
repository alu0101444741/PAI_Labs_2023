/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 24 2023
 * @desc CanvasView
 */
/** @desc QuickhullAnimation class */
export class CanvasView {
    /**
    * @desc Create a new QuickhullAnimation object
    * @param MILISECONDS - miliseconds between frames
    */
    constructor(MILISECONDS) {
        this.MILISECONDS = MILISECONDS;
        this.BORDER_SPACE = 50;
        this.POINT_SIZE = 1;
        this.CANVAS = document.getElementById('mainCanvas');
        this.CONTEXT = this.CANVAS.getContext('2d');
        this.HEIGHT = Number(this.CANVAS.getAttribute('height'));
        this.WIDTH = Number(this.CANVAS.getAttribute('width'));
    }
    /** @desc Draw the stored points */
    drawPoint(point) {
        this.CONTEXT.beginPath();
        this.CONTEXT.ellipse(point.getCoordinateX(), point.getCoordinateY(), this.POINT_SIZE, this.POINT_SIZE, Math.PI / 4, 0, 2 * Math.PI);
        this.CONTEXT.fill();
        this.CONTEXT.closePath();
    }
    /**
    * @desc Draw a line given two points
    * @param firstPoint
    * @param secondPoint
    */
    drawLine(firstPoint, secondPoint) {
        this.CONTEXT.beginPath();
        this.CONTEXT.moveTo(firstPoint.getCoordinateX(), firstPoint.getCoordinateY());
        this.CONTEXT.lineTo(secondPoint.getCoordinateX(), secondPoint.getCoordinateY());
        this.CONTEXT.stroke();
        this.CONTEXT.closePath();
    }
    /** @desc Remove all the canvas content */
    cleanCanvas() {
        this.CONTEXT.beginPath();
        this.CONTEXT.fillStyle = 'black';
        this.CONTEXT.fillRect(0, 0, this.WIDTH, this.HEIGHT);
        this.CONTEXT.closePath();
    }
}
