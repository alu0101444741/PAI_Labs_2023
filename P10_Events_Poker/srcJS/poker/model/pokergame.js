/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 17 2023
 * @desc PokerGame class
 */
import { Deck } from "./deck.js";
import { PokerHand } from "./pokerhand.js";
import { PokerPlayer } from "./pokerplayer.js";
/**
 * @desc PokerGame class.
 * A match of Poker between two players. Both play with a hand of five cards.
 */
export class PokerGame {
    /** @desc Create a new PokerGame object */
    constructor() {
        this.gameStarted = false;
        this.DECK = Deck.getInstance();
        let hands = this.DECK.dealHands(2, PokerGame.CARDS_PER_HAND);
        this.PLAYER_ONE = new PokerPlayer(hands[0], 'blue');
        this.PLAYER_TWO = new PokerPlayer(hands[1], 'red');
        this.iterationButtonPlayer = this.PLAYER_ONE;
    }
    /**
     * @desc Deal hands until one player gets a certain poker hand
     * @param pokerHand - poker hand label
     * @return iterations needed to get the given poker hand. -1 if the label was not valid
    */
    playUntilPokerHand(pokerHand) {
        let iterationsNeeded = 0;
        let validPokerHand = false;
        for (const hand of PokerHand.POKER_HANDS)
            if (pokerHand === hand)
                validPokerHand = true;
        if (!validPokerHand)
            return (-1);
        while ((this.PLAYER_ONE.getHand().getLabel() !== pokerHand) && (this.PLAYER_TWO.getHand().getLabel() !== pokerHand) && (iterationsNeeded < 10000)) {
            this.DECK.returnCardsToDeck(this.PLAYER_ONE.getHand());
            this.DECK.returnCardsToDeck(this.PLAYER_TWO.getHand());
            this.DECK.shuffle;
            ++iterationsNeeded;
        }
        if (this.PLAYER_ONE.getHand().getLabel() === pokerHand)
            this.iterationButtonPlayer = this.PLAYER_ONE;
        else if (this.PLAYER_TWO.getHand().getLabel() === pokerHand)
            this.iterationButtonPlayer = this.PLAYER_TWO;
        this.DECK.sort();
        console.log(this.PLAYER_ONE.toString());
        console.log(this.PLAYER_TWO.toString());
        console.log(this.DECK.toString());
        return (iterationsNeeded);
    }
    /** @desc Start the Poker game */
    start() {
        this.gameStarted = true;
    }
    /**
     * @desc Checks if the game already started
     * @returns 'true' if the game started
     */
    isGameStarted() {
        return (this.gameStarted);
    }
    getIterationButtonPlayer() {
        return (this.iterationButtonPlayer);
    }
}
PokerGame.CARDS_PER_HAND = 5;
