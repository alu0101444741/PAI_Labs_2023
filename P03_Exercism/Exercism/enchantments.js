// @ts-check

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
  return(cards[position]);
}

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
  let modifiedCards = cards;
  modifiedCards[position] = replacementCard;
  return(modifiedCards);
}

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
  let modifiedCards = cards;
  modifiedCards.push(newCard);
  return(modifiedCards);
}

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
  let modifiedCards = cards;
  modifiedCards.splice(position, 1);
  return(modifiedCards);
}

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
  let modifiedCards = cards;
  modifiedCards.pop();
  return(modifiedCards);
}

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
  let modifiedCards = cards;
  modifiedCards.unshift(newCard);
  return(modifiedCards);
}

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
  let modifiedCards = cards;
  modifiedCards.shift();
  return(modifiedCards);
}

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
  return(cards.length === stackSize);
}
