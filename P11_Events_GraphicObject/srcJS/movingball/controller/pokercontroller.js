/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 12 2023
 * @desc PokerController class
 */
/** @desc PokerController class */
export class PokerController {
    /**
    * @desc Create a new PokerController object
    * @param POKER_VIEW
    * @param POKER_GAME
    */
    constructor(POKER_VIEW, POKER_GAME) {
        this.POKER_VIEW = POKER_VIEW;
        this.POKER_GAME = POKER_GAME;
        this.CANVAS = this.POKER_VIEW.getCanvas();
        this.CANVAS.addEventListener('click', (event) => this.clickedOnCanvas(event));
        this.DEAL_HAND_ONE = document.getElementById('DealHandOne');
        this.DEAL_HAND_TWO = document.getElementById('DealHandTwo');
        this.DEAL_HAND_ONE.addEventListener('click', () => this.revealPlayerHand(this.POKER_GAME.PLAYER_ONE));
        this.DEAL_HAND_TWO.addEventListener('click', () => this.revealPlayerHand(this.POKER_GAME.PLAYER_TWO));
        this.CHANGE_HAND_ONE = document.getElementById('ChangeHandOne');
        this.CHANGE_HAND_TWO = document.getElementById('ChangeHandTwo');
        this.CHANGE_HAND_ONE.addEventListener('click', () => this.changePlayerHand(this.POKER_GAME.PLAYER_ONE));
        this.CHANGE_HAND_TWO.addEventListener('click', () => this.changePlayerHand(this.POKER_GAME.PLAYER_TWO));
    }
    /**
     * @desc Clicked on the Canvas
     * @param event - mouse event with x and y coordinates
     */
    clickedOnCanvas(event) {
        let boundingClientRect = this.CANVAS.getBoundingClientRect();
        this.POKER_VIEW.clickOn(event.clientX - boundingClientRect.left, event.clientY - boundingClientRect.top);
    }
    /**
     * @desc Makes visible the cards of a given player
     * @param player
     */
    revealPlayerHand(player) {
        this.POKER_VIEW.revealPlayerHand(player);
    }
    /**
     * @desc Change all cards of a given player
     * @param player
     */
    changePlayerHand(player) {
        this.POKER_GAME.DECK.moveCards(player.getHand(), 5);
        player.setCardsShown(false);
    }
}
