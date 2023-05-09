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

import { Point2D } from "../utilities/point2d.js";
import { LineChart } from "./linechart.js";

/** @desc TenerifeTouristsChart class. Extends LineChart class */
export class TenerifeTouristsLinechart extends LineChart {
  private nations: string[] = [];
  /** 
   * @desc Create a new TouristsIncreaseChart object
   * @param DATA - data as an object
   * @param minimumYValue
   * @param maximumYValue 
   * @param startYear - from which year must start
   * @param endYear - last year to show on the chart
   * @param title
   */
  constructor(
    protected DATA: object[],
    protected minimumYValue: number,
    protected maximumYValue: number,
    startYear: number,
    endYear: number,
    protected title: string) {
    super(DATA, maximumYValue, minimumYValue, title);
    this.axisYName = 'Year';
    this.axisXName = 'Tourists';
    this.initializeData(startYear, endYear);
  } 

  /** @desc Draw method for the bar chart */
  public update(): void {
    this.drawLines();
    this.drawTags();
    this.drawAxis();
    this.drawTitle(this.title);
    this.drawHelp();  
  } 

  /** 
   * @desc Initialize the values on both axis of the chart.
   * @param startYear - from which year must start
   * @param endYear - last year to show on the chart
   */
  private initializeData(startYear: number, endYear: number): void {       
    this.initializeNations();
    for (const nation of this.nations) this.points.push([]);
    let years: number[] = [];
    let tourists: number[][] = [];
    let zeroArray: number[] = [];    
    for (let i = startYear; i <= endYear; ++i) years.push(i);
    for (let i = 0; i < years.length; ++i) zeroArray.push(0);
    for (let index = 0; index < this.nations.length; ++index) tourists.push([...zeroArray]);
    console.log(tourists)
    let anObject = this.DATA[0];
    type ObjectKey = keyof typeof anObject;
    let propertyNation = 'nacion' as ObjectKey;
    let year = 'anio' as ObjectKey;
    let totalTourists = 'total' as ObjectKey;

    for (const data of this.DATA) {
      let dataFound: boolean = false;
      for (let nationIndex = 0; (nationIndex < this.nations.length) && !dataFound; ++nationIndex) {
        if (data[propertyNation] === this.nations[nationIndex]) {
          for (let yearIndex = 0; (yearIndex < years.length )&& !dataFound; ++yearIndex) {
            if (years[yearIndex] === Number(data[year])) {
              if (tourists[nationIndex][yearIndex] < Number(data[totalTourists])) tourists[nationIndex][yearIndex] = Number(data[totalTourists]);
            }
          }
        }
      }      
    }
    this.axisXValues = [...years];
    this.axisYValues = tourists;
  }

  /** @desc Draw colors assigned to lines */
  private drawHelp(): void {
    for (let i = 0; i < this.axisYColors.length; ++i) {
      this.CONTEXT.fillStyle = this.axisYColors[i];
      this.CONTEXT.fillRect(this.WIDTH - this.BORDER_SPACE * 2, (this.BORDER_SPACE / 2) * (i + 1) , 10, 10);
      this.drawText(new Point2D(this.WIDTH - this.BORDER_SPACE, ((this.BORDER_SPACE / 2) * (i + 1)) + 5), this.nations[i], 10, 'black');
    }
  }

  /**
   * @desc Search for every nation (or group of it) identifier
   * @returns array of identifiers
   */
  private initializeNations(): void {
    let anObject = this.DATA[0];
    type ObjectKey = keyof typeof anObject;
    let propertyNation = 'nacion' as ObjectKey;
    let lineColorHex: number = 152535;
    let lineColor: string = `#${lineColorHex}`;
    let index: number = 0;
    for (const data of this.DATA) {      
      if (!this.nations.includes(data[propertyNation]) && (data[propertyNation] !== 'TOTAL')) {
        this.nations.push(data[propertyNation]);
      }
    }
    this.nations.shift();
    console.log(this.nations);
  }
}