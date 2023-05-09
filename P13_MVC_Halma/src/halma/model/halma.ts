/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 4 2023
 * @desc HalmaModel class
 */

import { Point2D } from "../view/point2d.js";
import { Slot } from "./slot.js";
import { SlotBoard } from "./slotboard.js"

/**
 * @desc HalmaModel class. Extends SlotBoard.
 * Creates a board and put some pieces on the bottom left corner of it.
 */
export class HalmaModel extends SlotBoard {
  private slotClicked: Slot = Slot.EMPTY_SLOT;
  private movements: number = 0;
  private gameInProgress: boolean = true;
  private winningSlots: Set<Slot> = new Set<Slot>();
  /**
   * @desc Create a new HalmaModel object.
   * @param ROWS
   * @param COLUMNS
   * @param slotHeight
   * @param slotWidth
   * @param STARTING_PIECES - how many pieces to put at the beginning of the game
   */
  constructor(
    protected readonly ROWS: number,
    protected readonly COLUMNS: number,
    protected slotHeight: number,
    protected slotWidth: number,
    private readonly STARTING_PIECES: number = 9) {
      super(ROWS, COLUMNS, slotHeight, slotWidth);
      let piecesRemaining: number = this.STARTING_PIECES;
      for (let i: number = 1; piecesRemaining > 0; ++i) {
        for (let row: number = this.ROWS - 1; (row > this.ROWS - i - 1) && (piecesRemaining > 0); -- row) {
          for (let column: number = 0; (column < i) && (piecesRemaining > 0); ++ column) {
            if (!this.slots[row][column].isOccupied()) -- piecesRemaining;
            this.slots[row][column].occupy();            
          }
        }
      }
      this.generateWinningSlots();
  }

  /**
   * @desc Checks if a slot were clicked and updates the game.
   * @param coordinateX - click x coordinate
   * @param coordinateY - click y coordinate 
   */
  public clickOnSlot(coordinateX: number, coordinateY: number): void {
    let clickPoint = new Point2D(coordinateX, coordinateY);
    for (const slot of this.slotsOnArray) {
      let topLeftPoint = new Point2D(slot.getCenterPoint().getCoordinateX() - this.slotWidth / 2, slot.getCenterPoint().getCoordinateY() - this.slotHeight / 2);
      if (clickPoint.insideRectangle(topLeftPoint, this.slotWidth, this.slotHeight)) {
        if (this.gameInProgress) this.updateGame(slot);
        break;
      }
    }
  }

  /**
   * @desc Updates the game state.
   * @param slot - new slot clicked
   */
  private updateGame(slot: Slot): void {
    if (this.slotClicked !== Slot.EMPTY_SLOT) { // A slot has been clicked previously
      if (slot.isOccupied()) { // Click on another piece slot
        if (slot === this.slotClicked) this.clearSlot(); // If the same slot, deselect
        else { // Change to the new piece slot          
          this.slotClicked.clicked();
          slot.clicked();
          this.slotClicked = slot;
        }
      }
      else {        
        if (this.contiguousSlots(this.slotClicked, slot)) this.movePiece(slot);
        else {
          let rowDiff: number = Math.abs(slot.getRow() - this.slotClicked.getRow());
          let columnDiff: number = Math.abs(slot.getColumn() - this.slotClicked.getColumn());
          if ((((rowDiff === 2) && (columnDiff === 0)) || ((rowDiff === 0) && (columnDiff === 2)) ||
              ((rowDiff === 2) && (columnDiff === 2))) && this.isThereAPieceBetween(slot, this.slotClicked)) {
            this.movePiece(slot);
          }
          else this.clearSlot();
        }        
      }
    }
    else { // No slot is currently selected
      if (slot.isOccupied()) { // Only react to slots that contains piece
        slot.clicked();
        this.slotClicked = slot;
      }
    }
  }

  /**
   * @desc Checks if there is an occupied slot between two given slots
   * @param firstSlot 
   * @param secondSlot 
   * @returns 
   */
  private isThereAPieceBetween(firstSlot: Slot, secondSlot: Slot): boolean {
    let rowBetween: number = (firstSlot.getRow() + secondSlot.getRow()) / 2;
    let columnBetween: number = (firstSlot.getColumn() + secondSlot.getColumn()) / 2;
    return (this.slots[rowBetween][columnBetween].isOccupied());
  }

  /** 
   * @desc Move a piece from the currently clicked slot to a new one.
   * @param slot - slot to move the piece
   */
  private movePiece(slot: Slot): void {
    slot.occupy();
    this.slotClicked.clear();
    this.clearSlot();
    ++ this.movements;
    this.gameInProgress = this.checkGameState();
  }

  /** @desc Deselect the last slot that was clicked. */
  private clearSlot(): void {
    this.slotClicked.clicked();
    this.slotClicked = Slot.EMPTY_SLOT;
  }

  /**
   * @desc Check if the game is over. All pieces on the top-right corner
   * @returns 'true' if the game is not over
   */
  private checkGameState(): boolean {
    for (const slot of this.winningSlots) if (!slot.isOccupied()) return(true);
    return(false);
  }

  /** @desc Save a portion of the board where the pieces must be placed for the player to win. */
  private generateWinningSlots(): void {
    let piecesRemaining: number = this.STARTING_PIECES;
    for (let i: number = 1; piecesRemaining > 0; ++i) {     
      for (let row: number = 0; (row < i) && (piecesRemaining > 0); ++ row) {
        for (let column: number = this.COLUMNS - 1; (column > this.COLUMNS - i - 1) && (piecesRemaining > 0); -- column) {
          if (!this.winningSlots.has(this.slots[row][column])) {
            -- piecesRemaining;
            this.winningSlots.add(this.slots[row][column]);
          } 
        }
      }
    }
  }

  /**
   * @desc Check if the given slot is one in which has to be a piece to win the game
   * @param slot - slot to check
   * @returns 'true' if the slot is part of the solution
   */
  public isWinningSlot(slot: Slot): boolean {
    return(this.winningSlots.has(slot))
  }

  /**
   * @desc Getter method for the game state.
   * @returns 'true' if the game is over
   */
  public gameOver(): boolean {
    return(!this.gameInProgress);
  }

  /**
   * @desc Getter method for the amount of movements made in the game.
   * @returns movements
   */
  public getMovements(): number {
    return(this.movements);
  }
}