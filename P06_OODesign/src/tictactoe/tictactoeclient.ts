/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 11 2023
 * @desc Client for the TicTacToe game
*/

import { TicTacToe } from './tictactoe';

function main(): void {  
  let tictactoe: TicTacToe = new TicTacToe();
  tictactoe.startGame();
}
main();