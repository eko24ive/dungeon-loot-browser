import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import getLoot from '../../selectors/getLoot';

import {
  Table, Row as TableRow, Head, Cell,
} from '../../elements/Table/Table';

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
          <Table>
            <Head>
              <Cell>Предмет</Cell>
              <Cell>Количество</Cell>
              <Cell>Шанс</Cell>
              <Cell>Время</Cell>
            </Head>
            {
            items.map(({
              name,
              amount,
              percent,
              time,
              index,
            }) => (
              <TableRow key={index}>
                <Cell>{name}</Cell>
                <Cell>{amount}</Cell>
                <Cell>{percent}%</Cell>
                <Cell>{time}</Cell>
              </TableRow>
            ))
        }
          </Table>
        </Col>
        <Col xs={12} md={6}>
          <Table>
            <Head>
              <Cell>Лут</Cell>
              <Cell>Время</Cell>
            </Head>
            {
            loot.map(({ loot: lootItems, time, index }) => (
              <TableRow key={index}>
                <Cell>{lootItems}</Cell>
                <Cell>{time}</Cell>
              </TableRow>
            ))
          }
          </Table>
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
