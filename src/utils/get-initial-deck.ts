import { Card } from '../types';

export const ONE_TO_TEN: Card['value'][] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const SUITS: Card['suit'][] = ['Spade', 'Club', 'Heart', 'Diamond'];

export const getFullDeck = (): Card[] =>
	ONE_TO_TEN.flatMap((value) => SUITS.map((suit) => ({ value, suit })));
