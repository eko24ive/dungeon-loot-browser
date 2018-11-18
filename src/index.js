import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import Home from './pages/Home/Home';

import DropZone from './components/DropZone/DropZone';

import Title from './elements/Title/Title';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <DropZone />
      <Title>Dungeon Loot Browser</Title>
      <Route path="/" exact component={Home} />
      <Route path="/:dungeon/:timeFrom/:timeTo" exact component={Home} />
    </Router>
  </Provider>, document.getElementById('root'),
);
