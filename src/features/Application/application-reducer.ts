import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { requestStatus } from 'common/enums/requestStatus';
import { snackbarType } from 'common/enums/snackbarType';
import { InitialStateType } from 'features/Application/applicationTypes';

export const slice = createSlice({
  name: 'app',
  initialState: {
    status: requestStatus.SUCCEEDED,
    snackbar: {},
    error: '',
  } as InitialStateType,
  reducers: {
    setAppStatus(state, action: PayloadAction<{ status: requestStatus }>) {
      state.status = action.payload.status;
    },
    setAppSnackbarValue(
      state,
      action: PayloadAction<{ type: snackbarType | undefined; message: string | null }>,
    ) {
      state.snackbar = action.payload;
    },
    setError(state, action: PayloadAction<{ error: string }>) {
      state.error = action.payload.error;
    },
  },
});
