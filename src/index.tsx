import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.scss';
import App from './App';

import { Store } from './redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router basename={'/'}>
    <Provider store={Store()}>
      <App />
    </Provider>
  </Router>
);

