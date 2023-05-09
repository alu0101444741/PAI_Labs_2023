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
        this.objects = [];
        this.objectsMoving = [];
        this.objectsDirection = [];
        this.SIZE_FACTOR = 10;
        //this.addObject(new Ball(new Point2D(this.WIDTH / 4, this.HEIGHT / 2), this.WIDTH, this.HEIGHT, this.HEIGHT / this.SIZE_FACTOR, 'red'));
        //this.addObject(new Ball(new Point2D(3 * this.WIDTH / 4, this.HEIGHT / 2), this.WIDTH, this.HEIGHT, this.HEIGHT / this.SIZE_FACTOR, 'blue'));
        const BALL_AMOUNT = 8;
        const BALL_DIAMETER = this.HEIGHT / this.SIZE_FACTOR;
        /*for (let i = 0; i < BALL_AMOUNT / 2; ++i) {
          this.addObject(new Ball(this.randomPoint(BALL_DIAMETER), this.WIDTH, this.HEIGHT, this.HEIGHT / this.SIZE_FACTOR, 'red'));
        }
        for (let i = 0; i < BALL_AMOUNT / 2; ++i) {
          this.addObject(new Ball(this.randomPoint(BALL_DIAMETER), this.WIDTH, this.HEIGHT, this.HEIGHT / this.SIZE_FACTOR, 'blue'));
        }*/
        for (let i = 0; i < BALL_AMOUNT; ++i) {
            this.addObject(new Ball(new Point2D(BALL_DIAMETER + (i * (this.WIDTH - BALL_DIAMETER) / BALL_AMOUNT), this.HEIGHT / 2), this.WIDTH, this.HEIGHT, this.HEIGHT / this.SIZE_FACTOR, 'red'));
        }
    }
    randomPoint(ballDiameter) {
        return (new Point2D(ballDiameter + Math.floor(Math.random() * (this.WIDTH - ballDiameter * 2)), ballDiameter + Math.floor(Math.random() * (this.HEIGHT - ballDiameter * 2))));
    }
    /** @desc Canvas draw loop. */
    update() {
        this.draw();
        for (let i = 0; i < this.objectsMoving.length; ++i)
            if (this.objectsMoving[i])
                this.moveObject(this.objectsDirection[i], this.objects[i]);
        window.requestAnimationFrame(() => this.update());
    }
    /** @desc Draws the scene. */
    draw() {
        this.drawBackground();
        for (const object of this.objects)
            object.draw(this.CONTEXT);
    }
    /**
     * @desc Add a new moving object to the canvas
     * @param object - new moving object
     */
    addObject(object) {
        this.objects.push(object);
        this.objectsMoving.push(false);
        this.objectsDirection.push(new Point2D(0, 0));
    }
    /**
     * @desc Changes the direction the objects must move
     * @param direction - up, down, right or left
     * @param object - object to update
     */
    moveObject(direction, object) {
        object.update(direction, this.pixelsToMove, this.WIDTH, this.HEIGHT);
    }
    /**
     * @desc Make an object move in a given direction.
     * The direction is determined by a point object that works as a vector.
     * @param direction - point as a vector
     * @param object
     */
    moveObjectContinuously(direction, object) {
        for (let i = 0; i < this.objects.length; ++i) {
            if (this.objects[i] === object) {
                if (this.objectsMoving[i]) {
                    this.objectsMoving[i] = false;
                    break;
                }
                else {
                    this.objectsMoving[i] = true;
                    this.objectsDirection[i] = direction;
                    break;
                }
            }
        }
    }
    /** @desc Change the size of all elements so they fit properly on the canvas. */
    updateObjects() {
        for (const object of this.objects)
            object.adapt(this.WIDTH, this.HEIGHT, this.SIZE_FACTOR);
    }
    /**
     * @desc Update the amount of pixels that every object has to move
     * @param pixelsToMove
     */
    changeSpeed(pixelsToMove) {
        this.pixelsToMove = pixelsToMove;
    }
    /**
     * @desc Getter method for the objects
     * @returns stored moving objects
     */
    getObjects() {
        return (this.objects);
    }
    /**
     * @desc Getter method for the objects current movement direction
     * @returns objects current movement direction
     */
    getObjectsDirection() {
        return (this.objectsDirection);
    }
    /**
     * @desc Getter method for the objects moving status
     * @returns objects status
     */
    getObjectsMoving() {
        return (this.objectsMoving);
    }
    /**
     * @desc Method to check if an element of the canvas has been clicked
     * @param coordinateX - coordinate x of the click on the canvas
     * @param coordinateY - coordinate y of the click on the canvas
     */
    clickOn(coordinateX, coordinateY) {
        console.log('Click on', coordinateX, coordinateY);
        for (let i = 0; i < this.objects.length; ++i) {
            let objectLeftBorder = this.objects[i].getCoordinateX() - (this.objects[i].getSize() / 2);
            let objectRightBorder = this.objects[i].getCoordinateX() + (this.objects[i].getSize() / 2);
            let objectUpperBorder = this.objects[i].getCoordinateY() - (this.objects[i].getSize() / 2);
            let objectDownBorder = this.objects[i].getCoordinateY() + (this.objects[i].getSize() / 2);
            console.log('Objeto', i, 'en', [objectLeftBorder, objectRightBorder, objectUpperBorder, objectDownBorder]);
            if (((coordinateX >= objectLeftBorder) && (coordinateX <= objectRightBorder)) &&
                ((coordinateY >= objectUpperBorder) && (coordinateY <= objectDownBorder))) {
                // console.log('Objeto', i, Math.floor(Math.random() * AnimationView.DIRECTIONS.length));
                let randomDirection;
                if (Math.floor(Math.random() * 10) > 5) {
                    randomDirection = AnimationView.DIAGONAL[Math.floor(Math.random() * AnimationView.DIAGONAL.length)];
                    console.log('DIAGONAL');
                }
                else {
                    randomDirection = AnimationView.DIRECTIONS[Math.floor(Math.random() * AnimationView.DIRECTIONS.length)];
                }
                this.moveObjectContinuously(randomDirection, this.objects[i]);
                break;
            }
        }
    }
}
AnimationView.DIRECTIONS = [new Point2D(0, -1), new Point2D(0, 1), new Point2D(-1, 0), new Point2D(1, 0)];
AnimationView.DIAGONAL = [new Point2D(-1, -1), new Point2D(-1, 1), new Point2D(1, -1), new Point2D(1, 1)];
