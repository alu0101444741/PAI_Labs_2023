
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 08 2023
 * @desc Client program for BarChart class
*/

import { BarChart } from './barchart.js';

function main(): void {
  let barchart: BarChart = new BarChart(JSON.parse(JSON.stringify('../../web-server/tourism2019.JSON')));
  barchart.update();
}
main();