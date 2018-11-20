import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import getLoot from '../../selectors/getLoot';

import Table from '../../elements/Table/Table';

import ResultsWrapper from './Results.style';

const mapStateToProps = (state) => {
  const { items, loot } = getLoot(state);

  return {
    items,
    loot,
  };
};

const Results = ({
  items,
  loot,
}) => (
  <ResultsWrapper>
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
            }, {
              Header: 'Время',
              accessor: 'time',
              minWidth: 170,
            }]}
          />

        </Col>
        <Col xs={12} md={6}>
          <Table
            data={loot}
            columns={[{
              Header: 'Лут',
              accessor: 'loot',
            }, {
              Header: 'Время',
              accessor: 'time',
            }]}
          />
        </Col>
      </Row>
    </Grid>
  </ResultsWrapper>
);

Results.propTypes = {
  items: PropTypes.array.isRequired,
  loot: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
)(Results);
