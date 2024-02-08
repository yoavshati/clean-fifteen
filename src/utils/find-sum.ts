import { Card } from '../types';

/**
 * Finds the sum of the values of an array of cards
 * 
 * @param cards Array of cards to be added up.
 * @returns Numerical value of cards' sum.
 */
export const findSum = (cards: Card[]) =>
	cards.reduce((partialSum, card) => partialSum + card.value, 0);
