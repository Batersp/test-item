import React from 'react';

// eslint-disable-next-line import/order
import ReactDOM from 'react-dom/client';

import './index.css';
import { HashRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import { App } from 'app/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);

reportWebVitals();
