export default (dump) => {
  const keys = Object.keys(dump);


  return keys.every((key) => {
    const dungeon = dump[key];

    return (
      dungeon.name !== undefined
      && dungeon.distance !== undefined
      && dungeon.technicalName !== undefined
      && dungeon.forwards !== undefined && dungeon.forwards.length !== undefined
    );
  });
};
