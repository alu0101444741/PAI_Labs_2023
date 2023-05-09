/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc Client program for ConvexhullAnimation class
*/
import { ConvexhullAnimation } from './convexhullanimation.js';
function main() {
    let convexhullAnimation = new ConvexhullAnimation(Number(prompt('How many points to draw?')), 1);
    convexhullAnimation.update();
}
main();
