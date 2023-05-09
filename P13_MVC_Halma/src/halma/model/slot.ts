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
  public static readonly EMPTY_SLOT: Slot = new Slot(new Point2D(-1, -1), -1, -1);
  private occupied: boolean = false;
  private selected: boolean = false;  
  /**
   * @desc Create a new Slot object.
   * @param centerPoint
   * @param ROW - assigned row index
   * @param COLUMN - assigned column index
   */
  constructor(
    private centerPoint: Point2D,
    private readonly ROW: number,
    private readonly COLUMN: number) {
  }

  /** @desc Method to switch the selected state. */
  public clicked(): void {
    this.selected = !this.selected;
  }

  /** @desc Loads the slot. */
  public occupy(): void {
    this.occupied = true;
  }

  /** @desc Makes the slot empty. */
  public clear(): void {
    this.occupied = false;
  }

  /**
   * @desc Checks if the slot contains something
   * @return 'true' if occupied
   */
  public isOccupied(): boolean{    
    return(this.occupied);
  }

  /**
   * @desc Checks if the slot is clicked
   * @return 'true' if selected 
   */
  public isSelected(): boolean{    
    return(this.selected);
  }

  /**
   * @desc Getter method for the center point of the slot
   * @return slot center point
   */
  public getCenterPoint(): Point2D {    
    return(this.centerPoint);
  }

  /**
   * @desc Getter method for the assigned row
   * @return row index
   */
  public getRow(): number {    
    return(this.ROW);
  }

  /**
   * @desc Getter method for the assigned column
   * @return column index
   */
  public getColumn(): number {    
    return(this.COLUMN);
  }

  /**
   * @desc To string method to get a string with the information of the slot
   * @returns string with the row, column and occupied state
   */
  public toString(): string {
    return(`row: ${this.ROW}, column: ${this.COLUMN}, occupied: ${this.occupied}`);
  }
}