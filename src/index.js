import React from 'react';
import {render} from 'react-dom';

import App from './App.js';
import './index.css';

const rootElement=document.getElementById('root');

render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  rootElement
)
