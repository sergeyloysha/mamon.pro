import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';

import history from './history'
import { Home, Resume } from './views'

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/cv/:id' component={Resume} />
        <Route path='/' exact component={Home} />
        <Route path='*' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
