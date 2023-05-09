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
import { Point2D } from '../view/point2d.js';

/** @desc MovingObjectController class */
export class MovingObjectController {
  private readonly CANVAS: HTMLCanvasElement;
  private readonly PIXELS_TO_MOVE: HTMLInputElement;
  private readonly GO_UP: HTMLButtonElement;
  private readonly GO_DOWN: HTMLButtonElement;
  private readonly GO_LEFT: HTMLButtonElement;
  private readonly GO_RIGHT: HTMLButtonElement;
  private readonly KEYS_PRESSED: Map<string, boolean>;  
  
  /**
  * @desc Create a new MovingObjectController object
  * @param ANIMATION_VIEW
  */
  public constructor(private readonly ANIMATION_VIEW: AnimationView) {    
    this.CANVAS = this.ANIMATION_VIEW.getCanvas();
    this.CANVAS.addEventListener('click', (event) => this.clickedOnCanvas(event))
    window.addEventListener('resize', () => this.ANIMATION_VIEW.resizeCanvas());
    this.PIXELS_TO_MOVE = document.getElementById('inputValue') as HTMLInputElement;

    this.GO_UP = document.getElementById('Up') as HTMLButtonElement;
    this.GO_DOWN = document.getElementById('Down') as HTMLButtonElement;
    this.GO_LEFT = document.getElementById('Left') as HTMLButtonElement;
    this.GO_RIGHT = document.getElementById('Right') as HTMLButtonElement;
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
  public update(): void {    
    this.ANIMATION_VIEW.changeSpeed(Number(this.PIXELS_TO_MOVE.value));
    this.ANIMATION_VIEW.draw();
    window.requestAnimationFrame(() => this.update());
  }

  /**
   * @desc Make an object move in a given direction.
   * The direction is determined by a point object that works as a vector.
   * @param direction - point as a vector
   */
  private moveObject(direction: Point2D): void {
    this.ANIMATION_VIEW.moveObject(direction);
  }   

  /** @desc Move the object using the WASD keys */
  private moveObjectWASD(): void {
    if (this.KEYS_PRESSED.get('w')) this.ANIMATION_VIEW.moveObject(AnimationView.DIRECTIONS[0]);
    if (this.KEYS_PRESSED.get('s')) this.ANIMATION_VIEW.moveObject(AnimationView.DIRECTIONS[1]);
    if (this.KEYS_PRESSED.get('a')) this.ANIMATION_VIEW.moveObject(AnimationView.DIRECTIONS[2]);
    if (this.KEYS_PRESSED.get('d')) this.ANIMATION_VIEW.moveObject(AnimationView.DIRECTIONS[3]);
  } 

  /**
  * @desc Check with key is pressed and move the object following the WASD standard.
  * @param pressedKey - key identifier
  */
  private pressKey(pressedKey: string) {
    this.KEYS_PRESSED.set(pressedKey, true);    
    this.moveObjectWASD();
  }

  /**
  * @desc Deactivate the key that is no longer being pressed.
  * @param pressedKey - released key identifier
  */
  private releaseKey(pressedKey: string) {
    this.KEYS_PRESSED.set(pressedKey, false);
  }

  /**
   * @desc Clicked on the Canvas
   * @param event - mouse event with x and y coordinates
   */
  private clickedOnCanvas(event: MouseEvent): void {
    let boundingClientRect = this.CANVAS.getBoundingClientRect();
    this.ANIMATION_VIEW.clickOn(event.clientX - boundingClientRect.left, event.clientY - boundingClientRect.top);
  }  
}