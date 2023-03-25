/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import SideNavbar from './Reducers/SideNavbar';
import Endpoints from './Reducers/Endpoints';
import ProfileTab from './Reducers/ProfileTab';

export const store = configureStore({
  reducer: {
    sidenav: SideNavbar,
    endpoints: Endpoints,
    profiletab: ProfileTab,
  },
});
