import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import activeDungeonReducer from '../ducks/activeDungeon';
import timeFilterReducer from '../ducks/timeFilter';
import dungeonsDumpReducer from '../ducks/dungeonsDump';

const reducers = combineReducers({
  activeDungeon: activeDungeonReducer,
  timeFilter: timeFilterReducer,
  dungeonsDump: dungeonsDumpReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
