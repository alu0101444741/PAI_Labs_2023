/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 1 2023
 * @desc MovingObjectController class
 */

import { MovingObject } from '../model/movingobject.js';
import { AnimationView } from '../view/animationview.js';

/** @desc MovingObjectController class */
export class MovingObjectController {
  private readonly CANVAS: HTMLCanvasElement;
  private objects: MovingObject[];
  
  /**
  * @desc Create a new MovingObjectController object
  * @param ANIMATION_VIEW
  */
  public constructor(private readonly ANIMATION_VIEW: AnimationView) { 
    this.objects = this.ANIMATION_VIEW.getObjects();    
    this.CANVAS = this.ANIMATION_VIEW.getCanvas();
    window.addEventListener('resize', () => this.ANIMATION_VIEW.resizeCanvas());
    this.ANIMATION_VIEW.resizeCanvas();
  } 
}