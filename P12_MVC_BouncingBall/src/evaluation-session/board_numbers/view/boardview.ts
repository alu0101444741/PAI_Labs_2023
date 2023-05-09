/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 18 2023
 * @desc BoardView class
 */
import { ModelBoard } from '../model/modelboard.js';
import { CanvasView } from './canvasview.js';
import { Point2D } from './point2d.js';

/** @desc BoardView class. Extends CanvasView */
export class BoardView extends CanvasView {
  private solved: boolean = false;
  private solution: number[][] = [];
  /**
  * @desc Create a new Board object 
  * @param board - ModelBoard to draw on screnn
  */
  public constructor(private board: ModelBoard) {    
    super();    
  }  

  

  /** @desc Canvas draw loop. */
  public update(): void {    
    this.draw();
    window.requestAnimationFrame(() => this.update());
  }

  /** @desc Draws the scene. */
  private draw(): void {
    this.cleanCanvas();
    this.drawBackground('azure');
    if (this.solved) this.drawSolution(this.solution);
    this.drawBoard();    
  }

  private drawSolution(solution: number[][]): void {
    let rowHeight: number = this.HEIGHT / this.board.getRows();
    let columnWidth: number = this.WIDTH / this.board.getColumns();
    if (solution.length !== 0) {
      for (let rows = 0; rows < this.board.getRows(); ++rows) {
        let currentRowY = rowHeight * rows      
        this.drawLine(new Point2D(0, currentRowY), new Point2D(this.WIDTH, currentRowY), 2, 'black')
        for (let columns = 0; columns < this.board.getColumns(); ++columns) {
          let currentColumnX = columnWidth * columns
          for (const row of this.solution) {
            if ((rows === row[0]) && (columns === row[1])) this.CONTEXT.fillRect(currentColumnX, currentRowY, this.WIDTH / this.board.getColumns(), this.HEIGHT / this.board.getRows());
          }
        }
      }
      this.drawText(new Point2D(this.WIDTH / 2, this.HEIGHT / 2), 'BINGO!', 50, 'red');
    }
    else this.drawText(new Point2D(this.WIDTH / 2, this.HEIGHT / 2), 'No solution', 50, 'red');
  }

  public solveBoard(solution: number[][]): void {    
    if (solution.length !== 0) {
      this.solved = true;
      this.solution = solution.slice();      
    }
  }

  /** @desc Draw the board slots and numbers */
  private drawBoard(): void {
    let rowHeight: number = this.HEIGHT / this.board.getRows();
    let columnWidth: number = this.WIDTH / this.board.getColumns();
    let boardValues = this.board.getBoard()

    for (let rows = 0; rows < this.board.getRows(); ++rows) {
      let currentRowY = rowHeight * rows      
      this.drawLine(new Point2D(0, currentRowY), new Point2D(this.WIDTH, currentRowY), 2, 'black')
      for (let columns = 0; columns < this.board.getColumns(); ++columns) {
        let currentColumnX = columnWidth * columns
        this.drawLine(new Point2D(currentColumnX, 0), new Point2D(currentColumnX, this.HEIGHT), 2, 'black')
        this.drawText(new Point2D(currentColumnX + columnWidth / 2, currentRowY + rowHeight / 2), boardValues[rows][columns].toString(), 40, 'black')
      }
    }
  }

  /**
   * @desc Overwrites the stored ModelBoard
   * @param board - new board
   */
  public resetBoard(board: ModelBoard): void {
    this.board = board;
  }


  /** @desc Update every object properties. */  
  protected updateObjects(): void {
    //for (const object of this.objects) object.update(this.WIDTH, this.HEIGHT);
  }

  /** @desc Change the size of all elements so they fit properly on the canvas. */  
  protected adaptObjects(): void {
    //for (const object of this.objects) object.adapt(this.WIDTH, this.HEIGHT, this.SIZE_FACTOR);
  }
}