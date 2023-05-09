/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 12 2023
 * @desc PokerView class
 */
import { CanvasView } from './canvasview.js';
import { Point2D } from './point2d.js';
/** @desc PokerView class. Extends CanvasView */
export class PokerView extends CanvasView {
    /**
    * @desc Create a new PokerView object
    * @param POKER_GAME
    */
    constructor(POKER_GAME) {
        super();
        this.POKER_GAME = POKER_GAME;
        this.pokerHandIterations = false;
        this.iterationsNeeded = 0;
        this.pokerHandLabel = '';
        this.winner = document.getElementById('winner');
        this.cardAmount = this.POKER_GAME.PLAYER_ONE.getHand().getCards().length;
        this.cardSlotSize = this.WIDTH / this.cardAmount;
    }
    /** @desc Draws the scene on a recursive loop so the changes are shown properly */
    update() {
        this.resizeCanvas();
        this.draw();
        window.requestAnimationFrame(() => this.update());
    }
    /** @desc Draws the scene. This means drawing the cards, hand labels and the winner */
    draw() {
        this.drawBackground();
        this.drawLine(new Point2D(0, this.HEIGHT / 2), new Point2D(this.WIDTH, this.HEIGHT / 2), 2, 'black');
        if (this.POKER_GAME.isGameStarted()) {
            this.drawCards();
            this.showWinner();
            this.displayHandsLabel();
            this.displayIterationsToPokerHand();
        }
    }
    play() {
        this.revealPlayerHand(this.POKER_GAME.PLAYER_ONE);
        this.revealPlayerHand(this.POKER_GAME.PLAYER_TWO);
    }
    displayIterationsToPokerHand() {
        if (this.pokerHandIterations) {
            this.drawText(new Point2D(this.WIDTH / 5, this.HEIGHT / 2 - 10), `Iterations needed to get a ${this.pokerHandLabel}: ${this.iterationsNeeded}`, 20, 'black');
        }
    }
    /**
     * @desc Show the iterations needed to get a given poker hand label
     * @param iterationsNeeded
     * @param pokerHandLabel
     */
    showIterationsToPokerHand(iterationsNeeded, pokerHandLabel) {
        this.pokerHandIterations = true;
        this.iterationsNeeded = iterationsNeeded;
        this.pokerHandLabel = pokerHandLabel;
        this.revealPlayerHand(this.POKER_GAME.getIterationButtonPlayer());
    }
    /** @desc Draw cards from all players hands */
    drawCards() {
        this.drawPlayerCards(this.POKER_GAME.PLAYER_ONE, this.cardVerticalOffset);
        this.drawPlayerCards(this.POKER_GAME.PLAYER_TWO, this.HEIGHT - this.cardHeight - this.cardVerticalOffset);
    }
    /**
     * @desc Draw the cards of a given player.
     * @param player
     * @param cardCoordinateY - height on canvas
     */
    drawPlayerCards(player, cardCoordinateY) {
        let cardCounter = 0;
        for (const card of player.getHand().getCards()) {
            let cardCoordinateX = this.cardSlotSize * cardCounter + this.cardHorizontalOffset;
            let image = (card.isRevealed()) ? card.getImage() : player.getCardBackImage();
            this.CONTEXT.drawImage(image, cardCoordinateX, cardCoordinateY, this.cardWidth, this.cardHeight);
            ++cardCounter;
        }
    }
    /** @desc Shows who wins (Player 1 or Player 2) once all cards are shown */
    showWinner() {
        if (this.POKER_GAME.PLAYER_ONE.cardsRevealed() && this.POKER_GAME.PLAYER_TWO.cardsRevealed()) {
            if (this.POKER_GAME.PLAYER_ONE.getHand().compare(this.POKER_GAME.PLAYER_TWO.getHand())) {
                this.winner.innerText = 'Player 1';
                this.winner.style.color = this.POKER_GAME.PLAYER_ONE.getCardBackColor();
            }
            else {
                this.winner.innerText = 'Player 2';
                this.winner.style.color = this.POKER_GAME.PLAYER_TWO.getCardBackColor();
            }
        }
    }
    /** @desc Display the label of those hands that are revealed */
    displayHandsLabel() {
        let fontSize = Math.min((this.HEIGHT + this.WIDTH) / 40, 40);
        if (this.POKER_GAME.PLAYER_ONE.cardsRevealed()) {
            this.drawText(new Point2D(this.WIDTH / 2, (this.HEIGHT / 2) * 0.95), this.POKER_GAME.PLAYER_ONE.getHand().getLabel(), fontSize, this.POKER_GAME.PLAYER_ONE.getCardBackColor());
        }
        if (this.POKER_GAME.PLAYER_TWO.cardsRevealed()) {
            this.drawText(new Point2D(this.WIDTH / 2, (this.HEIGHT / 2) * 1.1), this.POKER_GAME.PLAYER_TWO.getHand().getLabel(), fontSize, this.POKER_GAME.PLAYER_TWO.getCardBackColor());
        }
    }
    /** @desc Makes the canvas responsive. Change the size of all elements so they fit properly on the canvas */
    resizeCanvas() {
        this.WIDTH = window.innerWidth * 0.975;
        this.HEIGHT = window.innerHeight * 0.825;
        this.CANVAS.setAttribute('height', this.HEIGHT.toString());
        this.CANVAS.setAttribute('width', this.WIDTH.toString());
        this.cardSlotSize = this.WIDTH / this.cardAmount;
        this.cardHorizontalOffset = this.cardSlotSize / 4;
        this.cardVerticalOffset = this.HEIGHT / 100;
        this.cardHeight = this.HEIGHT / 2.5;
        this.cardWidth = Math.min(this.cardSlotSize - this.cardHorizontalOffset * 2, this.cardHeight / 1.5);
    }
    /** @desc Draws the background of the canvas */
    drawBackground() {
        let backgroundGradient = this.CONTEXT.createRadialGradient(this.WIDTH / 2, this.HEIGHT / 2, this.HEIGHT / 10, this.WIDTH / 2, this.HEIGHT / 2, this.WIDTH / 2);
        backgroundGradient.addColorStop(0, 'lightgreen');
        backgroundGradient.addColorStop(0.9, 'green');
        backgroundGradient.addColorStop(1, 'darkgreen');
        this.CONTEXT.fillStyle = backgroundGradient;
        this.CONTEXT.fillRect(0, 0, this.WIDTH, this.HEIGHT);
    }
    /**
     * @desc Method to check if an element of the canvas has been clicked
     * @param coordinateX - coordinate x of the click on the canvas
     * @param coordinateY - coordinate y of the click on the canvas
     */
    clickOn(coordinateX, coordinateY) {
        /*if (!this.POKER_GAME.DECK.hasEnoughCards(PokerGame.CARDS_PER_HAND)) {
          let clicked: boolean = this.cardClicked(this.POKER_GAME.PLAYER_ONE, this.cardVerticalOffset, coordinateX, coordinateY);
          if (!clicked) this.cardClicked(this.POKER_GAME.PLAYER_TWO, this.HEIGHT - this.cardHeight - this.cardVerticalOffset, coordinateX, coordinateY);
          this.POKER_GAME.PLAYER_ONE.checkCardsRevealed();
          this.POKER_GAME.PLAYER_TWO.checkCardsRevealed();
        }*/
    }
    /**
     * @desc Reveal a card from the hand of a given player
     * @param player
     * @param cardCoordinateY - draw initial height assigned to the player cards
     * @param coordinateX  - coordinate x of the click on the canvas
     * @param coordinateY  - coordinate y of the click on the canvas
     * @returns 'true' if one card was clicked
     */
    cardClicked(player, cardCoordinateY, coordinateX, coordinateY) {
        let cardCounter = 0;
        for (let card of player.getHand().getCards()) {
            let cardCoordinateX = this.cardSlotSize * cardCounter + this.cardHorizontalOffset;
            if (((coordinateX >= cardCoordinateX) && (coordinateX <= cardCoordinateX + this.cardWidth)) &&
                ((coordinateY >= cardCoordinateY) && (coordinateY <= cardCoordinateY + this.cardHeight))) {
                // this.POKER_GAME.DECK.moveCards(player.getHand(), PokerGame.CARDS_PER_HAND);
                return (true);
            }
            ++cardCounter;
        }
        return (false);
    }
    /**
     * @desc Makes visible the cards of a given player
     * @param player
     */
    revealPlayerHand(player) {
        player.setCardsShown(true);
    }
}
