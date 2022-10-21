import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authApi } from 'api/authApi';
import { requestStatus } from 'common/enums/requestStatus';
import { snackbarType } from 'common/enums/snackbarType';
import { appActions } from 'features/Application';
import { loginActions } from 'features/Login/index';
import { LoginType } from 'features/Login/loginTypes';
import { profileActions } from 'features/Profile';
import { ProfileType } from 'features/Profile/profileTypes';

const requestTime = 3000;

const loginTC = createAsyncThunk(
  'login/loginTC',
  async (param: LoginType, { dispatch }) => {
    try {
      dispatch(appActions.setAppStatus({ status: requestStatus.LOADING }));
      setTimeout(async () => {
        const response = await authApi.login();
        const mockUser = response.data.find(
          ({ name, password }) => name === param.name && password === param.password,
        );

        if (mockUser) {
          dispatch(
            profileActions.setProfile({
              profile: {
                name: mockUser.name,
                status: mockUser.status,
                photo: mockUser.photo,
                pets: mockUser.pets,
              },
            }),
          );
          dispatch(loginActions.changeLoggedIn({ value: true }));
          dispatch(appActions.setError({ error: '' }));
          dispatch(
            appActions.setAppSnackbarValue({
              type: snackbarType.SUCCESS,
              message: 'Вы успешно авторизировались',
            }),
          );
        } else {
          dispatch(appActions.setError({ error: 'Неверный логин или пароль' }));
          dispatch(
            appActions.setAppSnackbarValue({
              type: snackbarType.ERROR,
              message: 'Неверный логин или пароль',
            }),
          );
        }
        dispatch(appActions.setAppStatus({ status: requestStatus.SUCCEEDED }));
      }, requestTime);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  },
);

const logoutTC = createAsyncThunk('login/logoutTC', async (param, { dispatch }) => {
  try {
    dispatch(appActions.setAppStatus({ status: requestStatus.LOADING }));
    setTimeout(async () => {
      dispatch(loginActions.changeLoggedIn({ value: false }));
      dispatch(profileActions.setProfile({ profile: {} as ProfileType }));
      dispatch(appActions.setAppStatus({ status: requestStatus.SUCCEEDED }));
      dispatch(
        appActions.setAppSnackbarValue({
          type: snackbarType.SUCCESS,
          message: 'Вы успешно вышли',
        }),
      );
    }, requestTime);
    // eslint-disable-next-line no-empty
  } catch (e) {}
});

export const asyncActions = {
  loginTC,
  logoutTC,
};

export const slice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    changeLoggedIn(state, action: PayloadAction<{ value: boolean }>) {
      state.isLoggedIn = action.payload.value;
    },
  },
});
