/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 12 2023
 * @desc Client program for the Poker game
*/

import { PokerController } from '../controller/pokercontroller.js';
import { PokerView } from '../view/pokerview.js';
import { PokerGame } from './pokergame.js';

function main() {
  let pokerGame: PokerGame = new PokerGame();
  let scene = new PokerView(pokerGame);
  let controller = new PokerController(scene, pokerGame);
  scene.update();
}
main();