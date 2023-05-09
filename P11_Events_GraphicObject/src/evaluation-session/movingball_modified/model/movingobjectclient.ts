/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 25 2023
 * @desc Client program for the moving object
*/

import { MovingObjectController } from '../controller/controller.js';
import { AnimationView } from '../view/animationview.js';

function main() {
  let scene = new AnimationView(10);
  let controller = new MovingObjectController(scene);
  scene.update();
}
main();