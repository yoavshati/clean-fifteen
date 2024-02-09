import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Card } from '../../types';
import { CardSelectionState } from '../../types/store';

const initialState: CardSelectionState = {
  commonCards: [],
  cardFromHand: null,
};

export const CardSelectionSlice = createSlice({
  name: 'cardSelection',
  initialState,
  reducers: {
    selectCardFromHand: (state, { payload: card }: PayloadAction<Card>) => {
      state.cardFromHand = card;
    },
    deselectCardFromHand: (state) => {
      state.cardFromHand = null;
    },
    selectCommonCard: (state, { payload: card }: PayloadAction<Card>) => {
      state.commonCards.push(card);
    },
    deselectCommonCard: (state, { payload: card }: PayloadAction<Card>) => {
      state.commonCards = state.commonCards.filter(
        (commonCard) => !commonCard.sameAs(card),
      );
    },
  },
});

export const {} = CardSelectionSlice.actions;
export default CardSelectionSlice.reducer;
