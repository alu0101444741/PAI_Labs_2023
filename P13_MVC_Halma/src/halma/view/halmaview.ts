/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 4 2023
 * @desc HalmaView class
 */
import { CanvasView } from './canvasview.js';
import { HalmaModel } from '../model/halma.js';
import { Slot } from '../model/slot.js';

/** @desc HalmaView class. Extends CanvasView */
export class HalmaView extends CanvasView {
  private readonly SLOT_WIDTH: number;
  private readonly SLOT_HEIGHT: number;
  private readonly PIECE_SIZE: number;
  private board?: HalmaModel;
  private readonly MOVEMENTS: HTMLElement;
  private readonly GAME_STATE: HTMLElement;
  /**
  * @desc Create a new Halma object 
  * @param boardRows
  * @param boardColumns
  */
  public constructor(boardRows: number, boardColumns: number) {    
    super();
    this.SLOT_WIDTH = this.WIDTH / boardRows;
    this.SLOT_HEIGHT = this.HEIGHT / boardColumns;
    this.PIECE_SIZE = this.SLOT_HEIGHT * 0.95 / 2;
    this.MOVEMENTS = document.getElementById('movements') as HTMLElement;
    this.GAME_STATE = document.getElementById('gameState') as HTMLElement;
  }  

  /** @desc Canvas draw loop. */
  public update(): void {    
    this.draw();
    window.requestAnimationFrame(() => this.update());
  }

  /** @desc Draws the scene. */
  private draw(): void {
    this.drawBackground('beige');
    this.drawHalma();
  }

  /** @desc Draws the Halma game board and updates the amount of movements that have been made. */
  private drawHalma(): void {
    if (this.board) {
      this.CONTEXT.lineWidth = 1;
      this.CONTEXT.strokeStyle = 'black';
      for (const slot of this.board?.getSlots()) this.drawSlot(slot);
      this.MOVEMENTS.innerText = `Movements: ${this.board?.getMovements()}`;
      if (this.board?.gameOver()) this.GAME_STATE.innerText = 'Game finished';
    }    
  }

  /** @desc Draw a slot. */
  private drawSlot(slot: Slot): void {
    let centerPoint = slot.getCenterPoint();
    if (this.board?.isWinningSlot(slot)) this.drawRectangle(centerPoint, this.SLOT_WIDTH, this.SLOT_HEIGHT, 1, 'black', true, 'coral');
    else this.drawRectangle(centerPoint, this.SLOT_WIDTH, this.SLOT_HEIGHT, 1, 'black', false);
    if (slot.isOccupied()) this.drawCircle(centerPoint, this.PIECE_SIZE, 1, 'black', slot.isSelected());
    this.CONTEXT.closePath();
  }

  /**
   * @desc Set a new Halma game
   * @param board - new Halma game 
   */
  public setBoard(board: HalmaModel): void {
    this.board = board;
    this.GAME_STATE.innerText = 'Playing...';
  }

  /** @desc Update every object properties. */  
  protected updateObjects(): void {
    //for (const object of this.objects) object.update(this.WIDTH, this.HEIGHT);
  }

  /** @desc Change the size of all elements so they fit properly on the canvas. */  
  protected adaptObjects(): void {
    //for (const object of this.objects) object.adapt(this.WIDTH, this.HEIGHT, this.SIZE_FACTOR);
  }

   /**
   * @desc Getter method for the slot height
   * @returns slot vertical size
   */
  public getSlotHeight(): number {
    return(this.SLOT_HEIGHT);
  }

  /**
   * @desc Getter method for the slot width
   * @returns slot horizontal size
   */
  public getSlotWidth(): number {
    return(this.SLOT_WIDTH);
  }
}