import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import Home from './pages/Home/Home';
import Results from './pages/Results/Results';

import DropZone from './components/DropZone/DropZone';

import AppWrapper from './elements/AppWrapper/AppWrapper';
import Title from './elements/Title/Title';

ReactDOM.render(
  <AppWrapper>
    <Provider store={store}>
      <Router>
        <div>
          <DropZone />
          <Title>Dungeon Loot Browser</Title>
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={Results} />
        </div>
      </Router>
    </Provider>
  </AppWrapper>,
  document.getElementById('root'),
);
