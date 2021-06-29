import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Schools, Login, Classes } from '../pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/escolas' component={Schools} />
      <Route exact path='/:escolaId/turma' component={Classes} />
    </Switch>
  );
};

export default Routes;
