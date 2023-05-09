/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc Board class
*/
import { Rectangle } from './rectangle.js';
/** @desc Board class */
export class Board {
    /** @desc Create a new Board object */
    constructor() {
        this.CONTEXT = null;
        this.WIDTH = 0;
        this.HEIGHT = 0;
        this.COLORS = ['red', 'yellow', 'blue', 'black', 'purple'];
        this.CANVAS = document.getElementById('mainCanvas');
        //if (this.CANVAS instanceof HTMLCanvasElement) {
        this.CONTEXT = this.CANVAS.getContext('2d');
        this.WIDTH = Number(this.CANVAS.getAttribute('width'));
        this.HEIGHT = Number(this.CANVAS.getAttribute('height'));
        /*}
        else {
          throw new Error('Canvas not found');
        }*/
    }
    /**
     * @desc Draw a given polygon on the canvas
     * @param polygon - object to draw
     */
    drawPolygon(polygon) {
        if (this.CONTEXT)
            polygon.draw(this.CONTEXT);
    }
    /**
     * @desc Draw a given amount of rectangles with random sizes and positions
     * @param numberOfRectangles
     */
    createRandomRectangles(numberOfRectangles) {
        for (let i = 0; i < numberOfRectangles; ++i) {
            let randomCoordinateX = Math.random() * this.WIDTH;
            let randomCoordinateY = Math.random() * this.HEIGHT;
            let randomWidth = Math.random() * (this.WIDTH / 4);
            let randomHeight = Math.random() * (this.HEIGHT / 4);
            let randomColor = this.COLORS[Math.floor(this.COLORS.length * Math.random())];
            let randomBorderColor = this.COLORS[Math.floor(this.COLORS.length * Math.random())];
            if (this.CONTEXT) {
                this.CONTEXT.lineWidth = Math.floor(10 * Math.random());
                (new Rectangle(randomWidth, randomHeight, randomCoordinateX, randomCoordinateY, randomColor, randomBorderColor)).draw(this.CONTEXT);
            }
        }
    }
}
