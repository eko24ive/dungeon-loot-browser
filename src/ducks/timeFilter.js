import { RESET_APP } from './resetApp';
import { initialState } from '../store/store';

export const SET_TIME_FILTER = 'SET_TIME_FILTER';

export const setTimeFilter = (
  key,
  value,
) => ({
  type: SET_TIME_FILTER,
  key,
  value,
});

export default function (state, action) {
  const { key, value } = action;

  switch (action.type) {
    case SET_TIME_FILTER:
      return state.set(key, value);
    case RESET_APP:
      return initialState.timeFilter;
    default:
      return state;
  }
}
