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
    if (activeDugneon) {
      const dungeonForwards = dump[activeDugneon].forwards;

      const timeFrom = timeFilter.get('timeFrom');
      const timeTo = timeFilter.get('timeTo');

      return dungeonForwards.filter(({ unixTime }) => {
        const hours = moment(unixTime).hours();

        return timeFrom >= hours && hours <= timeTo;
      });
    }

    return {
      items: [],
      loot: [],
    };
  },
);
