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

      return dungeonForwards.filter(({ unixTime }) => {
        const hours = moment(unixTime).hours();

        return Number(timeFrom) <= hours && hours <= Number(timeTo);
      });
    }

    return [];
  },
);
