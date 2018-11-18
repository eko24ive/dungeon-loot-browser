import { Map } from 'immutable';

const SET_TIME_FILTER = 'SET_TIME_FILTER';

export const setTimeFilter = ({
  timeFrom,
  timeTo,
}) => ({
  type: SET_TIME_FILTER,
  timeFrom,
  timeTo,
});

export default function (state = Map({
  timeFrom: 0,
  timeTo: 24,
}), action) {
  const { timeFrom, timeTo } = action;

  switch (action.type) {
    case SET_TIME_FILTER:
      return state.set('timeFrom', timeFrom).set('timeTo', timeTo);
    default:
      return state;
  }
}
