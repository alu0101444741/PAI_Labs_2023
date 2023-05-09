/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 13 2023
 * @desc PokerPlayer class
 */
/** @desc PokerPlayer class */
export class PokerPlayer {
    /**
     * @desc Create a new PokerPlayer object
     * @param hand - poker hand
     * @param cardBackColor - card's back color assigned to the player
     */
    constructor(hand, cardBackColor) {
        this.hand = hand;
        this.cardBackColor = cardBackColor;
        this.cardsShown = false;
        this.cardBackImage = new Image();
        this.cardBackImage.src = `../../img/${this.cardBackColor}_back.png`;
    }
    /**
     * @desc Getter method for the player's hand.
     * @returns player hand
     */
    getHand() {
        return (this.hand);
    }
    /**
     * @desc Setter method for the hand status (revealed or not).
     * @param reveal - 'true' to reveal the hand. 'false' to put it upside down
     */
    setCardsShown(reveal) {
        this.cardsShown = reveal;
    }
    /**
     * @desc Checks the hands status (revealed or not).
     * @returns 'true' if shown. 'false' if the cards are upside-down
     */
    cardsRevealed() {
        return (this.cardsShown);
    }
    /**
     * @desc Getter method for the card image.
     * @returns card image
     */
    getCardBackImage() {
        return (this.cardBackImage);
    }
    /**
     * @desc Getter method for the card back color.
     * @returns card back color
     */
    getCardBackColor() {
        return (this.cardBackColor);
    }
}
