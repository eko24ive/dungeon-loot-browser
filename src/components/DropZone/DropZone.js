import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import { setDungeonsDump as setDungeonsDumpAction } from '../../ducks/dungeonsDump';
import { setAvailableDungeons as setAvailableDungeonsAction } from '../../ducks/availableDungeons';
import { setActiveDungeon as setActiveDungeonAction } from '../../ducks/activeDungeon';

import validateDump from '../../utils/validateDump';

import DropZoneWrapper, { Text, NotificationsWrapper } from './DropZone.style';

const mapStateToProps = state => ({
  dungeonsDump: state.get('dungeonsDump'),
  availableDungeons: state.get('availableDungeons'),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setDungeonsDumpAction,
  setAvailableDungeonsAction,
  setActiveDungeonAction,
}, dispatch);

class DropZone extends Component {
  state = {
    isDumpValid: true,
  }

  onDrop = ({
    setDungeonsDump,
    setAvailableDungeons,
    setActiveDungeon,
  }) => (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dungeonsDump = JSON.parse(reader.result);

        if (validateDump(dungeonsDump)) {
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
          setActiveDungeon(availableDungeons[0].value);

          this.setState(() => ({
            isDumpValid: true,
          }));
        } else {
          this.setState(() => ({
            isDumpValid: false,
          }));
        }
      };

      reader.readAsText(file);
    });
  };

  render() {
    const {
      setDungeonsDumpAction: setDungeonsDump,
      setAvailableDungeonsAction: setAvailableDungeons,
      setActiveDungeonAction: setActiveDungeon,
      dungeonsDump,
      availableDungeons,
    } = this.props;

    const {
      isDumpValid,
    } = this.state;

    return (dungeonsDump === null || availableDungeons.length === 0) && (
      <DropZoneWrapper>
        <Dropzone
          accept=".json"
          multiple={false}
          onDrop={this.onDrop({
            setDungeonsDump,
            setAvailableDungeons,
            setActiveDungeon,
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
            fontFamily: 'arial',
            flexDirection: 'column',
          }}
          activeStyle={{
            backgroundColor: '#effff0',
          }}
        >
          <Text>
            Перетащи дамп сюда, либо клинки в любом месте что бы открыть файловый диалог
          </Text>

          {!isDumpValid && <Text error>Это не похоже на корректный дамп</Text>}
        </Dropzone>
        <NotificationsWrapper>
          <Text>
            Дамп можно взять у бота <a href="https://t.me/DungeonMasterRiBot">@DungeonMasterRiBot</a>
          </Text>
        </NotificationsWrapper>
      </DropZoneWrapper>
    );
  }
}

DropZone.defaultProps = {
  dungeonsDump: null,
};

DropZone.propTypes = {
  dungeonsDump: PropTypes.object,
  availableDungeons: PropTypes.array.isRequired,
  setDungeonsDumpAction: PropTypes.func.isRequired,
  setAvailableDungeonsAction: PropTypes.func.isRequired,
  setActiveDungeonAction: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropZone);
