/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 3 2023
 * @desc ModelBoard class
 */

/** @desc ModelBoard class. */
export class ModelBoard {
  private board: number[][] = []
  private MAXIMUM_SLOT_VALUE: number = 9;
  private readonly VALUE_RANGE: number[] = [];
  private readonly CHANCE_INCREASE: number = 10;
  private readonly SOLUTION_MINIMUM_APPEARANCES: number = 4;
  /**
  * @desc Create a new ModelBoard object 
  * @param ROWS
  * @param COLUMNS
  * @param specialNumber - a number with higher chance to appear
  */
  constructor(
    private readonly ROWS: number,
    private readonly COLUMNS: number,
    specialNumber?: number) {
      for (let value = 0; value <= this.MAXIMUM_SLOT_VALUE; ++value) {
        if ((specialNumber !== undefined) && (value == specialNumber)) {
          for (let i = 0; i < this.CHANCE_INCREASE; ++i) this.VALUE_RANGE.push(value);
        }
          
        this.VALUE_RANGE.push(value)
      }
      console.log(this.VALUE_RANGE)

      for (let rows = 0; rows < this.ROWS; ++rows) {
        this.board.push([]);
        for (let columns = 0; columns < this.COLUMNS; ++columns) {
          this.board[rows].push(this.VALUE_RANGE[Math.floor(Math.random() * this.VALUE_RANGE.length)]);
        }
      }
  }

  /**
   * @desc Search a solution for the board. That is a number appear 4 consecutive times horizontally, vertically or diagonally.
   * @returns indexes of these solution. An empty array if there is no solution.
   */
  public solveBoard(): number[][] {
    let solution: number[][] = [];
    for (let rows = 0; rows < this.ROWS; ++rows) {
      for (let columns = 0; columns < this.COLUMNS; ++columns) {
        solution = this.searchHorizontally(rows, columns);
        if (solution.length !== 0) return(solution);
        solution = this.searchVertically(rows, columns);
        if (solution.length !== 0) return(solution);
        solution = this.searchDiagonally(rows, columns);
        if (solution.length !== 0) return(solution);
      }
    }
    return(solution);
  }

  /**
   * @desc Search a solution horizontally
   * @param currentRow - row index from where to start
   * @param currentColumn - column index from where to start
   * @returns array of 2-tuple as row and column indexes
   */
  private searchHorizontally(currentRow: number, currentColumn: number): number[][] {
    let solution: number[][] = [];
    if (currentColumn > (this.COLUMNS - this.SOLUTION_MINIMUM_APPEARANCES)) return(solution);
    let solutionValue: number = this.board[currentRow][currentColumn];
    solution.push([currentRow, currentColumn]);
    for (let column = currentColumn + 1; column < this.COLUMNS; ++column) {
      if (this.board[currentRow][column] === solutionValue) {
        solution.push([currentRow, column]);
        if (solution.length === this.SOLUTION_MINIMUM_APPEARANCES) return(solution);
      }      
      else return([]);
    }
    return(solution);
  }

  /**
   * @desc Search a solution vertically
   * @param currentRow - row index from where to start
   * @param currentColumn - column index from where to start
   * @returns array of 2-tuple as row and column indexes
   */
   private searchVertically(currentRow: number, currentColumn: number): number[][] {
    let solution: number[][] = [];
    if (currentRow > (this.ROWS - this.SOLUTION_MINIMUM_APPEARANCES)) return(solution);
    let solutionValue: number = this.board[currentRow][currentColumn];
    solution.push([currentRow, currentColumn]);
    for (let row = currentRow + 1; row < this.ROWS; ++row) {
      if (this.board[row][currentColumn] === solutionValue) {
        solution.push([row, currentColumn]);
        if (solution.length === this.SOLUTION_MINIMUM_APPEARANCES) return(solution);
      }      
      else return([]);
    }
    return(solution);
  }

  /**
   * @desc Search a solution diagonally
   * @param currentRow - row index from where to start
   * @param currentColumn - column index from where to start
   * @returns array of 2-tuple as row and column indexes
   */
   private searchDiagonally(currentRow: number, currentColumn: number): number[][] {
    let solution: number[][] = [];
    if (currentRow > (this.ROWS - this.SOLUTION_MINIMUM_APPEARANCES)) return(solution);
    if (currentColumn > (this.COLUMNS - this.SOLUTION_MINIMUM_APPEARANCES)) return(solution);

    let solutionValue: number = this.board[currentRow][currentColumn];
    solution.push([currentRow, currentColumn]);

    for (let row = currentRow + 1, column = currentColumn + 1; row < this.ROWS, column < this.COLUMNS; ++row, ++column) {
      if (this.board[row][column] === solutionValue) {
        solution.push([row, column]);
        if (solution.length === this.SOLUTION_MINIMUM_APPEARANCES) return(solution);
      }      
      else return([]);
    }
    return(solution);
  }

  /**
   * @desc Getter method for the board values
   * @return board slots
   */
   public getBoard(): number[][] {
    return(this.board);
  } 

  /**
   * @desc Getter method for the board rows
   * @return number of rows
   */
  public getRows(): number {
    return(this.ROWS);
  }  

  /**
   * @desc Getter method for the board columns
   * @return number of columns
   */
   public getColumns(): number {
    return(this.COLUMNS);
  } 
}