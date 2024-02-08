import { configureStore } from '@reduxjs/toolkit';

import gameState from './slices/game-state.slice';
import settings from './slices/settings.slice';

export const store = configureStore({
  reducer: { gameState, settings },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
