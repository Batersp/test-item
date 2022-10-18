import React from 'react';

import { RoutesPage } from 'common/components/RoutesPage/RoutesPage';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { Header } from 'features/Header/Header';

export const App = (): ReturnComponentType => {
  return (
    <div className="App">
      <Header />
      <RoutesPage />
    </div>
  );
};
