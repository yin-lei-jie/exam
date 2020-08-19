import React from 'react';
import './App.module.scss';
// 引入路由
import { HashRouter } from 'react-router-dom';
import config from './router/config';
import RouterView from './router/RouterView';
// 引入useObserver
import { useObserver } from 'mobx-react-lite';
// import useStore from './context/useStore';

function App() {
  // let { user } = useStore;
  return useObserver(() =>
    (<HashRouter>
      <RouterView routes={config}></RouterView>
    </HashRouter>
  ));
}

export default App;
