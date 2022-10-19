import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProfileType } from 'features/Profile/profileTypes';

export const slice = createSlice({
  name: 'profile',
  initialState: {
    profile: {} as ProfileType,
  },
  reducers: {
    setProfile(state, action: PayloadAction<{ profile: ProfileType }>) {
      state.profile = action.payload.profile;
    },
  },
});
