import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setActiveDungeon as setActiveDungeonAction } from '../../ducks/activeDungeon';

import Select from '../../elements/Select/Select';

const mapStateToProps = state => ({
  activeDungeon: state.get('activeDungeon'),
  availableDungeons: state.get('availableDungeons'),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setActiveDungeonAction,
}, dispatch);


const onChange = setActiveDungeon => (e) => {
  setActiveDungeon(e.target.value);
};

const DungeonSelect = ({
  setActiveDungeonAction: setActiveDungeon,
  availableDungeons,
  activeDungeon,
}) => (
  <Select
    placeholder="Выбери данж"
    onChange={onChange(setActiveDungeon)}
    defaultValue={activeDungeon}
  >
    {
      availableDungeons.map(dungeon => (
        <option key={`dungeon-item-${dungeon.value}`} value={dungeon.value}>{dungeon.label}</option>
      ))
    }
  </Select>
);

DungeonSelect.defaultProps = {
  activeDungeon: null,
};

DungeonSelect.propTypes = {
  setActiveDungeonAction: PropTypes.func.isRequired,
  availableDungeons: PropTypes.array.isRequired,
  activeDungeon: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DungeonSelect);
