import { RESET_APP } from './resetApp';
import { initialState } from '../store/store';

export const SET_AVAILABLE_DUNGEONS = 'SET_AVAILABLE_DUNGEONS';

export const setAvailableDungeons = dungeons => ({
  type: SET_AVAILABLE_DUNGEONS,
  dungeons,
});

export default function (state, action) {
  switch (action.type) {
    case SET_AVAILABLE_DUNGEONS:
      return action.dungeons;
    case RESET_APP:
      return initialState.availableDungeons;
    default:
      return state;
  }
}
