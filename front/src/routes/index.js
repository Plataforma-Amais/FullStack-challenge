import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Schools } from '../pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/escolas" component={ Schools } />
    </Switch>
  )
}

export default Routes;
