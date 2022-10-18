import { combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import { AppActionsType } from 'common/types/ActionsType';
import { loginReducer } from 'features/Login';

export const rootReducer = combineReducers({
  login: loginReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type RootReducerType = typeof rootReducer;

export type AppRootStateType = ReturnType<RootReducerType>;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>;
