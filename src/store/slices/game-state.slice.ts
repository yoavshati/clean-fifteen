import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Card } from '../../types';
import { GameStateState } from '../../types/store';
import { findSum, getFullDeck } from '../../utils';

const initialState: GameStateState = {
  deck: getFullDeck(),
  cardsInPlay: [],
  cardsInHands: [],

  scores: [],
  currentRound: 0,
  currentPlayerIndex: 0,
  lastPlayerWhoGot15: 0,
};

export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    resetState: () => initialState,
    startGame: () => {},
    startRound: () => {},
    play15: (
      state,
      {
        payload: { commonCards, cardFromHand },
      }: PayloadAction<{
        commonCards: Card[];
        cardFromHand: Card;
      }>
    ) => {
      if (findSum([...commonCards, cardFromHand]) !== 15) {
        throw Error('Someone miscalculated and somehow it got through');
      }

      state.cardsInPlay = state.cardsInPlay.filter((cardInPlay) =>
        commonCards.every((commonCard) => !commonCard.sameAs(cardInPlay))
      );

      state.cardsInHands[state.currentPlayerIndex] = state.cardsInHands[
        state.currentPlayerIndex
      ].filter((cardInPlay) => !cardFromHand.sameAs(cardInPlay));

      state.lastPlayerWhoGot15 = state.currentPlayerIndex;

      // clean 15
      if (state.cardsInPlay.length === 0)
        state.scores[state.currentPlayerIndex]++;

      // go to next player or loop around to 0
      state.currentPlayerIndex =
        (state.currentPlayerIndex + 1) % state.scores.length;
    },
  },
});

export const { resetState, startGame, startRound, play15 } =
  gameStateSlice.actions;
export default gameStateSlice.reducer;
