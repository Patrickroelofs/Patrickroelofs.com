import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';

function Router() {
  return (
    <Switch>

      <Route path="/">
        <Home />
      </Route>

    </Switch>
  );
}

export default Router;
