/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 17 2023
 * @desc Tests for class PokerHand
 *
 */
import { Card } from './files/card';
import { PokerHand } from './files/pokerhand';
describe('PokerHand', () => {
    let handOne, handTwo;
    test('Classify Straight Flush properly', () => {
        let straightFlushOne = [new Card('Hearts', 2), new Card('Hearts', 3), new Card('Hearts', 4), new Card('Hearts', 5), new Card('Hearts', 6)];
        let straightFlushTwo = [new Card('Hearts', 1), new Card('Hearts', 10), new Card('Hearts', 11), new Card('Hearts', 12), new Card('Hearts', 13)];
        handOne = new PokerHand(straightFlushOne);
        handTwo = new PokerHand(straightFlushTwo);
        expect(handOne.getLabel()).toBe('Straight Flush');
        expect(handTwo.getLabel()).toBe('Straight Flush');
        straightFlushOne = [new Card('Spades', 1), new Card('Spades', 2), new Card('Spades', 3), new Card('Spades', 4), new Card('Spades', 5)];
        straightFlushTwo = [new Card('Spades', 13), new Card('Spades', 10), new Card('Spades', 12), new Card('Spades', 11), new Card('Spades', 1)];
        handOne = new PokerHand(straightFlushOne);
        handTwo = new PokerHand(straightFlushTwo);
        expect(handOne.getLabel()).toBe('Straight Flush');
        expect(handTwo.getLabel()).toBe('Straight Flush');
    });
    test('Classify Four of a Kind properly', () => {
        let fourKindOne = [new Card('Hearts', 2), new Card('Clubs', 2), new Card('Spades', 2), new Card('Diamonds', 2), new Card('Hearts', 8)];
        let fourKindTwo = [new Card('Hearts', 1), new Card('Clubs', 1), new Card('Spades', 1), new Card('Diamonds', 1), new Card('Hearts', 8)];
        handOne = new PokerHand(fourKindOne);
        handTwo = new PokerHand(fourKindTwo);
        expect(handOne.getLabel()).toBe('Four of a Kind');
        expect(handTwo.getLabel()).toBe('Four of a Kind');
    });
    test('Classify Full House properly', () => {
        let fourKindOne = [new Card('Hearts', 2), new Card('Clubs', 2), new Card('Spades', 2), new Card('Diamonds', 8), new Card('Hearts', 8)];
        let fourKindTwo = [new Card('Hearts', 13), new Card('Clubs', 1), new Card('Spades', 1), new Card('Diamonds', 1), new Card('Hearts', 13)];
        handOne = new PokerHand(fourKindOne);
        handTwo = new PokerHand(fourKindTwo);
        expect(handOne.getLabel()).toBe('Full House');
        expect(handTwo.getLabel()).toBe('Full House');
        fourKindOne = [new Card('Hearts', 10), new Card('Clubs', 2), new Card('Spades', 2), new Card('Diamonds', 10), new Card('Hearts', 2)];
        fourKindTwo = [new Card('Hearts', 1), new Card('Clubs', 13), new Card('Spades', 1), new Card('Diamonds', 13), new Card('Hearts', 1)];
        handOne = new PokerHand(fourKindOne);
        handTwo = new PokerHand(fourKindTwo);
        expect(handOne.getLabel()).toBe('Full House');
        expect(handTwo.getLabel()).toBe('Full House');
    });
    test('Classify Flush properly', () => {
        let flushOne = [new Card('Hearts', 2), new Card('Hearts', 10), new Card('Hearts', 5), new Card('Hearts', 1), new Card('Hearts', 8)];
        let flushTwo = [new Card('Clubs', 2), new Card('Clubs', 10), new Card('Clubs', 11), new Card('Clubs', 12), new Card('Clubs', 13)];
        handOne = new PokerHand(flushOne);
        handTwo = new PokerHand(flushTwo);
        expect(handOne.getLabel()).toBe('Flush');
        expect(handTwo.getLabel()).toBe('Flush');
    });
    test('Classify Straight properly', () => {
        let straightOne = [new Card('Hearts', 2), new Card('Hearts', 3), new Card('Hearts', 4), new Card('Hearts', 5), new Card('Spades', 6)];
        let straightTwo = [new Card('Diamonds', 1), new Card('Spades', 10), new Card('Hearts', 11), new Card('Hearts', 12), new Card('Clubs', 13)];
        handOne = new PokerHand(straightOne);
        handTwo = new PokerHand(straightTwo);
        expect(handOne.getLabel()).toBe('Straight');
        expect(handTwo.getLabel()).toBe('Straight');
        straightOne = [new Card('Spades', 1), new Card('Hearts', 3), new Card('Spades', 2), new Card('Spades', 5), new Card('Spades', 4)];
        straightTwo = [new Card('Spades', 13), new Card('Spades', 10), new Card('Spades', 12), new Card('Clubs', 11), new Card('Spades', 1)];
        handOne = new PokerHand(straightOne);
        handTwo = new PokerHand(straightTwo);
        expect(handOne.getLabel()).toBe('Straight');
        expect(handTwo.getLabel()).toBe('Straight');
    });
    test('Classify Three of a Kind properly', () => {
        let threeKindOne = [new Card('Hearts', 2), new Card('Clubs', 2), new Card('Spades', 10), new Card('Diamonds', 2), new Card('Hearts', 8)];
        let threeKindTwo = [new Card('Hearts', 13), new Card('Clubs', 1), new Card('Spades', 1), new Card('Diamonds', 1), new Card('Hearts', 8)];
        handOne = new PokerHand(threeKindOne);
        handTwo = new PokerHand(threeKindTwo);
        expect(handOne.getLabel()).toBe('Three of a Kind');
        expect(handTwo.getLabel()).toBe('Three of a Kind');
    });
    test('Classify Two Pair properly', () => {
        let twoPairOne = [new Card('Hearts', 2), new Card('Clubs', 2), new Card('Spades', 10), new Card('Diamonds', 5), new Card('Hearts', 10)];
        let twoPairTwo = [new Card('Hearts', 13), new Card('Clubs', 1), new Card('Spades', 13), new Card('Diamonds', 1), new Card('Hearts', 8)];
        handOne = new PokerHand(twoPairOne);
        handTwo = new PokerHand(twoPairTwo);
        expect(handOne.getLabel()).toBe('Two Pair');
        expect(handTwo.getLabel()).toBe('Two Pair');
    });
    test('Classify Pair properly', () => {
        let pairOne = [new Card('Hearts', 2), new Card('Clubs', 3), new Card('Spades', 11), new Card('Diamonds', 2), new Card('Hearts', 10)];
        let pairTwo = [new Card('Hearts', 13), new Card('Clubs', 1), new Card('Spades', 13), new Card('Diamonds', 3), new Card('Hearts', 8)];
        handOne = new PokerHand(pairOne);
        handTwo = new PokerHand(pairTwo);
        expect(handOne.getLabel()).toBe('Pair');
        expect(handTwo.getLabel()).toBe('Pair');
    });
    test('Classify Highest Card properly', () => {
        let highestCardOne = [new Card('Hearts', 2), new Card('Clubs', 3), new Card('Spades', 10), new Card('Diamonds', 5), new Card('Hearts', 11)];
        let highestCardTwo = [new Card('Hearts', 2), new Card('Clubs', 1), new Card('Spades', 13), new Card('Diamonds', 3), new Card('Hearts', 8)];
        handOne = new PokerHand(highestCardOne);
        handTwo = new PokerHand(highestCardTwo);
        expect(handOne.getLabel()).toBe('Highest Card');
        expect(handTwo.getLabel()).toBe('Highest Card');
    });
});
