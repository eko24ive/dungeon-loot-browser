import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

import { setActiveDungeon as setActiveDungeonAction } from '../../ducks/activeDungeon';
import dungeonNameMapping from '../../constants/dungeonNameMapping';

const mapStateToProps = state => ({
  activeDungeon: state.get('activeDungeon'),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setActiveDungeonAction,
}, dispatch);

const options = Object.keys(dungeonNameMapping).map(key => ({
  value: key,
  label: dungeonNameMapping[key].name,
}));

const onChange = setActiveDungeon => ({ value }) => {
  setActiveDungeon(value);
};

const Select = ({ setActiveDungeonAction: setActiveDungeon }) => (
  <ReactSelect
    placeholder="Выбери данж"
    options={options}
    onChange={onChange(setActiveDungeon)}
  />
);

Select.propTypes = {
  setActiveDungeonAction: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Select);
