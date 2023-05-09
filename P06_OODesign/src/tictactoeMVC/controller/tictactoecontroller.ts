/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Mar 11 2023
 * @desc TicTacToeViewController class
 * @module tictactoe-controller
 */

import { TicTacToeView } from '../view/tictactoeview';
import { TicTacToe } from '../model/tictactoe';

/** @desc Clase TicTacToeController */
export class TicTacToeController {
 //private restartButton: HTMLElement | null;
 /**
  * @desc Constructor de la clase
  * @param {TicTacToeView} view - representación visual
  * @param {TicTacToe} model - estructura interna
  */
 constructor(
    private view: TicTacToeView,
    private model: TicTacToe) {
   
   /*this.restartButton = document.getElementById('restart');
   if (this.restartButton instanceof HTMLElement) 
    this.restartButton.addEventListener('click', () => this.restart());*/
   window.addEventListener('click', () => this.clickOnSlot, false);
 }

 /**
  * @desc Método para revelar una casilla a través de un click. 
  * @param {Event} event - evento creado por el puntero.
 */
 private clickOnSlot(event: MouseEvent) {
   //this.#model.updateDimensions(this.#view.height, this.#view.width);
   if (event.target instanceof Element) {
    let boundingClientRect: DOMRect = event.target.getBoundingClientRect();
    if ((event.clientX - boundingClientRect.left > 0) && (event.clientY - boundingClientRect.top > 0)) {
      let slotClicked: number[] = this.view.slotClicked(event.clientX - boundingClientRect.left, event.clientY - boundingClientRect.top);
      if ((slotClicked[0] !== -1) && !(this.model.slotAlreadyPlayed(slotClicked[0], slotClicked[1]))) {
        this.model.play(slotClicked[0], slotClicked[1]);
        this.view.fillSlot(slotClicked[0], slotClicked[1], this.model.getCurrentPlayer());
      }
      //console.log(event.clientX - boundingClientRect.left, event.clientY - boundingClientRect.top);
      //if (!this.view.gameEnd) {
        //let boundingClientRect = event.target.getBoundingClientRect();
      //}
    }
   }         
 }
 
 checkListener(): string {
  return('--> check');
 }

 /** @desc Método para reiniciar el juego */
 /*private restart() {
  this.view.restart();
 }*/
}