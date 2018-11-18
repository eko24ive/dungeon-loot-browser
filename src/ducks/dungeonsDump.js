const SET_DUNGEONS_DUMP = 'SET_DUNGEONS_DUMP';

export const setDungeonsDump = dump => ({
  type: SET_DUNGEONS_DUMP,
  dump,
});

export default function (state = {
  blackMesa: {
    name: '🗨Черная Меза',
    distance: '74км',
    technicalName: 'blackMesa',
    forwards: [{
      item: '💣Судный день',
      caps: 3567,
      materials: 3567,
      loot: ' 🔩Иридий ×9,  Минизаряд ×3, Подорожник ×3 💪Сила +40  ❤️Живучесть +30',
      time: '09.11.2018 13:58',
      unixTime: 1541764716000,
    }, {
      item: '💣Судный день',
      caps: 3564,
      materials: 3564,
      loot: ' 💾Микрочип ×6,  Минизаряд ×1, Фольга! ×2',
      time: '02.11.2018 17:36',
      unixTime: 1541173009000,
    }, {
      item: '💣Судный день',
      caps: 3567,
      materials: 3567,
      loot: ' 🔩Иридий ×11,  Вольфрам ×1, Провода ×2 💪Сила +40  ❤️Живучесть +30',
      time: '22.10.2018 11:53',
      unixTime: 1540198383000,
    }],
  },
  sewerPipe: {
    name: '🚽 Сточная труба',
    distance: '23км',
    technicalName: 'sewerPipe',
    forwards: [{
      item: null,
      caps: 153,
      materials: 153,
      loot: ' 🔹Кварц ×1,  Воздушный фильтр ×4, Потенциометр ×5,  Батарейка BIOS',
      time: '01.11.2018 16:58',
      unixTime: 1541084329000,
    }, {
      item: null,
      caps: 157,
      materials: 157,
      loot: ' 🔹Кварц ×4,  Фольга! ×3, Фольга! ×4,  Батарейка BIOS',
      time: '14.11.2018 08:29',
      unixTime: 1542176961000,
    }, {
      item: null,
      caps: 154,
      materials: 154,
      loot: ' 🔹Кварц ×3,  Потенциометр ×2, Тряпка ×3,  Батарейка BIOS',
      time: '16.11.2018 09:55',
      unixTime: 1542354951000,
    }, {
      item: null,
      caps: 153,
      materials: 153,
      loot: ' 🔹Кварц ×1,  Сталь ×3, Транзистор ×2,  Батарейка BIOS',
      time: '16.11.2018 18:14',
      unixTime: 1542384851000,
    }, {
      item: null,
      caps: 155,
      materials: 155,
      loot: ' 🔹Кварц ×5,  Плазма ×1, Подорожник ×2,  Батарейка BIOS',
      time: '18.11.2018 08:13',
      unixTime: 1542521580000,
    }],
  },
}, action) {
  switch (action.type) {
    case SET_DUNGEONS_DUMP:
      return action.dump;
    default:
      return state;
  }
}
