import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import getItemForwards from '../../selectors/getItemForwards';

import Table from '../../elements/Table/Table';

import BrowseWrapper from './Browse.style';

const mapStateToProps = (state, { match }) => ({
  forwards: getItemForwards(state, {
    item: match.params.item,
    dungeon: match.params.dungeon,
  }),
});

const Browse = ({
  forwards,
}) => (
  <BrowseWrapper>
    <Grid fluid>
      <Row>
        <Col md={12}>
          <Table
            data={forwards}
            columns={[{
              Header: 'Предмет',
              accessor: 'item',
              // eslint-disable-next-line react/prop-types
              Cell: ({ value }) => (value || 'Ничего'),
            }, {
              Header: 'Время',
              accessor: 'time',
            }, {
              Header: 'Лут',
              accessor: 'loot',
            }, {
              Header: '🕳',
              accessor: 'caps',
            }, {
              Header: '📦',
              accessor: 'materials',
            }]}
          />

        </Col>
      </Row>
    </Grid>
  </BrowseWrapper>
);

Browse.propTypes = {
  forwards: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
)(Browse);
