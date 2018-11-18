import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import { setDungeonsDump as setDungeonsDumpAction } from '../../ducks/dungeonsDump';
import { setAvailableDungeons as setAvailableDungeonsAction } from '../../ducks/availableDungeons';

import DropZoneWrapper from './DropZone.style';

const mapStateToProps = state => ({
  dungeonsDump: state.get('dungeonsDump'),
  availableDungeons: state.get('availableDungeons'),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setDungeonsDumpAction,
  setAvailableDungeonsAction,
}, dispatch);

class DropZone extends Component {
  static state = {
    isDumpValid: true,
  }

  onDrop = ({
    setDungeonsDump,
    setAvailableDungeons,
  }) => (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dungeonsDump = JSON.parse(reader.result);

        const availableDungeons = Object.keys(dungeonsDump).map((dungeonName) => {
          const {
            name,
            technicalName,
          } = dungeonsDump[dungeonName];

          return {
            value: technicalName,
            label: name,
          };
        });


        setAvailableDungeons(availableDungeons);
        setDungeonsDump(dungeonsDump);
      };

      reader.readAsText(file);
    });
  };

  render() {
    const {
      setDungeonsDumpAction: setDungeonsDump,
      setAvailableDungeonsAction: setAvailableDungeons,
      dungeonsDump,
      availableDungeons,
    } = this.props;

    return (dungeonsDump === null && availableDungeons.length === 0) && (
      <DropZoneWrapper>
        <Dropzone
          accept=".json"
          multiple={false}
          onDrop={this.onDrop({
            setDungeonsDump,
            setAvailableDungeons,
          })}
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
    );
  }
}

DropZone.propTypes = {
  dungeonsDump: PropTypes.object.isRequired,
  availableDungeons: PropTypes.array.isRequired,
  setDungeonsDumpAction: PropTypes.func.isRequired,
  setAvailableDungeonsAction: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropZone);
