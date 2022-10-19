import { AppRootStateType } from 'app/store';
import { requestStatus } from 'common/enums/requestStatus';
import { SnackbarType } from 'features/Application/applicationTypes';

export const getIsLoading = (state: AppRootStateType): requestStatus => state.app.status;
export const getSnackbar = (state: AppRootStateType): SnackbarType => state.app.snackbar;
