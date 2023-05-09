
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

import { TenerifeTouristsLinechart } from './tenerifetourists.js';

async function main(): Promise<void> {  
  const DATA: object[] = await logJSONData(/*'../barchart/tourism2019.json'*/ 'https://datos.tenerife.es/ckan/dataset/4a803657-75ec-4e78-b123-b9f4749199cb/resource/38bbc40a-a007-4379-819d-2cef95787f7e/download/turistasalojadossantacruz.json');
  let tenerifeTourists: TenerifeTouristsLinechart = new TenerifeTouristsLinechart(DATA, 0, 12000, 2009, 2019, 'Tourists visiting Tenerife (2010-2019)');
  tenerifeTourists.update();
}
main();

interface PopulationData {
  Year: number;
  Age: string;
  Male: number;
  Female: number;
}

async function fetchPopulationData(): Promise<PopulationData[]> {
  const RESPONSE = await fetch('/data');
  const json = await RESPONSE.json();
  return json;
}

async function logJSONData(path: string): Promise<object[]> {
  const response = await fetch(path);
  const jsonData = await response.json();
  return(jsonData['DATOS']);
}