const SET_DUNGEONS_DUMP = 'SET_DUNGEONS_DUMP';

export const setDungeonsDump = dump => ({
  type: SET_DUNGEONS_DUMP,
  dump,
});

export default function (state = null, action) {
  switch (action.type) {
    case SET_DUNGEONS_DUMP:
      return action.dump;
    default:
      return state;
  }
}
