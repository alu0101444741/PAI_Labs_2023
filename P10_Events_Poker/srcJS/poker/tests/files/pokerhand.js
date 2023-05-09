/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 12 2023
 * @desc PokerHand class
 */
import { Hand } from "./hand";
/** @desc PokerHand class. Extends Hand */
export class PokerHand extends Hand {
    /**
     * @desc Create a new PokerHand object
     * @param label - specifies the value of the hand
    */
    constructor(cards, label = 'new hand') {
        super(cards, label);
        this.cards = cards;
        this.label = label;
        this.sort();
        this.classify();
    }
    /** @desc Classify the current PokerHand as: Pair, Two Pair, Three of a Kind, Straight, Flush, Full House, Four of a Kind or Straight Flush. */
    classify() {
        if (this.hasStraightFlush())
            this.label = PokerHand.POKER_HANDS[7];
        else if (this.hasFourOfAKind())
            this.label = PokerHand.POKER_HANDS[6];
        else if (this.hasFullHouse())
            this.label = PokerHand.POKER_HANDS[5];
        else if (this.hasFlush())
            this.label = PokerHand.POKER_HANDS[4];
        else if (this.hasStraight())
            this.label = PokerHand.POKER_HANDS[3];
        else if (this.hasThreeOfAKind())
            this.label = PokerHand.POKER_HANDS[2];
        else if (this.hasTwoPair())
            this.label = PokerHand.POKER_HANDS[1];
        else if (this.hasPair())
            this.label = PokerHand.POKER_HANDS[0];
        else
            this.label = 'Highest Card';
    }
    /**
     * @desc Compare the current PokerHand with a given one.
     * @param hand - PokerHand to compare
     * @return 'true' if the current hand is better
    */
    compare(hand) {
        if (hand.label === this.label) {
            if (this.label === PokerHand.POKER_HANDS[7])
                return (this.getHighestCard().compare(hand.getHighestCard()));
            if (this.label === PokerHand.POKER_HANDS[6])
                return (this.compareSameLabel(hand, 2));
            if (this.label === PokerHand.POKER_HANDS[5])
                return (this.compareSameLabel(hand, 3));
            if (this.label === PokerHand.POKER_HANDS[4])
                return (this.getHighestCard().compare(hand.getHighestCard()));
            if (this.label === PokerHand.POKER_HANDS[3])
                return (this.getHighestCard().compare(hand.getHighestCard()));
            if (this.label === PokerHand.POKER_HANDS[2])
                return (this.compareSameLabel(hand, 3));
            if (this.label === PokerHand.POKER_HANDS[1]) {
                let firstValue, secondValue;
                let firstPairValue = this.hasRepeatedValues(2);
                firstValue = Math.max(firstPairValue, this.hasRepeatedValues(2, firstPairValue));
                firstPairValue = hand.hasRepeatedValues(2);
                secondValue = Math.max(firstPairValue, hand.hasRepeatedValues(2, firstPairValue));
                return (firstValue > secondValue);
            }
            if (this.label === PokerHand.POKER_HANDS[0])
                return (this.compareSameLabel(hand, 2));
            return (this.compareSameLabel(hand, 2));
        }
        if (PokerHand.POKER_HANDS.indexOf(this.label) > PokerHand.POKER_HANDS.indexOf(hand.label))
            return (true);
        return (false);
    }
    /**
     * @desc Helper method to compare two hands with the same label
     * @param hand - PokerHand to compare
     * @param appearances - minimum amount of times a value must appear
     * @returns 'true' if the current hand is better
     */
    compareSameLabel(hand, appearances) {
        let valueOne = this.hasRepeatedValues(appearances);
        let valueTwo = hand.hasRepeatedValues(appearances);
        if (valueOne === 1)
            return (true);
        if (valueTwo === 1)
            return (false);
        return (valueOne > valueTwo);
    }
    /**
     * @desc Checks if the hand is a StraightFlush.
     * The hand must be a Flush and a Straight at the same time.
     * @return 'true' if the hand is a StraightFlush
     */
    hasStraightFlush() {
        return (this.hasFlush() && this.hasStraight());
    }
    /**
     * @desc Checks if the hand is a Four of a Kind (Poker).
     * Four of a Kind is when there are three cards with the same value.
     * @return 'true' if the hand is a Four of a Kind
     */
    hasFourOfAKind() {
        return (this.hasRepeatedValues(4) !== 0);
    }
    /**
     * @desc Checks if the hand is a FullHouse.
     * FullHouse is when the hand has three cards of the same value and the remaining two
     * have the same value but different to the first three cards.
     * @return 'true' if the hand is a FullHouse
     */
    hasFullHouse() {
        let repeatedValue = this.hasRepeatedValues(3);
        if (repeatedValue === 0)
            return (false);
        return (this.hasRepeatedValues(2, repeatedValue) !== 0);
    }
    /**
     * @desc Checks if the hand is a Flush.
     * All cards are from the same suit.
     * @return 'true' if the hand is a Flush
     */
    hasFlush() {
        let suit = this.cards[0].getSuit();
        for (let card = 1; card < this.cards.length; ++card) {
            if (this.cards[card].getSuit() !== suit)
                return (false);
        }
        return (true);
    }
    /**
     * @desc Checks if the hand is a Straight.
     * All values must be consecutives. i.e: 9, 10, J, Q, K
     * @return 'true' if the hand is a Straight
     */
    hasStraight() {
        let orderedCards = this.sortByValue();
        let lastCardValue = orderedCards[orderedCards.length - 1].getValue();
        let firstCard = (orderedCards[0].getValue() === 1) ? 1 : 0;
        for (let card = firstCard; card < orderedCards.length - 1; ++card) {
            if (orderedCards[card].getValue() !== (orderedCards[card + 1].getValue() - 1))
                return (false);
        }
        if (orderedCards[0].getValue() === 1) {
            if ((lastCardValue !== 13) && (orderedCards[1].getValue() !== 2))
                return (false);
        }
        return (true);
    }
    /**
     * @desc Checks if the hand has a Three of a Kind.
     * Three of a Kind is when there are three cards with the same value.
     * @return 'true' if it has Three of a Kind
     */
    hasThreeOfAKind() {
        return (this.hasRepeatedValues(3) !== 0);
    }
    /**
     * @desc Checks if the hand is a Two Pair.
     * Two Pair is when the hand has two pair of cards. The value of the cards on a pair must be
     * equal but the value of both pairs must be different.
     * @return 'true' if it is a Two Pair
     */
    hasTwoPair() {
        let repeatedValue = this.hasRepeatedValues(2);
        if (repeatedValue === 0)
            return (false);
        return (this.hasRepeatedValues(2, repeatedValue) !== 0);
    }
    /**
     * @desc Checks if the hand has a Pair.
     * Pair is when the hand has two cards with the same value
     * @return 'true' if it has a Pair
     */
    hasPair() {
        return (this.hasRepeatedValues(2) !== 0);
    }
    /**
     * @desc Check if there is a card value is repeated a certain number of times or more.
     * @param appearances - minimum amount of times the value must appear
     * @param valueToIgnore - card value to not check
     * @returns the value which is repeated. 0 if there is none.
     */
    hasRepeatedValues(appearences, valueToIgnore) {
        let cardCount = 0;
        for (let cardValue = 1; cardValue <= PokerHand.CARDS_PER_SUIT; ++cardValue) {
            if (cardValue === valueToIgnore)
                continue;
            for (const card of this.cards) {
                if (card.getValue() === cardValue)
                    ++cardCount;
                if (cardCount === appearences)
                    return (cardValue);
            }
            cardCount = 0;
        }
        return (0);
    }
}
PokerHand.POKER_HANDS = ['Pair', 'Two Pair', 'Three of a Kind', 'Straight', 'Flush', 'Full House', 'Four of a Kind', 'Straight Flush'];
PokerHand.CARDS_PER_SUIT = 13;
