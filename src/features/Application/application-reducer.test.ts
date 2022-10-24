import { requestStatus } from 'common/enums/requestStatus';
import { snackbarType } from 'common/enums/snackbarType';
import { InitialStateType, SnackbarType } from 'features/Application/applicationTypes';
import { appActions, appReducer } from 'features/Application/index';

let startState: InitialStateType;

beforeEach(() => {
  startState = {
    status: requestStatus.SUCCEEDED,
    snackbar: {} as SnackbarType,
    error: '',
  };
});

test('correct error message should be set', () => {
  const endState = appReducer(startState, appActions.setError({ error: 'some error' }));

  expect(endState.error).toBe('some error');
});

test('correct status should be set', () => {
  const endState = appReducer(
    startState,
    appActions.setAppStatus({ status: requestStatus.FAILED }),
  );

  expect(endState.status).toBe(requestStatus.FAILED);
});

test('correct type and message in snackbar should be set', () => {
  const endState = appReducer(
    startState,
    appActions.setAppSnackbarValue({ type: snackbarType.ERROR, message: 'some error' }),
  );

  expect(endState.snackbar).toEqual({ type: snackbarType.ERROR, message: 'some error' });
});
