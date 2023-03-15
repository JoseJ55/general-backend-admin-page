/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import SideNavbar from './Reducers/SideNavbar';

export const store = configureStore({
  reducer: {
    nav: SideNavbar,
  },
});
