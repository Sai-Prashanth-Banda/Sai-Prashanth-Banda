import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Lifecycle from './Lifecycle';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Lifecycle/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
