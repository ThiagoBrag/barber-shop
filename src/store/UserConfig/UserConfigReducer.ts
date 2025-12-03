import { manageTheme } from '@/utils/manageTheme';
import { getSession, setSession } from '@/utils/storageHelpers';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { UserConfigState } from './UserConfigTypes';

const initialState: UserConfigState = {
  isDarkTheme: getSession('theme') === 'dark',
};

const UserConfigSlice = createSlice({
  name: 'userConfig',
  initialState,
  reducers: {
    setDarkTheme(state) {
      state.isDarkTheme = true;
      setSession('theme', 'dark');
      manageTheme(true);
    },
    setLightTheme(state) {
      state.isDarkTheme = false;
      // Persist explicit light choice so it remains consistent between sessions
      setSession('theme', 'light');
      manageTheme(false);
    },
  },
});

export const userConfigSelector = (state: RootState) => state.userConfig;
export const { setDarkTheme, setLightTheme } = UserConfigSlice.actions;
export default UserConfigSlice.reducer;
