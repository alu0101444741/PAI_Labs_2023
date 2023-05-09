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

import { PokerGame } from '../model/pokergame.js';
import { PokerHand } from '../model/pokerhand.js';
import { PokerPlayer } from '../model/pokerplayer.js';
import { PokerView } from '../view/pokerview.js';

/** @desc PokerController class */
export class PokerController {
  private readonly CANVAS: HTMLElement;
  private readonly DEAL_HAND_ONE: HTMLElement;
  private readonly DEAL_HAND_TWO: HTMLElement;
  private readonly CHANGE_HAND_ONE: HTMLElement;
  private readonly CHANGE_HAND_TWO: HTMLElement;
  private readonly SEARCH_FOUR_KIND: HTMLElement;
  private readonly SEARCH_THREE_KIND: HTMLElement;
  private readonly PLAY: HTMLElement;
  
  /**
  * @desc Create a new PokerController object
  * @param POKER_VIEW
  * @param POKER_GAME
  */
  public constructor(
    private readonly POKER_VIEW: PokerView,
    private readonly POKER_GAME: PokerGame
    ) {    
    this.CANVAS = this.POKER_VIEW.getCanvas();
    this.CANVAS.addEventListener('click', (event) => this.clickedOnCanvas(event))

    this.DEAL_HAND_ONE = document.getElementById('DealHandOne') as HTMLElement;
    this.DEAL_HAND_TWO = document.getElementById('DealHandTwo') as HTMLElement;
    this.DEAL_HAND_ONE.addEventListener('click', () => this.revealPlayerHand(this.POKER_GAME.PLAYER_ONE));
    this.DEAL_HAND_TWO.addEventListener('click', () => this.revealPlayerHand(this.POKER_GAME.PLAYER_TWO));

    this.CHANGE_HAND_ONE = document.getElementById('ChangeHandOne') as HTMLElement;
    this.CHANGE_HAND_TWO = document.getElementById('ChangeHandTwo') as HTMLElement;
    this.CHANGE_HAND_ONE.addEventListener('click', () => this.changePlayerHand(this.POKER_GAME.PLAYER_ONE));
    this.CHANGE_HAND_TWO.addEventListener('click', () => this.changePlayerHand(this.POKER_GAME.PLAYER_TWO));

    this.SEARCH_FOUR_KIND = document.getElementById('PokerHand') as HTMLElement;
    this.SEARCH_FOUR_KIND.addEventListener('click', () => this.searchPokerHand(PokerHand.POKER_HANDS[6]))
    this.SEARCH_THREE_KIND = document.getElementById('Trips') as HTMLElement;
    this.SEARCH_THREE_KIND.addEventListener('click', () => this.searchPokerHand(PokerHand.POKER_HANDS[2]))

    this.PLAY = document.getElementById('Play') as HTMLElement;
    this.PLAY.addEventListener('click', () => this.play())
  }

  /** @desc  */
  private searchPokerHand(pokerHandLabel: string): void {
    this.POKER_GAME.start();
    this.POKER_VIEW.showIterationsToPokerHand(this.POKER_GAME.playUntilPokerHand(pokerHandLabel), pokerHandLabel);
  }

  private play(): void {
    this.POKER_GAME.start();
    this.POKER_VIEW.play();
  }

  /**
   * @desc Clicked on the Canvas
   * @param event - mouse event with x and y coordinates
   */
  private clickedOnCanvas(event: MouseEvent): void {
    let boundingClientRect = this.CANVAS.getBoundingClientRect();
    this.POKER_VIEW.clickOn(event.clientX - boundingClientRect.left, event.clientY - boundingClientRect.top);
  }

  /**
   * @desc Makes visible the cards of a given player
   * @param player
   */
  private revealPlayerHand(player: PokerPlayer): void {
    this.POKER_VIEW.revealPlayerHand(player);
  }

  /**
   * @desc Change all cards of a given player
   * @param player
   */
  private changePlayerHand(player: PokerPlayer): void {
    this.POKER_GAME.DECK.moveCards(player.getHand(), 5);
    player.setCardsShown(false);
  }
}