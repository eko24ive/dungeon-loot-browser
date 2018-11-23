import { createSelector } from 'reselect';

import forwardsInTimeFrame from './getForwardsInTimeFrame';

const getForwardsInTimeFrame = state => forwardsInTimeFrame(state);

export default createSelector(
  [
    getForwardsInTimeFrame,
  ],
  (forwards) => {
    if (forwards.length > 0) {
      const items = {};
      const loot = [];

      forwards.forEach((forward, index) => {
        loot.push({
          loot: forward.loot,
          item: forward.item,
          caps: forward.caps,
          materials: forward.materials,
          time: forward.time,
          index,
        });

        if (forward.item !== null) {
          if (items[forward.item]) {
            items[forward.item].amount += 1;
          } else {
            items[forward.item] = {
              amount: 1,
              time: forward.time,
              index,
            };
          }
        }
      });

      const totalItems = [...Object.keys(items).map(name => items[name].amount), 0]
        .reduce((a, b) => a + b);

      return {
        items: Object.keys(items).map(name => ({
          name,
          time: items[name].time,
          amount: items[name].amount,
          index: items[name].index,
          percent: ((items[name].amount * 100) / totalItems).toFixed(1),
        })).sort((prev, next) => -(prev.percent - next.percent)),
        loot,
      };
    }

    return {
      items: [],
      loot: [],
    };
  },
);
