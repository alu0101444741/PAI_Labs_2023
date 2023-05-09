/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 12 2023
 * @desc Tests the ChessBoard class
 *       
 */

import { ChessBoard } from './chessboard';

describe('ChessBoard', () => {
  /*test('Size < 1 throws an error', () => {
    let errorMessage: Error = new Error ('The size of the board must be a natural number. (Equal or higher than zero)');
    expect(new ChessBoard(0.9)).toThrow(errorMessage);
    expect(new ChessBoard(0)).toThrow(errorMessage);
    expect(new ChessBoard(-0.3)).toThrow(errorMessage);
    expect(new ChessBoard(-35)).toThrow(errorMessage);
  });*/
  test('Size = 1 has one solution', () => {
    let chessBoard: ChessBoard = new ChessBoard(1);
    expect(chessBoard.totalQueens()).toBe(1);
  });
  test('Size = 2 has no solution', () => {
    let chessBoard: ChessBoard = new ChessBoard(2);
    expect(chessBoard.totalQueens()).toBe(0);
  });
  test('Size = 3 has no solution', () => {
    let chessBoard: ChessBoard = new ChessBoard(3);
    expect(chessBoard.totalQueens()).toBe(0);
  });
  test('Size = 4 has two solutions', () => {
    let chessBoard: ChessBoard = new ChessBoard(4);
    expect(chessBoard.totalQueens()).toBe(2);
  });
  test('Size = 8 has 92 solutions', () => {
    let chessBoard: ChessBoard = new ChessBoard(8);
    expect(chessBoard.totalQueens()).toBe(92);
  });
  test('Size = 11 has 2680 solutions', () => {
    let chessBoard: ChessBoard = new ChessBoard(11);
    expect(chessBoard.totalQueens()).toBe(2680);
  });
});