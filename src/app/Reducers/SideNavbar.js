// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export const sideNavSlice = createSlice({
  name: 'sidenav',
  initialState: {
    toggled: true,
    currentTab: 'dashboard',
  },
  reducers: {
    toggleSideNav: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.toggled = !state.toggled;
    },
    changeTab: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.currentTab = action.payload;
    },
  },
});

export const { toggleSideNav, changeTab } = sideNavSlice.actions;

export default sideNavSlice.reducer;
