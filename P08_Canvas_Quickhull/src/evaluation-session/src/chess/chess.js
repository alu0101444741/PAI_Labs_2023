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
    constructor(MILISECONDS) {
        super(MILISECONDS);
        this.MILISECONDS = MILISECONDS;
        this.slots = 8;
        this.brownBorderWidth = (this.WIDTH / this.slots) * 0.9;
    }
    update() {
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
    drawSlots() {
        let stepAxisX = (this.WIDTH - this.brownBorderWidth * 2) / this.slots;
        let stepAxisY = (this.HEIGHT - this.brownBorderWidth * 2) / this.slots;
        let whiteSlot = true;
        for (let coordinateX = this.brownBorderWidth; coordinateX < (this.WIDTH - this.brownBorderWidth); coordinateX += stepAxisX) {
            for (let coordinateY = this.brownBorderWidth; coordinateY < (this.HEIGHT - this.brownBorderWidth); coordinateY += stepAxisY) {
                this.CONTEXT.fillStyle = (whiteSlot) ? 'seashell' : '#605858';
                this.CONTEXT.fillRect(coordinateX, coordinateY, stepAxisX, stepAxisY);
                whiteSlot = !whiteSlot;
            }
            whiteSlot = !whiteSlot;
        }
    }
}
