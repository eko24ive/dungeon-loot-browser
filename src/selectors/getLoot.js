import { createSelector } from 'reselect';
import moment from 'moment';

const getActiveDungeon = state => state.get('activeDungeon');
const getTimeFilter = state => state.get('timeFilter');
const getDungeonsDump = state => state.get('dungeonsDump');

export default createSelector(
  [
    getActiveDungeon,
    getDungeonsDump,
    getTimeFilter,
  ],
  (activeDugneon, dump, timeFilter) => {
    if (activeDugneon !== null && dump !== null) {
      const dungeonForwards = dump[activeDugneon].forwards;

      const [timeFrom] = timeFilter.get('timeFrom').split(':');
      const [timeTo] = timeFilter.get('timeTo').split(':');

      const forwardsInTimeFrame = dungeonForwards.filter(({ unixTime }) => {
        const hours = moment(unixTime).hours();

        return Number(timeFrom) <= hours && hours <= Number(timeTo);
      });

      const items = {};
      const loot = [];

      forwardsInTimeFrame.forEach((forward, index) => {
        loot.push({
          loot: forward.loot,
          item: forward.item,
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
