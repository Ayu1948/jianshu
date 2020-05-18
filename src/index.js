import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Globalstyle } from './style.js';
import { IconFont } from "./statics/iconfont/iconfont";

ReactDOM.render(
  <Fragment>
    <Globalstyle></Globalstyle>
    <IconFont></IconFont>
    <App />
  </Fragment>,
  document.getElementById('root')
);
