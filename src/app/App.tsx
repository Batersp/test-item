import React, { useEffect } from 'react';

import { LinearProgress } from '@mui/material';

import { RoutesPage } from 'common/components/RoutesPage/RoutesPage';
import { InfoSnackbar } from 'common/components/Snackbar/Snackbar';
import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { appSelectors } from 'features/Application';
import { blogAsyncActions } from 'features/Blog';
import { Header } from 'features/Header/Header';

export const App = (): ReturnComponentType => {
  const requestStatus = useAppSelector(appSelectors.getIsLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(blogAsyncActions.getPostsTC());
  }, [dispatch]);

  return (
    <div className="App">
      <InfoSnackbar />
      {requestStatus === 'loading' && (
        <div style={{ position: 'absolute', left: 0, right: 0 }}>
          <LinearProgress />
        </div>
      )}
      <Header />
      <RoutesPage />
    </div>
  );
};
