import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import getLoot from '../../selectors/getLoot';

import Table from '../../elements/Table/Table';
import VerticalDelimiter from '../../elements/VerticalDelimiter/VerticalDelimiter';

import BrowseWrapper from './Browse.style';

const mapStateToProps = (state) => {
  const { items, loot } = getLoot(state);

  return {
    items,
    loot,
    activeDungeon: state.get('activeDungeon'),
  };
};

const Browse = ({
  items,
  loot,
  activeDungeon,
}) => (
  <BrowseWrapper>
    <Grid fluid>
      <Row>
        <Col xs={12} md={6}>
          <Table
            data={items}
            columns={[{
              Header: 'Предмет',
              accessor: 'name',
              minWidth: 150,
            }, {
              Header: 'Кол-во',
              accessor: 'amount',
              minWidth: 70,
            }, {
              Header: 'Шанс',
              accessor: 'percent',
              minWidth: 70,
              // eslint-disable-next-line react/prop-types
              Cell: ({ value }) => `${value}%`,
            }, {
              Header: 'Просмотреть',
              accessor: 'name',
              id: 'itemLink',
              sortable: false,
              // eslint-disable-next-line react/prop-types
              Cell: ({ value }) => (
                <Link to={`browse/${activeDungeon}/${value}`}>
                  <FontAwesomeIcon icon="eye" />
                </Link>
              ),
            }]}
          />

        </Col>
        <VerticalDelimiter />
        <Col xs={12} md={6}>
          <Table
            data={loot}
            columns={[{
              Header: 'Лут',
              accessor: 'loot',
            }, {
              Header: 'Предмет',
              accessor: 'item',
              // eslint-disable-next-line react/prop-types
              Cell: ({ value }) => (value || 'Ничего'),
            }, {
              Header: 'Время',
              accessor: 'time',
            }]}
          />
        </Col>
      </Row>
    </Grid>
  </BrowseWrapper>
);

Browse.propTypes = {
  items: PropTypes.array.isRequired,
  loot: PropTypes.array.isRequired,
  activeDungeon: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
)(Browse);
