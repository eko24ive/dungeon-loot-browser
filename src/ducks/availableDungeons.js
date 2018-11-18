export const SET_AVAILABLE_DUNGEONS = 'SET_AVAILABLE_DUNGEONS';

export const setAvailableDungeons = dungeons => ({
  type: SET_AVAILABLE_DUNGEONS,
  dungeons,
});

export default function (state, action) {
  switch (action.type) {
    case SET_AVAILABLE_DUNGEONS:
      return action.dungeons;
    default:
      return state;
  }
}
