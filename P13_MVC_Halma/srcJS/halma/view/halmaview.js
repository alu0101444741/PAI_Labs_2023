/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 4 2023
 * @desc HalmaView class
 */
import { CanvasView } from './canvasview.js';
/** @desc HalmaView class. Extends CanvasView */
export class HalmaView extends CanvasView {
    /**
    * @desc Create a new Halma object
    * @param boardRows
    * @param boardColumns
    */
    constructor(boardRows, boardColumns) {
        super();
        this.SLOT_WIDTH = this.WIDTH / boardRows;
        this.SLOT_HEIGHT = this.HEIGHT / boardColumns;
        this.PIECE_SIZE = this.SLOT_HEIGHT * 0.95 / 2;
        this.MOVEMENTS = document.getElementById('movements');
        this.GAME_STATE = document.getElementById('gameState');
    }
    /** @desc Canvas draw loop. */
    update() {
        this.draw();
        window.requestAnimationFrame(() => this.update());
    }
    /** @desc Draws the scene. */
    draw() {
        this.drawBackground('beige');
        this.drawHalma();
    }
    /** @desc Draws the Halma game board and updates the amount of movements that have been made. */
    drawHalma() {
        var _a, _b, _c;
        if (this.board) {
            this.CONTEXT.lineWidth = 1;
            this.CONTEXT.strokeStyle = 'black';
            for (const slot of (_a = this.board) === null || _a === void 0 ? void 0 : _a.getSlots())
                this.drawSlot(slot);
            this.MOVEMENTS.innerText = `Movements: ${(_b = this.board) === null || _b === void 0 ? void 0 : _b.getMovements()}`;
            if ((_c = this.board) === null || _c === void 0 ? void 0 : _c.gameOver())
                this.GAME_STATE.innerText = 'Game finished';
        }
    }
    /** @desc Draw a slot. */
    drawSlot(slot) {
        var _a;
        let centerPoint = slot.getCenterPoint();
        if ((_a = this.board) === null || _a === void 0 ? void 0 : _a.isWinningSlot(slot))
            this.drawRectangle(centerPoint, this.SLOT_WIDTH, this.SLOT_HEIGHT, 1, 'black', true, 'coral');
        else
            this.drawRectangle(centerPoint, this.SLOT_WIDTH, this.SLOT_HEIGHT, 1, 'black', false);
        if (slot.isOccupied())
            this.drawCircle(centerPoint, this.PIECE_SIZE, 1, 'black', slot.isSelected());
        this.CONTEXT.closePath();
    }
    /**
     * @desc Set a new Halma game
     * @param board - new Halma game
     */
    setBoard(board) {
        this.board = board;
        this.GAME_STATE.innerText = 'Playing...';
    }
    /** @desc Update every object properties. */
    updateObjects() {
        //for (const object of this.objects) object.update(this.WIDTH, this.HEIGHT);
    }
    /** @desc Change the size of all elements so they fit properly on the canvas. */
    adaptObjects() {
        //for (const object of this.objects) object.adapt(this.WIDTH, this.HEIGHT, this.SIZE_FACTOR);
    }
    /**
    * @desc Getter method for the slot height
    * @returns slot vertical size
    */
    getSlotHeight() {
        return (this.SLOT_HEIGHT);
    }
    /**
     * @desc Getter method for the slot width
     * @returns slot horizontal size
     */
    getSlotWidth() {
        return (this.SLOT_WIDTH);
    }
}
