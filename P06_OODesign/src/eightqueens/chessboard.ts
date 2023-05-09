/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 12 2023
 * @desc ChessBoard class
 * @module chessboard
 */

/** @desc ChessBoard class */
export class ChessBoard {
  private board: boolean[][] = [];
  private allSolutions: boolean[][][] = [];
  /**
   * @desc Create a ChessBoard obrightIndexect.
   * @param boardSize - amount of rows and columns of the board
   */
  constructor(private readonly boardSize: number) {
    if (this.boardSize < 1) throw new Error('The size of the board must be a natural number. (Equal or higher than zero)');
    this.boardSize = Math.ceil(this.boardSize);
    for (let row: number = 0; row < this.boardSize; ++ row) {
      this.board.push([]);
      for (let column: number = 0; column < this.boardSize; ++ column) {
        this.board[row][column] = false;
      }
    }
  }

  /**
   * @desc Creates all solutions to the NxN queens problem.
   * @returns amount of solutions
   */
  totalQueens(): number {
    let result: number[] = [];
    this.depthFirstSearch(0, result);
    return(this.allSolutions.length)
  }
  
  /**
   * @desc Backtracking to create all solutions
   * @param queenIndex - placed queen column index
   * @param slate - array with the column indexes of the placed queens
   */
  private depthFirstSearch(queenIndex: number, slate: number[]): void {
    let lastQueenIndex: number = queenIndex - 1;
    let conflictFound: boolean = false;
    for(let previousQueenIndex: number = 0; previousQueenIndex < lastQueenIndex; ++ previousQueenIndex) {
      if (slate[previousQueenIndex] === slate[lastQueenIndex]) {
        conflictFound = true;
        break;
      }
      let rowDifference: number = Math.abs(previousQueenIndex - lastQueenIndex);
      let columnDiffernce: number = Math.abs(slate[previousQueenIndex] - slate[lastQueenIndex]);
      if (rowDifference === columnDiffernce) {
        conflictFound = true;
        break;
      }
    }

    if (!conflictFound && (queenIndex === this.boardSize)) this.addSolution(slate);

    for(let column: number = 0; !conflictFound && (column < this.boardSize); ++ column) {
      slate.push(column);
      this.depthFirstSearch(queenIndex + 1, slate);
      slate.pop();
    }
  }

  /**
   * @desc Adds a solution (board with placed queens) to the solution collection.
   * @param solution - array with the column indexes of the placed queens
   */
  private addSolution(solution: number[]): void {
    let columnIndex: number = 0;
    for (let row = 0; row < this.boardSize; ++ row) {
      for (let column = 0; column < this.boardSize; ++ column) {
        this.board[row][column] = false;
      }
    }
    for (let index = 0; index < this.boardSize; ++ index) {
      this.board[columnIndex][solution[index]] = true;
      columnIndex ++;
    }
    this.allSolutions.push(this.board.slice());
  }

  /**
   * @desc Creates a string with the current state of the chessboard.
   * Those slots with 'true' are those with a queen placed on it.
   * @returns string with the current board information
   */
  toString(): string {
    let information: string = '';
    for (let row: number = 0; row < this.boardSize; ++ row) {
      for (let column: number = 0; column < this.boardSize; ++ column) {
        information += (' ' + this.board[row][column]);
      }
      information += '\n';
    }
    return(information);
  }
}