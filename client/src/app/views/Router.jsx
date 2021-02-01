import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default Router;
