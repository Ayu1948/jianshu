import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Globalstyle } from './style.js';
import { IconFont } from "./statics/iconfont/iconfont";

ReactDOM.render(
  <React.StrictMode>
    <Globalstyle></Globalstyle>
    <IconFont></IconFont>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
