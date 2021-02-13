/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './app/views/Router';

import './stylesheet.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen 100vw">
        <Router />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
