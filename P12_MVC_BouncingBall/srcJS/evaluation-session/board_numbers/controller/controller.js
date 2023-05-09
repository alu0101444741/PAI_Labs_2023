/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 3 2023
 * @desc BoardController class
 */
import { ModelBoard } from '../model/modelboard.js';
import { BoardView } from '../view/boardview.js';
/** @desc BoardController class */
export class BoardController {
    /** @desc Create a new BoardController object */
    constructor() {
        this.board = new ModelBoard(7, 6);
        this.BOARD_VIEW = new BoardView(this.board);
        this.CANVAS = this.BOARD_VIEW.getCanvas();
        this.RESET = document.getElementById('reset');
        this.RESET.addEventListener('click', () => this.resetBoard());
        this.SPECIAL_NUMBER = document.getElementById('inputValue');
        this.RESET_SPECIAL = document.getElementById('resetSpecial');
        this.RESET_SPECIAL.addEventListener('click', () => this.resetSpecial());
        this.SOLVE = document.getElementById('solve');
        this.SOLVE.addEventListener('click', () => this.solveBoard());
        this.BOARD_VIEW.update();
    }
    /** @desc Search a solution for the board */
    solveBoard() {
        this.BOARD_VIEW.solveBoard(this.board.solveBoard());
    }
    /** @desc Creates a new BingoBoard that has a number with higher chance to appear. */
    resetSpecial() {
        let specialValue = Number(this.SPECIAL_NUMBER.value);
        if (specialValue < 0)
            specialValue = 0;
        if (specialValue > 9)
            specialValue = 9;
        this.BOARD_VIEW.resetBoard(new ModelBoard(7, 6, specialValue));
    }
    /** @desc Creates a new BingoBoard */
    resetBoard() {
        this.BOARD_VIEW.resetBoard(new ModelBoard(7, 6));
    }
}
