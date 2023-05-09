/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 12 2023
 * @desc Card class
 */

/** @desc Card class */
export class Card {
  private readonly image: HTMLImageElement;
  private revealed: boolean = false;
  /**
  * @desc Create a new Card object
  * @param suit - Spades, Hearts, Diamonds or Clubs
  * @param value - from 2 to 10 or A, J, Q, K
  * @param image - image file path
  */
  constructor(
    private suit: string,
    private value: number) {
    this.image = new Image();
    this.getImageName();
  }

  /**
  * @desc Compare the current card with a given one.
  * @param card - card object
  * @returns 'true' if the current card is higher
  */
  public compare(card: Card): boolean {
    if (this.suit > card.suit) return(true);
    if (this.suit < card.suit) return(false);
    if ((this.value === 1) && (card.value !== 1)) return(true);
    if ((this.value !== 1) && (card.value === 1)) return(false);
    if (this.value > card.value) return(true);
    return(false);
  }

 /** @desc Get the image file path from the current card suit and value */
 private getImageName(): void {    
   let imageName: string = '../../../img/';
   let value: string = this.value.toString();
   switch (value) {
     case '1' : value = 'A'; break;
     case '11': value = 'J'; break;
     case '12': value = 'Q'; break;
     case '13': value = 'K'; break;
   }
   imageName += value;
   imageName += this.suit.charAt(0);
   imageName += '.png';
   this.image.src = imageName;
 }  

  /**
   * @desc Setter method for the card status (revealed or not).
   * @param reveal - 'true' to reveal the card. 'false' to put it upside down
   */
  public setRevealed(reveal: boolean): void {
    this.revealed = reveal;
  }

  /**
  * @desc Getter method for the card status (revealed or not).
  * @return 'true' if card is revealed
  */
  public isRevealed(): boolean {
    return(this.revealed);
  }

  /**
  * @desc Getter method for the value of the card
  * @return value
  */
  public getValue(): number {
    return(this.value);
  }

  /**
  * @desc Getter method for the suit of the card
  * @return 'Spades', 'Clubs', 'Hearts' or 'Diamonds'
  */
  public getSuit(): string {
    return(this.suit);
  }

  /**
  * @desc Getter method for the image of the card
  * @return image
  */
  public getImage(): HTMLImageElement {
    return(this.image);
  }

  /**
  * @desc Returns a string with the card information.
  * @return string as 'value of suit'
  */
  public toString(): string {
    let value: string = this.value.toString();
    switch (value) {
      case '1' : value = 'Ace'; break;
      case '11': value = 'Jack'; break;
      case '12': value = 'Queen'; break;
      case '13': value = 'King'; break;
    }
    return(`${value} of ${this.suit}`);
  }
}