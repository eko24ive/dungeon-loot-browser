import { createSelector } from 'reselect';

import forwardsInTimeFrame from './getForwardsInTimeFrame';

const getForwardsInTimeFrame = state => forwardsInTimeFrame(state);
const getItem = (state, item) => item;

export default createSelector(
  [
    getForwardsInTimeFrame,
    getItem,
  ],
  (forwards, item) => {
    if (forwards.length > 0) {
      return forwards.filter(forward => forward.item === item);
    }

    return [];
  },
);
