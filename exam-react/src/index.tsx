import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 引入mobx的store
import store from './store';
import StoreContext from './context/StoreContext';

// 引入路由模式
import { HashRouter } from 'react-router-dom'
// 引入antd全局样式
import 'antd/dist/antd.css';

ReactDOM.render(
    <StoreContext.Provider value={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </StoreContext.Provider>,
  document.getElementById('root')
);
