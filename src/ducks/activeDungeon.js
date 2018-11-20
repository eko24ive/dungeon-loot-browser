import { RESET_APP } from './resetApp';
import { initialState } from '../store/store';

export const SET_DUNGEON = 'SET_DUNGEON';

export const setActiveDungeon = dungeon => ({
  type: SET_DUNGEON,
  dungeon,
});

export default function (state, action) {
  switch (action.type) {
    case SET_DUNGEON:
      return action.dungeon;
    case RESET_APP:
      return initialState.activeDungeon;
    default:
      return state;
  }
}
