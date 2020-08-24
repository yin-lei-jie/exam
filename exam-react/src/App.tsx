import React from 'react';
import './App.scss';
// 引入路由配置
import routerConfig from './router/router';
import RouterView from './router/RouterView';
import { IRouterItem } from './utils/interface';

function App() {
  return (
    <div className="App">
      <RouterView routes={routerConfig.routes as IRouterItem[]}></RouterView>
    </div>
  );
}

export default App;
