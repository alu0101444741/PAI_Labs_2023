/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 11 2023
 * @desc Chart class
 */

import { CanvasView } from "../utilities/canvasview.js";

/** @desc Chart class */
export abstract class MyChart extends CanvasView {  
  protected readonly DATA: object[] = [];
  /** 
   * @desc Create a new BarChart object
   * @param DATA - dataset on a object
   */
  protected constructor(DATA: object) {
    super();
    console.log('The data');
    this.DATA = [...Object.entries(DATA)[0][1]];
  }

  /** @desc Draw method for the chart */
  public abstract update(): void;   
}