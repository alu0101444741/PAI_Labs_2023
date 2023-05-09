/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 11 2023
 * @desc TicTacToe class
 * @module tictactoe
 */

import { question } from 'readline-sync';

 /** @desc TicTacToe class */
 export class TicTacToe {
    private readonly BOARD_SIZE: number = 3;
    private board: string[][] = [];
    private readonly EMPTY: string = '';
    private readonly PLAYER_ONE: string = 'X';
    private readonly PLAYER_TWO: string = 'O';
    private currentPlayer: string = this.PLAYER_ONE;
    private winner: string = '';
    /** @desc TicTacToe class constructor */
    constructor() {
      for (let row = 0; row < this.BOARD_SIZE; ++row) {
        this.board.push([]);
        for (let column = 0; column < this.BOARD_SIZE; ++column) {
          this.board[row].push(this.EMPTY);
        }        
      }    
    }

    /** @desc Starts the game loop of the TicTacToe */
    startGame(): void {
      let row: number = -1, column: number = -1;
      while(!this.finished()) {
        console.log(this.toString());
        console.log('Player ' + this.currentPlayer + ' choose your location:');
        let validInput: boolean = false;
        while(!validInput) {
          row = Number(question('Row: '));
          column = Number(question('Column: '));
          if (!this.validLocation(row, column)) {
            console.log('Not a valid location. Try again.');
            continue;
          }
          else if (this.slotAlreadyPlayed(row, column)) {
            console.log('Slot already full. Try again');
            continue;
          }
          validInput = true;
        }
        this.play(row, column);
      }
      console.log(this.toString());
      if (this.winner.length === 0)
        console.log('The game is a tie');
      else
        console.log(`The winner is:  '${this.winner}'`);
    }
  
    /**
     * @desc Play move. Given a row and a column, the current player writes on a slot.
     * @param row - row of the slot
     * @param column - column of the slot
     */
    private play(row: number, column: number): void {
      this.board[row][column] = this.currentPlayer;
      this.currentPlayer = (this.currentPlayer === this.PLAYER_ONE) ? this.PLAYER_TWO : this.PLAYER_ONE;
      this.checkBoard();
    }
  
    /**
     * @desc 
     */
    checkBoard(): void {
      for (let row = 0; row < this.BOARD_SIZE; ++row) {
        if ((this.board[row][0] === this.board[row][1]) && (this.board[row][0] === this.board[row][2])) {
          this.winner = this.board[row][0];
          break;
        }
      }
      if (this.winner.length === 0) {
        for (let column = 0; column < this.BOARD_SIZE; ++column) {
          if ((this.board[0][column] === this.board[1][column]) && (this.board[0][column] === this.board[2][column])) {
            this.winner = this.board[0][column];
            break;
          }
        }
      }
      if ((this.winner.length === 0) && ((this.board[0][0] === this.board[1][1]) && (this.board[0][0]  === this.board[2][2]))) this.winner = this.board[0][0];
      if ((this.winner.length === 0) && ((this.board[0][2] === this.board[1][1]) && (this.board[0][2]  === this.board[2][0]))) this.winner = this.board[0][2];
    }

    /**
     * @desc Check if the game is finished. The board is full or there is already a winner.
     * @returns 'true' if the game is over
     */
    finished(): boolean {
      return((this.winner.length !== 0) || this.boardFull())
    }

    /**
     * @desc Check if the board is full. Will not be full if one of the slots has an X or O.
     * @returns 'true' if all slots contains an X or an O.
     */
    boardFull(): boolean {
      for (let row = 0; row < this.BOARD_SIZE; ++row) {
        for (let column = 0; column < this.BOARD_SIZE; ++column) {
          if (this.board[row][column] === this.EMPTY) return(false)
        }        
      }
      
      return(true);
    }

    /**
     * @desc Check if a given board index is valid.
     * Both row and column indexes must be an integer between 0 and 3.
     * @param row - row value to check
     * @param column - column value to check
     * @returns 'true' if the given location is valid
     */
    validLocation(row: number, column: number): boolean {
      return(!(Number.isNaN(row)) &&
             !(Number.isNaN(column)) && 
             ((row >= 0) && (row < this.BOARD_SIZE)) &&
             ((column >= 0) && (column < this.BOARD_SIZE)));
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
     * @desc Método para obtener una cadena con la información del tablero
     * @return cadena
     */
    toString(): string {
      let information: string = '';
      for (let row = 0; row < this.BOARD_SIZE; ++row) {      
        for (let column = 0; column < this.BOARD_SIZE; ++column) {
          if (this.board[row][column].length === 0)
            information += ('  ');
          else
            information += (' ' + this.board[row][column]);    
        }
        information += '\n';
      }
      return(information);
    }

    /**
     * @desc Getter method for the current player.
     * @returns current player symbol
     */
    getCurrentPlayer(): string {
      return(this.currentPlayer);
    }

    /**
     * @desc Getter method for the winner.
     * @returns winner symbol
     */
    getWinner(): string {
      return(this.winner);
    }
  }