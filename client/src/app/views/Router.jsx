import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import LaterLezer from './projects/LaterLezer';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/projects/laterlezer" component={LaterLezer} />
    </Switch>
  );
}

export default Router;
