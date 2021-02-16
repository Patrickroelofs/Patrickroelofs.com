import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './home/Home';
import Laterlezer from './projects/laterlezer/Laterlezer';
import Quizzer from './projects/quizzer/Quizzer';

function Router() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={Home} exact />
        <Route path="/projects/laterlezer" component={Laterlezer} />
        <Route path="/projects/quizzer" component={Quizzer} />
      </Switch>
    </AnimatePresence>
  );
}

export default Router;
