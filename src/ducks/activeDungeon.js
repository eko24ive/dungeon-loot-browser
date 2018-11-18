export const SET_DUNGEON = 'SET_DUNGEON';

export const setActiveDungeon = dungeon => ({
  type: SET_DUNGEON,
  dungeon,
});

export default function (state, action) {
  switch (action.type) {
    case SET_DUNGEON:
      return action.dungeon;
    default:
      return state;
  }
}
