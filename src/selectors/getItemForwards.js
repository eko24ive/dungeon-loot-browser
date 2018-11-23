import { createSelector } from 'reselect';

import forwardsInTimeFrame from './getForwardsInTimeFrame';

const getForwardsInTimeFrame = (state, props) => forwardsInTimeFrame(state, props.dungeon);
const getItem = (state, props) => props.item;

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
