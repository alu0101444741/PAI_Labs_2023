
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

import { TouristsIncreaseChart } from './touristsincrease.js';

async function main(): Promise<void> {  
  const DATA: object[] = await logJSONData();
  let populationIncreaseChart: TouristsIncreaseChart = new TouristsIncreaseChart(DATA, 0, 500000, 2010, 2019);
  populationIncreaseChart.update();
}
main();

async function logJSONData(): Promise<object[]> {
  const response = await fetch('../barchart/tourism2019.json');
  const jsonData = await response.json();
  return(jsonData['DATOS']);
}