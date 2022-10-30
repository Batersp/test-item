import { appActions } from 'features/Application';
import { blogActions } from 'features/Blog';
import { loginActions } from 'features/Login';
import { profileActions } from 'features/Profile';

export type AppActionsType =
  | ReturnType<typeof loginActions.changeLoggedIn>
  | ReturnType<typeof appActions.setAppStatus>
  | ReturnType<typeof appActions.setAppSnackbarValue>
  | ReturnType<typeof appActions.setError>
  | ReturnType<typeof profileActions.setProfile>
  | ReturnType<typeof blogActions.addPost>
  | ReturnType<typeof blogActions.setPosts>
  | ReturnType<typeof blogActions.addComment>
  | ReturnType<typeof blogActions.deleteComment>
  | ReturnType<typeof blogActions.addLike>;
