import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: true,
  },
  reducers: {
    changeLoggedIn(state, action: PayloadAction<{ value: boolean }>) {
      state.isLoggedIn = action.payload.value;
    },
  },
});

export const { changeLoggedIn } = slice.actions;
