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
import { CanvasView } from './canvasview.js';
import { MovingObject } from '../model/movingobject.js';
import { Ball } from '../model/ball.js';
import { Vector2D } from '../model/vector2d.js';
import { Point2D } from './point2d.js';

/** @desc AnimationView class. Extends CanvasView */
export class AnimationView extends CanvasView {
  private objects: MovingObject[] = [];
  private SIZE_FACTOR: number = 20;
  private OBJECTS_SIZE: number = this.HEIGHT / this.SIZE_FACTOR; 
  /**
  * @desc Create a new Animation object 
  */
  public constructor() {    
    super();
    this.addObject(new Ball(Point2D.randomPoint(this.OBJECTS_SIZE, this.HEIGHT, this.OBJECTS_SIZE, this.WIDTH), this.WIDTH, this.HEIGHT, this.OBJECTS_SIZE, this.getRandomColor()));
    //this.objects[0].applyForce(new Vector2D(1, 1));
    this.objects[0].increaseVelocity(new Vector2D(4, 4));
  }  

  /** @desc Canvas draw loop. */
  public update(): void {    
    // console.log(this.objects[0].getAcceleration().toString())
    this.updateObjects();
    this.draw();
    window.requestAnimationFrame(() => this.update());
  }

  /** @desc Draws the scene. */
  private draw(): void {
    this.drawBackground();
    for (const object of this.objects) object.draw(this.CONTEXT);
  }

  /**
   * @desc Add a new moving object to the canvas
   * @param object - new moving object
   */
  public addObject(object: MovingObject): void {
    this.objects.push(object);
  }

  /** @desc Update every object properties. */  
  protected updateObjects(): void {
    for (const object of this.objects) object.update(this.WIDTH, this.HEIGHT);
  }

  /** @desc Change the size of all elements so they fit properly on the canvas. */  
  protected adaptObjects(): void {
    for (const object of this.objects) object.adapt(this.WIDTH, this.HEIGHT, this.SIZE_FACTOR);
  }

  /**
   * @desc Getter method for the objects
   * @returns stored moving objects
   */
  public getObjects(): MovingObject[] {
    return(this.objects)
  }  
}