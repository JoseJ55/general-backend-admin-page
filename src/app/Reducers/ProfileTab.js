// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export const profileTabSlice = createSlice({
  name: 'profiletab',
  initialState: {
    toggled: false,
  },
  reducers: {
    toggleSideNav: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.toggled = !state.toggled;
    },
  },
});

export const { toggleSideNav, changeTab } = profileTabSlice.actions;

export default profileTabSlice.reducer;
