/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 22 2023
 * @desc Cube
 */

import { CanvasView } from "../../../utilities/canvasview.js";

export class Chess extends CanvasView {
  private readonly slots: number = 8;
  private readonly brownBorderWidth: number = (this.WIDTH / this.slots) * 0.9;
  constructor(
    protected readonly MILISECONDS: number) {
    super(MILISECONDS);
  }

  public update(): void {
    this.CONTEXT.fillStyle = '#605858';
    this.CONTEXT.fillRect(0, 0, this.WIDTH, this.HEIGHT);
    this.drawSlots();
    this.CONTEXT.strokeStyle = 'white';
    this.CONTEXT.lineWidth = 3;
    this.CONTEXT.strokeRect(this.brownBorderWidth, this.brownBorderWidth, this.WIDTH - this.brownBorderWidth * 2, this.HEIGHT - this.brownBorderWidth * 2);
    this.CONTEXT.strokeStyle = '#605858';
    this.CONTEXT.lineWidth = 1;
    this.CONTEXT.strokeRect(this.brownBorderWidth + 2, this.brownBorderWidth + 2, this.WIDTH - this.brownBorderWidth * 2 - 4, this.HEIGHT - this.brownBorderWidth * 2 - 4);
  }

  /** @desc Draw chessboard slots */
  private drawSlots(): void {
    let stepAxisX: number = (this.WIDTH - this.brownBorderWidth * 2) / this.slots;
    let stepAxisY: number = (this.HEIGHT - this.brownBorderWidth * 2) / this.slots;
    let whiteSlot: boolean = true;
    for (let coordinateX = this.brownBorderWidth; coordinateX < (this.WIDTH - this.brownBorderWidth); coordinateX += stepAxisX){
      for (let coordinateY = this.brownBorderWidth; coordinateY < (this.HEIGHT - this.brownBorderWidth); coordinateY += stepAxisY) {
        this.CONTEXT.fillStyle = (whiteSlot) ? 'seashell' : '#605858';
        this.CONTEXT.fillRect(coordinateX, coordinateY, stepAxisX, stepAxisY);
        whiteSlot = !whiteSlot;
      }
      whiteSlot = !whiteSlot;
    }
  }
}