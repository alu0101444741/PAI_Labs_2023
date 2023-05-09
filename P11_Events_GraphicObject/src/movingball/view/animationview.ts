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
  private ball: Ball;
  private BALL_SIZE_FACTOR: number = 8;
  public static readonly DIRECTIONS: Point2D[] = [new Point2D(0, -1), new Point2D(0, 1), new Point2D(-1, 0), new Point2D(1, 0)];
  /**
  * @desc Create a new Animation object
  * @param pixelsToMove - amount of pixels  
  */
  public constructor(private pixelsToMove: number = 10) {    
    super();
    this.ball = new Ball(new Point2D(this.WIDTH / 2, this.HEIGHT / 2), this.WIDTH, this.HEIGHT, this.HEIGHT / this.BALL_SIZE_FACTOR);
  }

  /**
   * @desc Changes the direction the objects must move
   * @param direction - up, down, right or left
   */
  public moveObject(direction: Point2D): void {
    this.ball.update(direction, this.pixelsToMove, this.WIDTH, this.HEIGHT);
  }

  /** @desc Change the size of all elements so they fit properly on the canvas. */  
  protected updateObjects(): void {
    this.ball.adapt(this.WIDTH, this.HEIGHT, this.BALL_SIZE_FACTOR);
  }

  /**
   * @desc Update the amount of pixels that every object has to move
   * @param pixelsToMove 
   */
  public changeSpeed(pixelsToMove: number): void {
    this.pixelsToMove = pixelsToMove;
  }
  
  /** @desc Draws the scene. */
  public draw(): void {
    this.drawBackground();
    this.ball.draw(this.CONTEXT);
  }

  /**
   * @desc Method to check if an element of the canvas has been clicked
   * @param coordinateX - coordinate x of the click on the canvas
   * @param coordinateY - coordinate y of the click on the canvas 
   */
  public clickOn(coordinateX: number, coordinateY: number): void {
    
  }

  /**
   * @desc 
   * @param coordinateX  - coordinate x of the click on the canvas
   * @param coordinateY  - coordinate y of the click on the canvas
   * @returns 
   */
  /*private objectClicked(coordinateX: number, coordinateY: number): boolean {
    let cardCounter: number = 0;
    for (let card of player.getHand().getCards()) {
      let cardCoordinateX: number = this.cardSlotSize * cardCounter + this.cardHorizontalOffset;  
      if (((coordinateX >= cardCoordinateX) && (coordinateX <= cardCoordinateX + this.cardWidth)) &&
          ((coordinateY >= cardCoordinateY) && (coordinateY <= cardCoordinateY + this.cardHeight))) {
        this.POKER_GAME.DECK.moveCards(player.getHand(), 5)
        return(true);
      }
      ++ cardCounter;
    }
    return(false);
  }*/

  
}