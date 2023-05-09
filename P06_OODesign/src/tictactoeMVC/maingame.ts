/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 11 2023
 * @desc Programa principal para probar el funcionamiento
*/

import { TicTacToeController } from './controller/tictactoecontroller';
import { TicTacToeView } from './view/tictactoeview';
import { TicTacToe } from './model/tictactoe';

const CANVAS: HTMLCanvasElement = document.getElementById('mainCanvas') as HTMLCanvasElement;

/** @desc Función main*/
function main() {  
  console.log('Starting...');
  let model = new TicTacToe(3, 3);
  let view = new TicTacToeView(CANVAS);  
  let controller = new TicTacToeController(view, model);
  console.log('MVC created...', controller.checkListener());
  view.update();
}
main();