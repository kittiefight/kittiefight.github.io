import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import store from './store';
import App from './components/App';
import './index.scss';
import authCheck from './utils/authCheck';

authCheck();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
