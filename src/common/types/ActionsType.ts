import { appActions } from 'features/Application';
import { loginActions } from 'features/Login';
import { profileActions } from 'features/Profile';

export type AppActionsType =
  | ReturnType<typeof loginActions.changeLoggedIn>
  | ReturnType<typeof appActions.setAppStatus>
  | ReturnType<typeof appActions.setAppSnackbarValue>
  | ReturnType<typeof appActions.setError>
  | ReturnType<typeof profileActions.setProfile>;
