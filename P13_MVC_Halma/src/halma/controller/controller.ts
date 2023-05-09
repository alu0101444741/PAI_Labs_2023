/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 4 2023
 * @desc HalmaController class
 */

import { HalmaModel } from '../model/halma.js';
import { HalmaView } from '../view/halmaview.js';
 
/** @desc HalmaController class */
export class HalmaController {
  private halmaModel: HalmaModel;
  private readonly HALMA_VIEW: HalmaView;
  private readonly CANVAS: HTMLCanvasElement; 
  private readonly PIECES_AMOUNT: HTMLInputElement;
  private readonly RESET: HTMLButtonElement; 
  /** 
   * @desc Create a new HalmaController object.
   * @param HALMA_SIZE - amount of rows and columns of the Halma board
   * @param startingPieces - how many pieces to put at the beginning of the game
   */
  public constructor(
    private readonly HALMA_SIZE: number = 9,
    startingPieces: number = 9) { 
    this.HALMA_VIEW = new HalmaView(this.HALMA_SIZE, this.HALMA_SIZE);
    this.halmaModel = new HalmaModel(this.HALMA_SIZE, this.HALMA_SIZE, this.HALMA_VIEW.getSlotHeight(), this.HALMA_VIEW.getSlotWidth(), startingPieces);
    this.HALMA_VIEW.setBoard(this.halmaModel);
    this.CANVAS = this.HALMA_VIEW.getCanvas();
    //window.addEventListener('resize', () => this.HALMA_VIEW.resizeCanvas());
    //this.HALMA_VIEW.resizeCanvas();
    this.PIECES_AMOUNT = document.getElementById('inputValue') as HTMLInputElement;
    this.RESET = document.getElementById('reset') as HTMLButtonElement;
    this.RESET.addEventListener('click', () => this.restartGame())

    this.CANVAS.addEventListener('click', (event) => this.clickedOnCanvas(event))
    this.HALMA_VIEW.update();
  }

  /** @desc Restart game with different amount of pieces.*/
  private restartGame(): void {
    let pieces: number = Number(this.PIECES_AMOUNT.value);
    if (pieces < 1) pieces = 1;
    if (pieces > this.HALMA_SIZE * this.HALMA_SIZE) pieces = this.HALMA_SIZE * this.HALMA_SIZE;
    this.halmaModel = new HalmaModel(this.HALMA_SIZE, this.HALMA_SIZE, this.HALMA_VIEW.getSlotHeight(), this.HALMA_VIEW.getSlotWidth(), pieces);
    this.HALMA_VIEW.setBoard(this.halmaModel);
  }

  /**
   * @desc Clicked on the Canvas
   * @param event - mouse event with x and y coordinates
   */
  private clickedOnCanvas(event: MouseEvent): void {
    let boundingClientRect = this.CANVAS.getBoundingClientRect();
    this.halmaModel.clickOnSlot(event.clientX - boundingClientRect.left, event.clientY - boundingClientRect.top);
  }
}