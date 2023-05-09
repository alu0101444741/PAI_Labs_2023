/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 12 2023
 * @desc LineChart class
 */

import { CanvasView } from "../utilities/canvasview.js";
import { Point2D } from "../utilities/point2d.js";

/** @desc LineChart class */
export abstract class LineChart extends CanvasView {
  protected axisYName!: string;
  protected axisXName!: string;  
  protected axisYValues: number[][] = [];
  protected axisXValues: number[] = [];
  protected points: Point2D[][] = [];
  protected axisYColors: string[] = 
  ['Aqua', 'Aquamarine', 'Blue', 'Chocolate', 'Beige', 'Azure', 
  'Brown', 'CadetBlue', 'BlueViolet', 'Cyan', 'Crimson', 'Coral',
  'DarkRed', 'DarkMagenta', 'DarkSalmon', 'DeepPink', 'ForestGreen', 'Gold',
'Fuchsia', 'Green', 'Ivory', 'Khaki'];
  /**
   * @desc LineChart constructor
   * @param DATA - data as an object
   * @param minimumYValue
   * @param maximumYValue 
   * @param title
   */
  protected constructor(
    protected DATA: object[],
    protected minimumYValue: number,
    protected maximumYValue: number,
    protected title: string) {
    super();
  }

  /** @desc Draw method for the bar chart */
  public abstract update(): void; /*{
    this.drawLines();
    this.drawTags();
    this.drawAxis();
    this.drawTitle(this.title);
  }*/  

  /** @desc Draw the chart bars */
  protected drawLines(): void {
    let normalizedValues: number[] = this.normalizeValues();    
    let widthSlotSize: number = (this.WIDTH - this.BORDER_SPACE * 2) / this.axisXValues.length;
    
    for (let index = 0; index < this.points.length; ++index) {
      //console.log('Line', index);
      for (let width = this.BORDER_SPACE/* + widthSlotSize / 2*/, i = 1; width < this.WIDTH - this.BORDER_SPACE, i < this.axisXValues.length; width += widthSlotSize, ++i) {
        //this.CONTEXT.fillStyle = lineColor;  
        // this.CONTEXT.fillRect(width - barWidth / 2, this.HEIGHT - this.BORDER_SPACE, barWidth, -normalizedValues[i]);
        //console.log('\tDrawing point', this.points[index][i - 1].toString());
        this.drawPoint(this.points[index][i - 1], this.axisYColors[index]);
        //console.log('Current year', this.axisXValues[i], 'value:', this.axisYValues[i]);
        this.drawLine(this.points[index][i - 1], this.points[index][i], this.axisYColors[index], 2);
        // this.drawText(this.points[index][i].subtract(new Point2D(0, 10)), this.axisYValues[i].toString(), 15, 'black');
      }
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

  /** @desc Draw the chart title */
  protected drawTitle(title: string): void {
    this.drawText(new Point2D(this.WIDTH / 2, this.BORDER_SPACE), title, 20, 'black');
  }

  /** @desc Normalize the Y-axis values to a given range */
  private normalizeValues(): number[] {
    let normalizedValues: number[] = [];
    let maximum: number = this.maximumYValue;
    let minimum: number = this.minimumYValue;
    if ((this.maximumYValue === 0) && (this.minimumYValue === 0)) {
      maximum = -Infinity;
      minimum = Infinity;
      for (let index = 0; index < this.axisYValues.length; ++index) {
        for (const value of this.axisYValues[index]) {
          if (value > maximum) maximum = value;
          if (value < minimum) minimum = value;
        }
      }      
      minimum - (maximum - minimum);
    }    
    let widthSlotSize: number = (this.WIDTH - this.BORDER_SPACE * 2) / this.axisXValues.length;    
    for (let index = 0; index < this.points.length; ++index) {
      let currentX: number = this.BORDER_SPACE + widthSlotSize / 2;
      for (const value of this.axisYValues[index]) {
        let currentY: number = ((value - minimum)/(maximum - minimum)) * (this.HEIGHT - this.BORDER_SPACE * 2)
        normalizedValues.push(currentY);
        this.points[index].push(new Point2D(currentX, this.HEIGHT - this.BORDER_SPACE - currentY))
        currentX += widthSlotSize;
      }
    }
    return(normalizedValues);
  }
}