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
import { Cube } from './cube.js';
function main() {
    let cube = new Cube(400, 400, 0);
    cube.update();
}
main();
