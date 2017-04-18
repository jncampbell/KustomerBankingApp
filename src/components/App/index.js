import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {createStore} from 'redux';
import PropTypes from 'prop-types';
import Nav from '../../components/Nav';
import Home from '../../components/Home';

const App = () => (
  <Router component={App}>
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
    </div>
  </Router>
);

export default App;
