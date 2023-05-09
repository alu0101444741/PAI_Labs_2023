/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 11 2023
 * @desc TicTacToeView
 * @module tictactoe-view
 */

import { Point2D } from "../model/point2d";
import { Slot2D } from "../model/slot2d";
import { SlotBoard2D } from "../model/slotboard2d";

export class TicTacToeView {
    private height: number;
    private width: number;
    private readonly DEFAULT_BOARD_ROWS: number = 3;
    private readonly DEFAULT_BOARD_COLUMNS: number = 3;
    private context: CanvasRenderingContext2D | null = null;
    private gameBoard: SlotBoard2D;
    /**
   * @desc Constructor de la clase View
   * @param canvas - canvas sobre el que dibujar
   */
  constructor(private canvas: HTMLCanvasElement) {
    this.height = Number(canvas.getAttribute('height'));
    this.width = Number(canvas.getAttribute('width'));
    
    this.canvas = canvas;
    if (this.canvas instanceof HTMLCanvasElement) {
      this.context = canvas.getContext('2d');
    }
    this.gameBoard = new SlotBoard2D(this.height, this.width, this.DEFAULT_BOARD_ROWS, this.DEFAULT_BOARD_COLUMNS);

    //this.#gameEnd = false;
    //this.#END_MESSAGE_SIZE = this.#height / 3;
    //this.#NUMBERS_SIZE = this.#height / this.#boardRows;
  }

  /** @desc Método para animar redibujar la escena */
  update() {
    //this.#resizeCanvas();
    //this.#resizeCanvasElements();
    //this.#drawBackground();
    //this.#getResetInformation();
    this.draw();
    window.requestAnimationFrame(() => this.update());
  } 

  /** @desc Método para dibujar la escena / mesa de poker */
  private draw(): void { 
    if (this.context instanceof CanvasRenderingContext2D) 
      this.context.clearRect(0, 0, this.width, this.height);
    this.drawSlots();
    /*
    if ((this.#board.victory) || (this.#board.defeat)) {
      this.#drawEndMessage(this.#board.victory);
      this.#gameEnd = true;
    }*/
  }

  /**
   * @desc 
   * @param coordinateX - coordenada x en el canvas
   * @param coordinateY - coordenada y en el canvas
   * @returns array with row and column values
   */
  slotClicked(coordinateX: number, coordinateY: number): number[] {    
    //let slotChanged: boolean = false;
    let point = new Point2D(coordinateX, coordinateY);
    for (let row = 0; (row < this.DEFAULT_BOARD_ROWS) /*&& !slotChanged*/; ++row) {  
      for (let column = 0; (column < this.DEFAULT_BOARD_COLUMNS) /*&& !slotChanged*/; ++column) {
        if (/*!this.game.slotAlreadyPlayed(row, column) && */this.gameBoard.getSingleSlot(row, column).pointInsideSlotRectangle(point)){
          //this.game.play(row, column);
          //slotChanged = true;       
          return([row, column]);
        }
      }
    }
    return([-1,-1]);
  }

  /**
   * @desc Fills the slot with the current player symbol
   * @param row - row of the slot
   * @param column - column of the slot
   * @param currentPlayer - 'X' or 'O'
   */
  fillSlot(row: number, column: number, currentPlayer: string): void {
    this.gameBoard.setObject(row, column, currentPlayer);
  }

  /** @desc Método para dibujar las casillas */
  private drawSlots(): void {
    if (this.context instanceof CanvasRenderingContext2D) {
      this.context.beginPath();
      this.context.strokeStyle = 'black';
      this.context.lineWidth = 1;
      for (let row = 0; row < this.DEFAULT_BOARD_ROWS ; ++ row) {
        for (let column = 0; column < this.DEFAULT_BOARD_COLUMNS ; ++ column) {
          let slot: Slot2D = this.gameBoard.getSingleSlot(row, column);          
          this.context.fillStyle = this.createSlotGradient(slot);              
          this.context.fillRect(slot.getTopLeftPoint().getCoordinateX(), slot.getTopLeftPoint().getCoordinateY(), slot.getWidth(), slot.getHeight());
          this.context.strokeRect(slot.getTopLeftPoint().getCoordinateX(), slot.getTopLeftPoint().getCoordinateY(), slot.getWidth(), slot.getHeight());
          this.drawSlotContent(slot)       
        }      
      }
      this.context.fill();
      this.context.stroke();
    }    
  }

  /** @desc Método para escribir el número asociado a cada punto */
  private drawSlotContent(slot: Slot2D): void {
    if (this.context instanceof CanvasRenderingContext2D) {
      let slotCenter: Point2D = slot.getCenterPoint();
      this.context.beginPath();
      this.context.fillStyle = (slot.getObjectContained() === 'X') ? 'black' : 'red';
      this.context.font = '15px Georgia';   
      this.context.textAlign = "center";
      this.context.textBaseline = "middle";
      this.context.fillText(slot.getObjectContained(), slotCenter.getCoordinateX(), slotCenter.getCoordinateY());
      this.context.fill();
    }
  }

  /**
   * @desc Create a gradient for a slot
   * @param slot - slot in which create a gradient
   * @returns gradient
   */
  private createSlotGradient(slot: Slot2D): CanvasGradient {
    if (this.context instanceof CanvasRenderingContext2D) {
      let gradient = this.context.createRadialGradient(
        slot.getCenterPoint().getCoordinateX(), slot.getCenterPoint().getCoordinateY(), Math.min(slot.getHeight(), slot.getWidth()) / 4,
        slot.getCenterPoint().getCoordinateX(), slot.getCenterPoint().getCoordinateY(), Math.min(slot.getHeight(), slot.getWidth()));
      gradient.addColorStop(0, 'lightgray');
      gradient.addColorStop(0.9, 'gray');
      gradient.addColorStop(1, 'darkgray');
      return(gradient);
    }
    return(new CanvasGradient());
  }
}