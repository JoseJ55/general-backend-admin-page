// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export const endpointsSlice = createSlice({
  name: 'endpoints',
  initialState: {
    activeEndpoint: {},
  },
  reducers: {
    changeActiveEndpoint: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.activeEndpoint = { ...action.payload };
    },
  },
});

export const { changeActiveEndpoint } = endpointsSlice.actions;

export default endpointsSlice.reducer;
