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

import { MovingObject } from '../model/movingobject.js';
import { AnimationView } from '../view/animationview.js';
import { Point2D } from '../view/point2d.js';

/** @desc MovingObjectController class */
export class MovingObjectController {
  private readonly CANVAS: HTMLCanvasElement;
  private readonly PIXELS_TO_MOVE: HTMLInputElement;
  private objects: MovingObject[]; 
  private readonly LEFT_BUTTONS: HTMLButtonElement[] = [];
  private readonly RIGHT_BUTTONS: HTMLButtonElement[] = []; 
  
  /**
  * @desc Create a new MovingObjectController object
  * @param ANIMATION_VIEW
  */
  public constructor(private readonly ANIMATION_VIEW: AnimationView) { 
    this.objects = this.ANIMATION_VIEW.getObjects();    
    this.CANVAS = this.ANIMATION_VIEW.getCanvas();
    this.CANVAS.addEventListener('click', (event) => this.clickedOnCanvas(event))
    window.addEventListener('resize', () => this.ANIMATION_VIEW.resizeCanvas());
    this.ANIMATION_VIEW.resizeCanvas();
    this.PIXELS_TO_MOVE = document.getElementById('inputValue') as HTMLInputElement;
    this.PIXELS_TO_MOVE.addEventListener('change', () => this.ANIMATION_VIEW.changeSpeed(Number(this.PIXELS_TO_MOVE.value)));

    const directions: string[] = ['Up', 'Down', 'Left', 'Right'];
    for (let i = 0; i < directions.length; ++i) {
      this.LEFT_BUTTONS.push(document.getElementById(`${directions[i]}Left`) as HTMLButtonElement);
      this.RIGHT_BUTTONS.push(document.getElementById(`${directions[i]}Right`) as HTMLButtonElement);
      for (let ballIndex = 0; ballIndex < this.objects.length / 2; ++ ballIndex) {
        this.LEFT_BUTTONS[i].addEventListener('click', () => this.moveObject(AnimationView.DIRECTIONS[i], this.objects[ballIndex], true));
        this.RIGHT_BUTTONS[i].addEventListener('click', () => this.moveObject(AnimationView.DIRECTIONS[i], this.objects[this.objects.length / 2 + ballIndex], true));
      }      
    }   
  } 

  /**
   * @desc Make an object move in a given direction.
   * The direction is determined by a point object that works as a vector.
   * @param direction - point as a vector
   * @param object
   */
  private moveObject(direction: Point2D, object: MovingObject, continuously: boolean): void {
    if (continuously) this.ANIMATION_VIEW.moveObjectContinuously(direction, object);
    else this.ANIMATION_VIEW.moveObject(direction, object);
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