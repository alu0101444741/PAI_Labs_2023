/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 3 2023
 * @desc BingoBoard class
 */
/** @desc BingoBoard class. */
export class BingoBoard {
    /**
    * @desc Create a new BingoBoard object
    * @param ROWS
    * @param COLUMNS
    */
    constructor(ROWS, COLUMNS) {
        this.ROWS = ROWS;
        this.COLUMNS = COLUMNS;
        this.board = [];
        this.MAXIMUM_SLOT_VALUE = 9;
        for (let rows = 0; rows < this.ROWS; ++rows) {
            this.board.push([]);
            for (let columns = 0; columns < this.COLUMNS; ++columns) {
                this.board[rows].push(Math.floor(Math.random() * (this.MAXIMUM_SLOT_VALUE + 1)));
            }
        }
    }
    /**
     * @desc Getter method for the board values
     * @return board slots
     */
    getBoard() {
        return (this.board);
    }
    /**
     * @desc Getter method for the board rows
     * @return number of rows
     */
    getRows() {
        return (this.ROWS);
    }
    /**
     * @desc Getter method for the board columns
     * @return number of columns
     */
    getColumns() {
        return (this.COLUMNS);
    }
}
