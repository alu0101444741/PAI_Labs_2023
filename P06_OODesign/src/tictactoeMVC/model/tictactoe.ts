/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 11 2023
 * @desc TicTacToe class
 * @module tictactoe-model
 */

 /** @desc TicTacToe class */
export class TicTacToe {
  private board: string[][] = [];
  private readonly EMPTY: string = ' ';
  private readonly PLAYER_ONE: string = 'X';
  private readonly PLAYER_TWO: string = 'O';
  private currentPlayer: string = this.PLAYER_ONE;
  //private winner: string = '';
  /**
   * @desc Constructor de la clase TicTacToe.
   * Se trata de un tablero N x M casillas.
   * @param rows - filas
   * @param columns - columnas
   */
  constructor(    
    private rows: number,
    private columns: number) {
    for (let row = 0; row < rows; ++row) {
      this.board.push([]);
      for (let column = 0; column < columns; ++column) {
        this.board[row].push(this.EMPTY);
      }        
    }    
  }

  /**
   * @desc Play move. Given a row and a column, the current player writes on a slot.
   * @param row - row of the slot
   * @param column - column of the slot
   */
  play(row: number, column: number): void {
    this.board[row][column] = this.currentPlayer;
    this.currentPlayer = (this.currentPlayer === this.PLAYER_ONE) ? this.PLAYER_TWO : this.PLAYER_ONE;
  }

  /**
   * @desc Checks if a slot is not empty
   * @param row - row of the slot
   * @param column - column of the slot
   * @returns 'true' if slot is not empty
   */
  slotAlreadyPlayed(row: number, column: number): boolean {
    return(this.board[row][column] !== this.EMPTY);
  }

  /**
   * @desc Getter method for the current player.
   * @returns current player symbol
   */
  getCurrentPlayer(): string {
    return(this.currentPlayer);
  }

  /**
   * @desc 
   * @return 
   */
  /*#checkBoard() {
    for (let rows = 0; rows < this.rows; ++rows) {  
      for (let columns = 0; columns < this.columns; ++columns) {
        if ((this.board.slots[rows][columns].objectContained !== 'bomb') && !(this.slotRevealed(rows, columns))) {
          return(false);
        }
      }
    }
    return(true);
  }*/

  /**
   * @desc Método getter para obtener el estado del tablero
   * @return cantidad de filas
   */
  getRows() {
    return(this.rows);
  }

  /**
   * @desc Método getter para obtener el estado del tablero
   * @return cantidad de filas
   */
  getColumns() {
    return(this.columns);
  }

  /**@desc Método para obtener una cadena con la información del tablero
   * @return cadena
   */
  toString(): string {
    let information: string = '';
    for (let row = 0; row < this.rows; ++row) {      
      for (let column = 0; column < this.columns; ++column) {
        information += (' ' + this.board[row][column]);       
      }
      information += '\n';
    }
    return(information);
  }

  /**
   * @desc Método para actualizar la altura y anchura para adecuarse a las del canvas.
   * @param height - nueva altura del canvas
   * @param width - nueva anchura del canvas
   */
  /*updateDimensions(height, width) {
    this.height = height;
    this.width = width;
    this.#pieceHeight = this.height / PUZZLE_DIMENSION;
    this.#pieceWidth = this.width / PUZZLE_DIMENSION;
    this.board.updateDimensions(this.height, this.width);
    
    for (let rows = 0; rows < this.#pieces; ++rows) {  
      for (let columns = 0; columns < this.#pieces; ++columns) {
        this.board.setPiece(rows, columns, new PuzzlePiece(this.#image.src, this.#pieceHeight, this.#pieceWidth, rows * this.#pieceHeight, columns * this.#pieceWidth));
      }
    }
    this.board.deletePiece(this.#emptySpacePosition.coordinateY, this.#emptySpacePosition.coordinateX);
  }*/
}