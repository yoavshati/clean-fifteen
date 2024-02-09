import { Card } from '../card.type';

export interface CardSelectionState {
  commonCards: Card[];
  cardFromHand: Card | null;
}
