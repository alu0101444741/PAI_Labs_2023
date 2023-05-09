/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 18 2023
 * @desc MovingObjectController class
 */
import { AnimationView } from '../view/animationview.js';
/** @desc MovingObjectController class */
export class MovingObjectController {
    /**
    * @desc Create a new MovingObjectController object
    * @param ANIMATION_VIEW
    */
    constructor(ANIMATION_VIEW) {
        this.ANIMATION_VIEW = ANIMATION_VIEW;
        this.CANVAS = this.ANIMATION_VIEW.getCanvas();
        this.CANVAS.addEventListener('click', (event) => this.clickedOnCanvas(event));
        window.addEventListener('resize', () => this.ANIMATION_VIEW.resizeCanvas());
        this.PIXELS_TO_MOVE = document.getElementById('inputValue');
        this.GO_UP = document.getElementById('Up');
        this.GO_DOWN = document.getElementById('Down');
        this.GO_LEFT = document.getElementById('Left');
        this.GO_RIGHT = document.getElementById('Right');
        this.GO_UP.addEventListener('click', () => this.moveObject(AnimationView.DIRECTIONS[0]));
        this.GO_DOWN.addEventListener('click', () => this.moveObject(AnimationView.DIRECTIONS[1]));
        this.GO_LEFT.addEventListener('click', () => this.moveObject(AnimationView.DIRECTIONS[2]));
        this.GO_RIGHT.addEventListener('click', () => this.moveObject(AnimationView.DIRECTIONS[3]));
        // WASD Controllers
        this.KEYS_PRESSED = new Map();
        this.KEYS_PRESSED.set('w', false);
        this.KEYS_PRESSED.set('s', false);
        this.KEYS_PRESSED.set('a', false);
        this.KEYS_PRESSED.set('d', false);
        window.addEventListener('keydown', (event) => this.pressKey(event.key));
        window.addEventListener('keyup', (event) => this.releaseKey(event.key));
    }
    /** @desc Canvas draw loop. */
    update() {
        this.ANIMATION_VIEW.changeSpeed(Number(this.PIXELS_TO_MOVE.value));
        this.ANIMATION_VIEW.draw();
        window.requestAnimationFrame(() => this.update());
    }
    /**
     * @desc Make an object move in a given direction.
     * The direction is determined by a point object that works as a vector.
     * @param direction - point as a vector
     */
    moveObject(direction) {
        this.ANIMATION_VIEW.moveObject(direction);
    }
    /** @desc Move the object using the WASD keys */
    moveObjectWASD() {
        if (this.KEYS_PRESSED.get('w'))
            this.ANIMATION_VIEW.moveObject(AnimationView.DIRECTIONS[0]);
        if (this.KEYS_PRESSED.get('s'))
            this.ANIMATION_VIEW.moveObject(AnimationView.DIRECTIONS[1]);
        if (this.KEYS_PRESSED.get('a'))
            this.ANIMATION_VIEW.moveObject(AnimationView.DIRECTIONS[2]);
        if (this.KEYS_PRESSED.get('d'))
            this.ANIMATION_VIEW.moveObject(AnimationView.DIRECTIONS[3]);
    }
    /**
    * @desc Check with key is pressed and move the object following the WASD standard.
    * @param pressedKey - key identifier
    */
    pressKey(pressedKey) {
        this.KEYS_PRESSED.set(pressedKey, true);
        this.moveObjectWASD();
    }
    /**
    * @desc Deactivate the key that is no longer being pressed.
    * @param pressedKey - released key identifier
    */
    releaseKey(pressedKey) {
        this.KEYS_PRESSED.set(pressedKey, false);
    }
    /**
     * @desc Clicked on the Canvas
     * @param event - mouse event with x and y coordinates
     */
    clickedOnCanvas(event) {
        let boundingClientRect = this.CANVAS.getBoundingClientRect();
        this.ANIMATION_VIEW.clickOn(event.clientX - boundingClientRect.left, event.clientY - boundingClientRect.top);
    }
}
