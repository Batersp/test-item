import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStateType, ProfileType } from 'features/Profile/profileTypes';

export const slice = createSlice({
  name: 'profile',
  initialState: {
    profile: {},
  } as InitialStateType,
  reducers: {
    setProfile(state, action: PayloadAction<{ profile: ProfileType }>) {
      state.profile = action.payload.profile;
    },
  },
});
