/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 11 2023
 * @desc TouristsIncreaseChart class
 */

import { BarChart } from "./barchart.js";

/** @desc TouristsIncreaseChart class. Extends BarChart class */
export class TouristsIncreaseChart extends BarChart {
  /** 
   * @desc Create a new TouristsIncreaseChart object
   * @param DATA - data as an object
   * @param minimumYValue
   * @param maximumYValue 
   * @param startYear - from which year must start
   * @param endYear - last year to show on the chart
   */
  constructor(
    protected DATA: object[],
    protected minimumYValue: number,
    protected maximumYValue: number,
    startYear: number,
    endYear: number) {
    super(DATA, maximumYValue, minimumYValue);
    this.axisYName = 'Year';
    this.axisXName = 'Tourists';
    // console.log(this.DATA);
    this.initializeData(startYear, endYear);
  } 

  /** 
   * @desc Initialize the values on both axis of the chart.
   * @param startYear - from which year must start
   * @param endYear - last year to show on the chart
   */
  private initializeData(startYear: number, endYear: number): void {
    let years: number[] = [];
    let tourists: number[] = [];
    for (let i = startYear; i <= endYear; ++i) {
      tourists.push(0);
      years.push(i);
    }
    let anObject = this.DATA[0];
    type ObjectKey = keyof typeof anObject;
    let propertyNation = 'nacion' as ObjectKey;
    let year = 'anio' as ObjectKey;
    let totalTourists = 'total' as ObjectKey;
    for (const data of this.DATA) {      
      if (data[propertyNation] === 'TOTAL') {
        for (let i = 0; i < years.length; ++i) {
          if (years[i] === Number(data[year])) {
            tourists[i] = Number(data[totalTourists]);
            break;
          }
        }
      }
    }
    this.axisXValues = [...years];
    this.axisYValues = [...tourists];
  }
}