import React from 'react';

import { RoutesPage } from 'common/components/RoutesPage/RoutesPage';
import { InfoSnackbar } from 'common/components/Snackbar/Snackbar';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { Header } from 'features/Header/Header';

export const App = (): ReturnComponentType => {
  return (
    <div className="App">
      <InfoSnackbar />
      <Header />
      <RoutesPage />
    </div>
  );
};
