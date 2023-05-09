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

import { PokerHand } from "./pokerhand.js";

/** @desc PokerPlayer class */
export class PokerPlayer {
  private cardsShown: boolean = false;
  private cardBackImage: HTMLImageElement;
  /**
   * @desc Create a new PokerPlayer object
   * @param hand - poker hand
   * @param cardBackColor - card's back color assigned to the player
   */
  constructor(
    private hand: PokerHand,
    private readonly cardBackColor: string) {
    this.cardBackImage = new Image();
    this.cardBackImage.src = `../../img/${this.cardBackColor}_back.png`;
  }

  /** @desc Checks if all cards are revealed and update the player hand status */
  public checkCardsRevealed(): void {
    let allCardsRevealed: boolean = true;
    for (const card of this.hand.getCards()) {
      if (!card.isRevealed()) {
        allCardsRevealed = false;
        break;
      } 
    }
    this.cardsShown = allCardsRevealed;
  }  

  /**
   * @desc Setter method for the hand status (revealed or not).
   * @param reveal - 'true' to reveal the hand. 'false' to put it upside down
   */
  public setCardsShown(reveal: boolean): void {
    this.cardsShown = reveal;
    for (const card of this.hand.getCards()) card.setRevealed(reveal);
  }

  /**
   * @desc Checks the hands status (revealed or not).
   * @returns 'true' if shown. 'false' if the cards are upside-down
   */
  public cardsRevealed(): boolean {
    return(this.cardsShown);
  }

  /**
   * @desc Getter method for the player's hand.
   * @returns player hand
   */
  public getHand(): PokerHand {
    return(this.hand);
  }

  /**
   * @desc Getter method for the card image.
   * @returns card image
   */
  public getCardBackImage(): HTMLImageElement {
    return(this.cardBackImage);
  }

  /**
   * @desc Getter method for the card back color.
   * @returns card back color
   */
  public getCardBackColor(): string {
    return(this.cardBackColor);
  }
}