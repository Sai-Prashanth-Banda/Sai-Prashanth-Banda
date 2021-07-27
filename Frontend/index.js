import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hookscomponent from './Hookescomponent'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Hookscomponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
