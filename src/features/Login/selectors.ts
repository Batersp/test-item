import { AppRootStateType } from 'app/store';

export const getIsLoggedIn = (state: AppRootStateType): boolean => state.login.isLoggedIn;
