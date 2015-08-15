import React from 'react';
import {Route, notFoundRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Test from './components/Test';

export default (
  <Route handler={App}>
    <Route path='/' handler={Home} />
    <Route path='/test' handler={Test} />
  </Route>
);