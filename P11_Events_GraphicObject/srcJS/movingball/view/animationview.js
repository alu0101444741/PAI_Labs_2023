/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 18 2023
 * @desc AnimationView class
 */
import { Ball } from '../model/ball.js';
import { CanvasView } from './canvasview.js';
import { Point2D } from './point2d.js';
/** @desc AnimationView class. Extends CanvasView */
export class AnimationView extends CanvasView {
    /**
    * @desc Create a new Animation object
    * @param pixelsToMove - amount of pixels
    */
    constructor(pixelsToMove = 10) {
        super();
        this.pixelsToMove = pixelsToMove;
        this.BALL_SIZE_FACTOR = 8;
        this.ball = new Ball(new Point2D(this.WIDTH / 2, this.HEIGHT / 2), this.WIDTH, this.HEIGHT, this.HEIGHT / this.BALL_SIZE_FACTOR);
    }
    /**
     * @desc Changes the direction the objects must move
     * @param direction - up, down, right or left
     */
    moveObject(direction) {
        this.ball.update(direction, this.pixelsToMove, this.WIDTH, this.HEIGHT);
    }
    /** @desc Change the size of all elements so they fit properly on the canvas. */
    updateObjects() {
        this.ball.adapt(this.WIDTH, this.HEIGHT, this.BALL_SIZE_FACTOR);
    }
    /**
     * @desc Update the amount of pixels that every object has to move
     * @param pixelsToMove
     */
    changeSpeed(pixelsToMove) {
        this.pixelsToMove = pixelsToMove;
    }
    /** @desc Draws the scene. */
    draw() {
        this.drawBackground();
        this.ball.draw(this.CONTEXT);
    }
    /**
     * @desc Method to check if an element of the canvas has been clicked
     * @param coordinateX - coordinate x of the click on the canvas
     * @param coordinateY - coordinate y of the click on the canvas
     */
    clickOn(coordinateX, coordinateY) {
    }
}
AnimationView.DIRECTIONS = [new Point2D(0, -1), new Point2D(0, 1), new Point2D(-1, 0), new Point2D(1, 0)];
