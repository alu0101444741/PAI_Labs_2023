/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 12 2023
 * @desc Hand class
 */

import { Card } from "./card";

/** @desc Hand class */
export class Hand {
  /**
   * @desc Create a new Hand object
   * @param cards - cards assigned to the hand
   * @param label - specifies the value of the hand
  */
  constructor(
    protected cards: Card[],
    protected label: string = 'new hand') {}  

  /**
   * @desc Delete the first card on the left side.
   * @return deleted card
  */
  public popCard(): Card {
    return(this.cards.shift()!);
  }

  /**
   * @desc Adds a card to the hand
   * @param card - card to add
  */
  public addCard(card: Card): void {
    this.cards.push(card);
  }

  /** @desc Sort the hand by cards values and suit. */
  public sort(): void {
    this.cards.sort((a, b) => Number(a.compare(b)));
  }

  /** 
   * @desc Return a copy of the hand cards. This copy is sorted by cards values only. 
   * @returns current hand cards sorted by value
   */
  public sortByValue(): Card[] {
    let cardsSortedByValue: Card[] = [...this.cards];
    cardsSortedByValue.sort((a, b) => a.getValue() - b.getValue());
    return(cardsSortedByValue);
  }

  /**
   * @desc Returns a string with the information of all cards on the hand.
   * @return all stored cards showed as 'value of suit'
  */
  public toString(): string {
    let deck: string = '';
    for (const card of this.cards) {
      deck += (card.toString() + '\n');
    }
    return(deck);
  }

  /**
   * @desc Getter method for the highest card on the current hand
   * @returns highest card on hand
  */
  public getHighestCard(): Card {
    let highestCard: Card = this.cards[0];
    for (const card of this.cards)
      if (card.compare(highestCard)) highestCard = card;
    return(highestCard);
  }

  /**
   * @desc Getter method for the cards on the hand.
   * @return list of cards
  */
  public getCards(): Card[] {
    return(this.cards);
  }

  /**
   * @desc Getter method for the label of the hand.
   * @return label
  */
  public getLabel(): string {
    return(this.label);
  }
}