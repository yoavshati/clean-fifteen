import { Card } from '../card.type';

export interface GameStateState {
  deck: Card[];
  cardsInPlay: Card[];
  cardsInHands: Card[][];

  scores: number[];
  currentRound: number;
  currentPlayerIndex: number;
  lastPlayerWhoGot15: number;
}
