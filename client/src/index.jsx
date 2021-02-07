import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './app/views/Router';

import './stylesheet.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="100vw min-h-screen">
        <Router />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
