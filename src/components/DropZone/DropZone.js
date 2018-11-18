import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import { setDungeonsDump as setDungeonsDumpAction } from '../../ducks/dungeonsDump';

const mapStateToProps = state => ({
  dungeonsDump: state.get('dungeonsDump'),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setDungeonsDumpAction,
}, dispatch);

const onDrop = setDungeonsDump => (acceptedFiles) => {
  acceptedFiles.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setDungeonsDump(JSON.parse(reader.result));
    };

    reader.readAsText(file);
  });
};

const DropZone = ({ setDungeonsDumpAction: setDungeonsDump, dungeonsDump }) => (
  dungeonsDump === null && (
  <Dropzone
    accept=".json"
    multiple={false}
    onDrop={onDrop(setDungeonsDump)}
  >
123

  </Dropzone>
  )
);

DropZone.defaultProps = {
  children: null,
};

DropZone.propTypes = {
  setDungeonsDumpAction: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropZone);
