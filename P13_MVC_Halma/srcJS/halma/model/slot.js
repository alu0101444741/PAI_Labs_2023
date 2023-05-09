/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 4 2023
 * @desc Slot class
 */
import { Point2D } from '../view/point2d.js';
/** @desc Slot class */
export class Slot {
    /**
     * @desc Create a new Slot object.
     * @param centerPoint
     * @param ROW - assigned row index
     * @param COLUMN - assigned column index
     */
    constructor(centerPoint, ROW, COLUMN) {
        this.centerPoint = centerPoint;
        this.ROW = ROW;
        this.COLUMN = COLUMN;
        this.occupied = false;
        this.selected = false;
    }
    /** @desc Method to switch the selected state. */
    clicked() {
        this.selected = !this.selected;
    }
    /** @desc Loads the slot. */
    occupy() {
        this.occupied = true;
    }
    /** @desc Makes the slot empty. */
    clear() {
        this.occupied = false;
    }
    /**
     * @desc Checks if the slot contains something
     * @return 'true' if occupied
     */
    isOccupied() {
        return (this.occupied);
    }
    /**
     * @desc Checks if the slot is clicked
     * @return 'true' if selected
     */
    isSelected() {
        return (this.selected);
    }
    /**
     * @desc Getter method for the center point of the slot
     * @return slot center point
     */
    getCenterPoint() {
        return (this.centerPoint);
    }
    /**
     * @desc Getter method for the assigned row
     * @return row index
     */
    getRow() {
        return (this.ROW);
    }
    /**
     * @desc Getter method for the assigned column
     * @return column index
     */
    getColumn() {
        return (this.COLUMN);
    }
    /**
     * @desc To string method to get a string with the information of the slot
     * @returns string with the row, column and occupied state
     */
    toString() {
        return (`row: ${this.ROW}, column: ${this.COLUMN}, occupied: ${this.occupied}`);
    }
}
Slot.EMPTY_SLOT = new Slot(new Point2D(-1, -1), -1, -1);
