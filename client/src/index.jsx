import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import Router from './app/views/Router';

import './stylesheet.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Helmet>
        <title>Patrick Roelofs</title>
        <meta name="description" content="Patrick Roelofs is a student webdeveloper in the Netherlands." />
        <meta name="language" content="en" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Patrick Roelofs, contact@patrickroelofs.com" />
        <meta name="reply-to" content="contact@patrickroelofs.com" />
        <meta name="url" content="https://patrickroelofs.com" />

        <meta name="og:title" content="Patrick Roelofs" />
        <meta name="og:type" content="portfolio" />
        <meta name="og:url" content="https://patrickroelofs.com" />
        <meta name="og:image" content="%PUBLIC_URL%/metadata/metaimage.png" />
      </Helmet>
      <div className="100vw min-h-screen">
        <Router />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
