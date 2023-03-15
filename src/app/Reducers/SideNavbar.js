// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export const sideNavSlice = createSlice({
  name: 'sidenav',
  initialState: {
    toggled: true,
  },
  reducers: {
    toggleSideNav: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.toggled = !state.toggled;
    },
  },
});

export const { toggleSideNav } = sideNavSlice.actions;

export default sideNavSlice.reducer;
