/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 11 2023
 * @desc Clase SlotBoard2D
 * @module slot-board-2d
 */

import { Slot2D } from './slot2d';

export class SlotBoard2D {
  private slots: Slot2D[][];

  /**
   * @desc Constructor de la clase SlotBoard2D.
   * @param height - altura máxima (eje x)
   * @param width - anchura máxima (eje y)
   * @param rows - filas
   * @param columns - columnas
   */
  constructor(
    private height: number,
    private width: number,
    private rows: number,
    private columns: number) {
    this.slots = [];
    let slotWidth: number = this.width / this.columns;
    let slotHeight: number = this.height / this.rows;

    let slotCoordinateX: number = 0;
    let slotCoordinateY: number = 0;
    for (let rows: number = 0; rows < this.rows; ++ rows) {
      this.slots.push([]);
      for (let columns: number = 0; columns < this.columns; ++ columns) {
        this.slots[rows].push(new Slot2D(slotCoordinateX, slotCoordinateY, slotWidth, slotHeight))
        slotCoordinateX += slotWidth;
      }
      slotCoordinateY += slotHeight;
      slotCoordinateX = 0;
    }    
  }

  /**
   * @desc Método para asignar un objeto a una casilla del tablero.
   * @param row - fila
   * @param column - columna
   * @param object - pieza a asignar
   */
  setObject(row: number, column: number, object: string): void {
    this.slots[row][column].setObject(object);
  }

  /**
   * @desc Método para eliminar un objeto de una casilla del tablero.
   * @param row - fila
   * @param column - columna
   */
  deleteObject(row: number, column: number): void {
    this.slots[row][column].deleteObject();
  }
  
  /**
   * @desc Método getter para obtener una de las casillas del tablero
   * @param row - fila
   * @param column - columna
   * @return casilla solicitada
   */
  getSingleSlot(row: number, column: number): Slot2D {
    return(this.slots[row][column]);
  }

  /**
   * @desc Método getter para obtener la matriz de casillas
   * @return matriz de casillas
   */
  getSlots(): Slot2D[][] {
    return(this.slots);
  }

  /**
   * @desc Método getter para obtener la cantidad de filas del tablero
   * @return filas del tablero
   */
  getRows(): number {
    return(this.rows);
  }

  /**
   * @desc Método getter para obtener la cantidad de columnas del tablero
   * @return columnas del tablero
   */
  getColumns(): number {
    return(this.columns);
  }

  /**
   * @desc Método para actualizar la altura y anchura para adecuarse a las del canvas.
   * @param height - nueva altura
   * @param width - nueva anchura
   */
  /* updateDimensions(height, width) {
    this.#height = height;
    this.#width = width;
    let slotWidth = this.#width / PUZZLE_DIMENSION;
    let slotHeight = this.#height / PUZZLE_DIMENSION;
    for (let rows = 0; rows < PUZZLE_DIMENSION; ++ rows) {
      for (let columns = 0; columns < PUZZLE_DIMENSION; ++ columns) {
        this.#slots[rows][columns] = new Slot2D(rows * slotHeight, columns * slotWidth, slotWidth, slotHeight);
      }
    }
  }*/
}