import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import { setDungeonsDump as setDungeonsDumpAction } from '../../ducks/dungeonsDump';

import DropZoneWrapper from './DropZone.style';

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
    <DropZoneWrapper>
      <Dropzone
        accept=".json"
        multiple={false}
        onDrop={onDrop(setDungeonsDump)}
        style={{
          cursor: 'pointer',
          top: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          fontSize: '34px',
        }}
        activeStyle={{
          backgroundColor: '#effff0',
        }}
      >
        Перетащи дамп сюда, либо клинки в любом месте что бы открыть файловый диалог
      </Dropzone>
    </DropZoneWrapper>
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
