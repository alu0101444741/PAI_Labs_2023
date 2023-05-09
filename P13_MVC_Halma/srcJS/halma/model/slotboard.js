/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 4 2023
 * @desc SlotBoard class
 */
import { Point2D } from '../view/point2d.js';
import { Slot } from './slot.js';
/** @desc SlotBoard class */
export class SlotBoard {
    /**
     * @desc Create a new Slot object.
     * @param ROWS
     * @param COLUMNS
     * @param slotHeight
     * @param slotWidth
     */
    constructor(ROWS, COLUMNS, slotHeight, slotWidth) {
        this.ROWS = ROWS;
        this.COLUMNS = COLUMNS;
        this.slotHeight = slotHeight;
        this.slotWidth = slotWidth;
        this.slots = [];
        this.slotsOnArray = [];
        for (let row = 0; row < this.ROWS; ++row) {
            this.slots.push([]);
            for (let column = 0; column < this.COLUMNS; ++column) {
                let newSlot = new Slot(new Point2D(((column + 1) * slotWidth) - slotWidth / 2, ((row + 1) * slotHeight) - slotHeight / 2), row, column);
                this.slots[row].push(newSlot);
                this.slotsOnArray.push(newSlot);
            }
        }
    }
    /**
     * @desc Checks if two given slots are contiguous.
     * @param firstSlot
     * @param secondSlot
     * @returns 'true' if they are contiguous.
     */
    contiguousSlots(firstSlot, secondSlot) {
        if ((firstSlot === Slot.EMPTY_SLOT) || (secondSlot === Slot.EMPTY_SLOT))
            return (false);
        return ((Math.abs(firstSlot.getRow() - secondSlot.getRow()) <= 1) &&
            (Math.abs(firstSlot.getColumn() - secondSlot.getColumn()) <= 1));
    }
    /**
     * @desc Getter method for the slots of the board on a 1D array
     * @return board slots
     */
    getSlots() {
        return (this.slotsOnArray);
    }
    /**
     * @desc Getter method for the rows number of the board
     * @return board rows
     */
    getRows() {
        return (this.ROWS);
    }
    /**
     * @desc Getter method for the columns number of the board
     * @return board columns
     */
    getColumns() {
        return (this.COLUMNS);
    }
}
