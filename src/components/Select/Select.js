import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

import { setActiveDungeon as setActiveDungeonAction } from '../../ducks/activeDungeon';

import SelectWrapper from './Select.style';

const mapStateToProps = state => ({
  activeDungeon: state.get('activeDungeon'),
  availableDungeons: state.get('availableDungeons'),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setActiveDungeonAction,
}, dispatch);


const onChange = setActiveDungeon => ({ value }) => {
  setActiveDungeon(value);
};

const Select = ({ setActiveDungeonAction: setActiveDungeon, availableDungeons }) => (
  <SelectWrapper>
    <ReactSelect
      placeholder="Выбери данж"
      options={availableDungeons}
      onChange={onChange(setActiveDungeon)}
    />
  </SelectWrapper>
);

Select.propTypes = {
  setActiveDungeonAction: PropTypes.func.isRequired,
  availableDungeons: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Select);
