/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 12 2023
 * @desc Deck class
 */

import { Card } from './card.js';
import { PokerGame } from './pokergame.js';
import { PokerHand } from './pokerhand.js';
import { PokerPlayer } from './pokerplayer.js';

 /** @desc Deck class. */
export class Deck {
  private static DECK: Deck;
  public cards: Card[] = [];
  private static readonly SUITS: string[] = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  /** @desc Create a new Deck object */
  private constructor() {
    for (const suit of Deck.SUITS) {
      for (let value = 1; value <= PokerHand.CARDS_PER_SUIT; ++value) {        
        this.cards.push(new Card(suit, value));
      }
    }
    this.shuffle();
  }

  /**
   * @desc Create a given amount of hands with a given amount of cards on each.
   * @param hands - amount of hands to create
   * @param cards - amount of cards on each hand
   * @return hand list
  */
  public dealHands(hands: number, cards: number): PokerHand[] {
    let handsArray: PokerHand[] = [];
    for (let hand = 0; hand < hands; ++hand) {
      let handCards: Card[] = [];
      for (let card = 0; card < cards; ++card) handCards.push(this.popCard());
      handsArray.push(new PokerHand(handCards));
    }
    return(handsArray);
  }

  /**
   * @desc Returns a player hand to the deck and deal a new hand.
   * @param playerHand 
   */
  public returnCardsToDeck(playerHand: PokerHand): void {
    for (let i = 0; i < PokerGame.CARDS_PER_HAND; ++i) this.addCard(playerHand.popCard());
    for (let i = 0; i < PokerGame.CARDS_PER_HAND; ++i) playerHand.addCard(this.popCard());
    playerHand.classify();
  }

  /**
  * @desc Remove a given amount of cards from a hand. Then add the same amount of cards.
  * @param hand
  * @param cardAmount
  */
  public moveCards(hand: PokerHand, cardAmount: number): void {
    for (let i = 0; i < cardAmount; ++i) hand.popCard();
    for (let i = 0; i < cardAmount; ++i) hand.addCard(this.popCard());
    hand.classify();
  }

  /**
   * @desc Remove the card on the top of the deck
   * @return deleted card
  */
  public popCard(): Card {
    if (this.cards.length !== 0) return(this.cards.shift() as Card);
    else return(new Card('', 0));
  }

  /**
   * @desc Adds a card to the bottom of the deck
   * @param card
  */
  public addCard(card: Card): void {
    this.cards.push(card);
  }

  /** @desc Shuffle the deck. */
  public shuffle(): void {
    let cardsRemaining = this.cards.length;
    let swap: Card, currentCard: number;
    for (let i = 0; i < this.cards.length; ++i) {      
      currentCard = Math.floor(Math.random() * cardsRemaining);
      --cardsRemaining;
      swap = this.cards[cardsRemaining];
      this.cards[cardsRemaining] = this.cards[currentCard];
      this.cards[currentCard] = swap;
    }
  }

  /** @desc Sort the deck by comparing the cards values */
  public sort(): void {
    this.cards.sort((a, b) => {return(a.compare(b) ? 1 : -1)});
  }

  /**
   * @desc Checks if the deck has enough cards to deal
   * @param cardAmount - how many cards to deal
   * @returns 'true' if it has more than five cards 
   */
  public hasEnoughCards(cardAmount: number): boolean {
    return(this.cards.length >= cardAmount);
  }

  /**
   * @desc Returns a string with the information of all cards on the deck.
   * @return all stored cards showed as '<value> of <suit>'
  */
  public toString(): string {
    let deck: string = '';
    for (const card of this.cards) {
      deck += (card.toString() + '\n');
    }
    return(deck);
  }

  /**
   * @desc Returns the one and only instance of the Deck class
   * @returns the deck
   */
  public static getInstance(): Deck {
    if (Deck.DECK === undefined) {
      Deck.DECK = new Deck();
    }
    return(Deck.DECK)
  }
}