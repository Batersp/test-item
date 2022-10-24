import { requestStatus } from 'common/enums/requestStatus';
import { snackbarType } from 'common/enums/snackbarType';

export type InitialStateType = {
  status: requestStatus;
  snackbar: SnackbarType;
  error: string;
};

export type SnackbarType = {
  type: snackbarType | undefined;
  message: string | null;
};
