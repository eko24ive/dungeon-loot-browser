import { SET_TIME_FILTER } from '../ducks/timeFilter';
import { SET_DUNGEONS_DUMP } from '../ducks/dungeonsDump';
import { SET_DUNGEON } from '../ducks/activeDungeon';
import { SET_AVAILABLE_DUNGEONS } from '../ducks/availableDungeons';
import { RESET_APP } from '../ducks/resetApp';


export default ({ getState }) => next => (action) => {
  const result = next(action);

  switch (action.type) {
    case SET_TIME_FILTER:
      localStorage.setItem('timeFilter', JSON.stringify(getState().get('timeFilter').toJS()));

      return result;
    case SET_DUNGEONS_DUMP:
      localStorage.setItem('dungeonsDump', JSON.stringify(getState().get('dungeonsDump')));

      return result;
    case SET_DUNGEON:
      localStorage.setItem('activeDungeon', getState().get('activeDungeon'));

      return result;
    case SET_AVAILABLE_DUNGEONS:
      localStorage.setItem('availableDungeons', JSON.stringify(getState().get('availableDungeons')));

      return result;
    case RESET_APP:
      localStorage.clear();

      return result;
    default:
      return result;
  }
};
