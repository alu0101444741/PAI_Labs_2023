/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 08 2023
 * @desc BarChart class
 */

import { CanvasView } from "../utilities/canvasview.js";
import { Point2D } from "../utilities/point2d.js";

/** @desc BarChart class */
export abstract class BarChart extends CanvasView {
  protected axisYName!: string;
  protected axisXName!: string;  
  protected axisYValues: number[] = [];
  protected axisXValues: number[] = [];
  /**
   * @desc BarChart constructor
   * @param DATA - data as an object
   * @param minimumYValue
   * @param maximumYValue 
   */
  protected constructor(
    protected DATA: object[],
    protected minimumYValue: number,
    protected maximumYValue: number) {
    super();
  }

  /** @desc Draw method for the bar chart */
  public update(): void {
    this.drawBars();
    this.drawTags();
    this.drawAxis();        
  }  

  /** @desc Draw the chart bars */
  protected drawBars(): void {
    let normalizedValues: number[] = this.normalizeValues();    
    let widthSlotSize: number = (this.WIDTH - this.BORDER_SPACE * 2) / this.axisXValues.length;
    let barWidth: number = widthSlotSize / 2;    
    let gradient = this.CONTEXT.createLinearGradient(0, 0, 0, 800);
    gradient.addColorStop(0, "cyan");
    gradient.addColorStop(1, "blue");    
    for (let width = this.BORDER_SPACE + widthSlotSize / 2, i = 0; width < this.WIDTH - this.BORDER_SPACE, i < this.axisXValues.length; width += widthSlotSize, ++i) {
      this.CONTEXT.fillStyle = gradient;  
      this.CONTEXT.fillRect(width - barWidth / 2, this.HEIGHT - this.BORDER_SPACE, barWidth, -normalizedValues[i]);
      this.drawText(new Point2D(width, this.HEIGHT - this.BORDER_SPACE - normalizedValues[i] - 10), this.axisYValues[i].toString(), 15, 'black')
    }     
  }

  /** @desc Draw chart axis. */
  protected drawAxis(): void {
    this.CONTEXT.strokeStyle = 'black'; 
    this.CONTEXT.lineWidth = 3;
    let bottomLeftPoint = new Point2D(this.BORDER_SPACE, this.HEIGHT - this.BORDER_SPACE);
    this.drawLine(bottomLeftPoint, new Point2D(this.WIDTH - this.BORDER_SPACE, this.HEIGHT - this.BORDER_SPACE));
    this.drawLine(bottomLeftPoint, new Point2D(this.BORDER_SPACE, this.BORDER_SPACE));
    this.drawText(new Point2D(this.BORDER_SPACE, this.BORDER_SPACE / 2), this.axisXName, 20, 'black'); 
    this.drawText(new Point2D(this.WIDTH - this.BORDER_SPACE / 2, this.HEIGHT - this.BORDER_SPACE), this.axisYName, 20, 'black');
  }

  /** @desc Draw chart tags. */
  protected drawTags(): void {    
    let widthSlotSize: number = (this.WIDTH - this.BORDER_SPACE * 2) / this.axisXValues.length;
    let heightSlotSize: number = (this.HEIGHT - this.BORDER_SPACE * 2) / this.axisXValues.length;
    for (let width = this.BORDER_SPACE + widthSlotSize / 2, i = 0; width < this.WIDTH - this.BORDER_SPACE, i < this.axisXValues.length; width += widthSlotSize, ++i) {
      this.drawPoint(new Point2D(width, this.HEIGHT - this.BORDER_SPACE), 'black');
      this.drawText(new Point2D(width, this.HEIGHT - this.BORDER_SPACE / 2), this.axisXValues[i].toString(), 20, 'red', -45);
    }    
    let currentValue: number = 0;
    let increase: number = this.maximumYValue / this.axisYValues.length;
    for (let height = this.HEIGHT - this.BORDER_SPACE; height >= this.BORDER_SPACE; height -= heightSlotSize) {
      this.drawText(new Point2D(this.BORDER_SPACE / 2, height), currentValue.toFixed(0), 15, 'black', -45);
      this.drawText(new Point2D(this.BORDER_SPACE, height), '-', 20, 'black');
      currentValue += increase;
    }
  }

  /** @desc Normalize the Y-axis values to a given range */
  private normalizeValues(): number[] {
    let normalizedValues: number[] = [];
    let maximum: number = this.maximumYValue;
    let minimum: number = this.minimumYValue;
    if ((this.maximumYValue === 0) && (this.minimumYValue === 0)) {
      maximum = -Infinity;
      minimum = Infinity;
      for (const value of this.axisYValues) {
        if (value > maximum) maximum = value;
        if (value < minimum) minimum = value;
      }
      minimum - (maximum - minimum);
    }    
    for (const value of this.axisYValues) normalizedValues.push(((value - minimum)/(maximum - minimum)) * (this.HEIGHT - this.BORDER_SPACE * 2));
    return(normalizedValues);
  }
}