import { combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import { AppActionsType } from 'common/types/ActionsType';
import { appReducer } from 'features/Application';
import { blogReducer } from 'features/Blog';
import { loginReducer } from 'features/Login';
import { profileReducer } from 'features/Profile';

export const rootReducer = combineReducers({
  login: loginReducer,
  app: appReducer,
  profile: profileReducer,
  blog: blogReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type RootReducerType = typeof rootReducer;

export type AppRootStateType = ReturnType<RootReducerType>;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>;
