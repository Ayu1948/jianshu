import React from 'react';
import ReactDOM from 'react-dom';
import { Globalstyle } from './style.js';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Globalstyle></Globalstyle>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
