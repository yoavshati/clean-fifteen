import { Card } from '../card.type';

export interface gameStateState {
  deck: Card[];
  cardsInPlay: Card[];
  cardsInHands: Card[][];

  scores: number[];
  currentRound: number;
  currentPlayerIndex: number;
  lastPlayerWhoGot15: number;
}
