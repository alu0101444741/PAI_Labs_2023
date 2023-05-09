/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 1 2023
 * @desc Client program for the bouncing ball
*/
import { MovingObjectController } from '../controller/controller.js';
import { AnimationView } from '../view/animationview.js';
function main() {
    let scene = new AnimationView();
    let controller = new MovingObjectController(scene);
    scene.update();
}
main();
