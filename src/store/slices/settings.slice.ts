import { createSlice } from '@reduxjs/toolkit';

import { SettingsState } from '../../types/store';

const initialState: SettingsState = {
  playMusic: true,
  playSounds: true,
};

export const SettingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleMusic: (state) => {
      state.playMusic = !state.playMusic;
    },
    toggleSounds: (state) => {
      state.playSounds = !state.playSounds;
    },
  },
});

export const { toggleMusic, toggleSounds } = SettingsSlice.actions;
export default SettingsSlice.reducer;
