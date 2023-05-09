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
import { SlotBoard } from "./slotboard.js";
/**
 * @desc HalmaModel class. Extends SlotBoard.
 * Creates a board and put some pieces on the bottom left corner of it.
 */
export class HalmaModel extends SlotBoard {
    /**
     * @desc Create a new HalmaModel object.
     * @param ROWS
     * @param COLUMNS
     * @param slotHeight
     * @param slotWidth
     * @param STARTING_PIECES - how many pieces to put at the beginning of the game
     */
    constructor(ROWS, COLUMNS, slotHeight, slotWidth, STARTING_PIECES = 9) {
        super(ROWS, COLUMNS, slotHeight, slotWidth);
        this.ROWS = ROWS;
        this.COLUMNS = COLUMNS;
        this.slotHeight = slotHeight;
        this.slotWidth = slotWidth;
        this.STARTING_PIECES = STARTING_PIECES;
        this.slotClicked = Slot.EMPTY_SLOT;
        this.movements = 0;
        this.gameInProgress = true;
        this.winningSlots = new Set();
        let piecesRemaining = this.STARTING_PIECES;
        for (let i = 1; piecesRemaining > 0; ++i) {
            for (let row = this.ROWS - 1; (row > this.ROWS - i - 1) && (piecesRemaining > 0); --row) {
                for (let column = 0; (column < i) && (piecesRemaining > 0); ++column) {
                    if (!this.slots[row][column].isOccupied())
                        --piecesRemaining;
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
    clickOnSlot(coordinateX, coordinateY) {
        let clickPoint = new Point2D(coordinateX, coordinateY);
        for (const slot of this.slotsOnArray) {
            let topLeftPoint = new Point2D(slot.getCenterPoint().getCoordinateX() - this.slotWidth / 2, slot.getCenterPoint().getCoordinateY() - this.slotHeight / 2);
            if (clickPoint.insideRectangle(topLeftPoint, this.slotWidth, this.slotHeight)) {
                if (this.gameInProgress)
                    this.updateGame(slot);
                break;
            }
        }
    }
    /**
     * @desc Updates the game state.
     * @param slot - new slot clicked
     */
    updateGame(slot) {
        if (this.slotClicked !== Slot.EMPTY_SLOT) { // A slot has been clicked previously
            if (slot.isOccupied()) { // Click on another piece slot
                if (slot === this.slotClicked)
                    this.clearSlot(); // If the same slot, deselect
                else { // Change to the new piece slot          
                    this.slotClicked.clicked();
                    slot.clicked();
                    this.slotClicked = slot;
                }
            }
            else {
                if (this.contiguousSlots(this.slotClicked, slot))
                    this.movePiece(slot);
                else {
                    let rowDiff = Math.abs(slot.getRow() - this.slotClicked.getRow());
                    let columnDiff = Math.abs(slot.getColumn() - this.slotClicked.getColumn());
                    if ((((rowDiff === 2) && (columnDiff === 0)) || ((rowDiff === 0) && (columnDiff === 2)) ||
                        ((rowDiff === 2) && (columnDiff === 2))) && this.isThereAPieceBetween(slot, this.slotClicked)) {
                        this.movePiece(slot);
                    }
                    else
                        this.clearSlot();
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
    isThereAPieceBetween(firstSlot, secondSlot) {
        let rowBetween = (firstSlot.getRow() + secondSlot.getRow()) / 2;
        let columnBetween = (firstSlot.getColumn() + secondSlot.getColumn()) / 2;
        return (this.slots[rowBetween][columnBetween].isOccupied());
    }
    /**
     * @desc Move a piece from the currently clicked slot to a new one.
     * @param slot - slot to move the piece
     */
    movePiece(slot) {
        slot.occupy();
        this.slotClicked.clear();
        this.clearSlot();
        ++this.movements;
        this.gameInProgress = this.checkGameState();
    }
    /** @desc Deselect the last slot that was clicked. */
    clearSlot() {
        this.slotClicked.clicked();
        this.slotClicked = Slot.EMPTY_SLOT;
    }
    /**
     * @desc Check if the game is over. All pieces on the top-right corner
     * @returns 'true' if the game is not over
     */
    checkGameState() {
        for (const slot of this.winningSlots)
            if (!slot.isOccupied())
                return (true);
        return (false);
    }
    /** @desc Save a portion of the board where the pieces must be placed for the player to win. */
    generateWinningSlots() {
        let piecesRemaining = this.STARTING_PIECES;
        for (let i = 1; piecesRemaining > 0; ++i) {
            for (let row = 0; (row < i) && (piecesRemaining > 0); ++row) {
                for (let column = this.COLUMNS - 1; (column > this.COLUMNS - i - 1) && (piecesRemaining > 0); --column) {
                    if (!this.winningSlots.has(this.slots[row][column])) {
                        --piecesRemaining;
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
    isWinningSlot(slot) {
        return (this.winningSlots.has(slot));
    }
    /**
     * @desc Getter method for the game state.
     * @returns 'true' if the game is over
     */
    gameOver() {
        return (!this.gameInProgress);
    }
    /**
     * @desc Getter method for the amount of movements made in the game.
     * @returns movements
     */
    getMovements() {
        return (this.movements);
    }
}
