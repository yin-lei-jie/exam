import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from './context/StoreContext';
import store from './store/index';
import 'antd/dist/antd.css';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);