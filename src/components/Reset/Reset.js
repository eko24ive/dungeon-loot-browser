import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { resetApp as resetAppAction } from '../../ducks/resetApp';

import Button from './Reset.style';

const mapDispatchToProps = dispatch => bindActionCreators({
  resetAppAction,
}, dispatch);

const Reset = ({ resetAppAction: resetApp }) => (
  <Button onClick={resetApp}>Reset</Button>
);

Reset.propTypes = {
  resetAppAction: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(Reset);
