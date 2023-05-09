/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc Client program for QuickhullAnimation class
*/

import { QuickhullAnimation } from './quickhullanimation.js';

function main(): void {
  let quickhullAnimation: QuickhullAnimation = new QuickhullAnimation(Number(prompt('How many points to draw?')), 500);
  quickhullAnimation.update();
}
main();