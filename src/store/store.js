/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import { Map, fromJS } from 'immutable';

import { combineReducers } from 'redux-immutable';

import localStorageMiddleware from '../middleware/localStorageMiddleware';

import activeDungeonReducer from '../ducks/activeDungeon';
import timeFilterReducer from '../ducks/timeFilter';
import dungeonsDumpReducer from '../ducks/dungeonsDump';
import availableDungeonsReducer from '../ducks/availableDungeons';

export const initialState = {
  activeDungeon: null,
  timeFilter: Map({ timeFrom: '00:00', timeTo: '24:00' }),
  dungeonsDump: null,
  availableDungeons: [],
};

const defaultState = Object.assign({}, initialState);

const rootReducer = combineReducers({
  activeDungeon: activeDungeonReducer,
  timeFilter: timeFilterReducer,
  dungeonsDump: dungeonsDumpReducer,
  availableDungeons: availableDungeonsReducer,
});

const getInitialState = () => {
  if (localStorage.getItem('timeFilter')) {
    defaultState.timeFilter = fromJS(JSON.parse(localStorage.getItem('timeFilter')));
  }

  if (localStorage.getItem('dungeonsDump')) {
    defaultState.dungeonsDump = JSON.parse(localStorage.getItem('dungeonsDump'));
  }

  if (localStorage.getItem('activeDungeon')) {
    defaultState.activeDungeon = localStorage.getItem('activeDungeon');
  }

  if (localStorage.getItem('availableDungeons')) {
    defaultState.availableDungeons = JSON.parse(localStorage.getItem('availableDungeons'));
  }

  return Map(defaultState);
};

const middleware = applyMiddleware(localStorageMiddleware);

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

export default createStore(rootReducer, getInitialState(), composeEnhancers(
  middleware,
));
