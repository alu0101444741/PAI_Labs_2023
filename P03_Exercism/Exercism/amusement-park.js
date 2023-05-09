/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  return({name: name, age: age, ticketId: ticketId})
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  let newVisitor = visitor;
  newVisitor.ticketId = null;
  return (newVisitor);
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  let result = 'unknown ticket id';
  if (tickets.hasOwnProperty(ticketId)) {
    if (tickets[ticketId] === null) {
      result = 'not sold';
    }
    else {
      result = 'sold to ' + tickets[ticketId];
    }
  }
  return(result);
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  let result = 'invalid ticket !!!';
  if (tickets.hasOwnProperty(ticketId)) {
    if (tickets[ticketId] !== null) {
      result = tickets[ticketId];
    }
  }
  return(result);
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  let result = undefined;
  if (visitor.hasOwnProperty('gtc')) {
    result = visitor['gtc']['version'];
  }
  return(result);
}
