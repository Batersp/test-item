import React from 'react';

import { AlertProps, Slide, SlideProps, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Dispatch } from '@reduxjs/toolkit';

import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { appActions, appSelectors } from 'features/Application';
import { SnackbarType } from 'features/Application/applicationTypes';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type TransitionProps = Omit<SlideProps, 'direction'>;

const handleClose =
  (dispatch: Dispatch) => (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(appActions.setAppSnackbarValue({ type: undefined, message: null }));
  };

const Transition =
  (dispatch: Dispatch, snackbar: SnackbarType) =>
  (props: TransitionProps): React.ReactElement => {
    return (
      <Slide {...props} direction="left">
        <Alert
          onClose={handleClose(dispatch)}
          severity={snackbar.type}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Slide>
    );
  };

export const InfoSnackbar = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const snackbar = useAppSelector(appSelectors.getSnackbar);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={!!snackbar.message}
      autoHideDuration={4000}
      onClose={handleClose(dispatch)}
      TransitionComponent={Transition(dispatch, snackbar)}
    />
  );
};
