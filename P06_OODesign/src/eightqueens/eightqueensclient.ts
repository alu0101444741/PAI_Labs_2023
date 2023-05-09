/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 12 2023
 * @desc Client for the 8-Queens problem
*/

import { ChessBoard } from './chessboard';

function main(): void {
  let chessBoard: ChessBoard = new ChessBoard(1);
  console.log(chessBoard.totalQueens());
}
main();