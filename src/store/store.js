import { createStore, compose, applyMiddleware } from 'redux';
import { Map, fromJS } from 'immutable';

import { combineReducers } from 'redux-immutable';

import localStorageMiddleware from '../middleware/localStorageMiddleware';

import activeDungeonReducer from '../ducks/activeDungeon';
import timeFilterReducer from '../ducks/timeFilter';
import dungeonsDumpReducer from '../ducks/dungeonsDump';
import availableDungeonsReducer from '../ducks/availableDungeons';

const initialState = {
  activeDungeon: null,
  timeFilter: Map({ timeFrom: 0, timeTo: 24 }),
  dungeonsDump: null,
  availableDungeons: [],
};

const rootReducer = combineReducers({
  activeDungeon: activeDungeonReducer,
  timeFilter: timeFilterReducer,
  dungeonsDump: dungeonsDumpReducer,
  availableDungeons: availableDungeonsReducer,
});

const getInitialState = () => {
  if (localStorage.getItem('timeFilter')) {
    initialState.timeFilter = fromJS(JSON.parse(localStorage.getItem('timeFilter')));
  }

  if (localStorage.getItem('dungeonsDump')) {
    initialState.dungeonsDump = JSON.parse(localStorage.getItem('dungeonsDump'));
  }

  if (localStorage.getItem('activeDungeon')) {
    initialState.activeDungeon = localStorage.getItem('activeDungeon');
  }

  if (localStorage.getItem('availableDungeons')) {
    initialState.availableDungeons = JSON.parse(localStorage.getItem('availableDungeons'));
  }

  return Map(initialState);
};

const middleware = applyMiddleware(localStorageMiddleware);

export default createStore(rootReducer, getInitialState(), compose(
  middleware,
));
