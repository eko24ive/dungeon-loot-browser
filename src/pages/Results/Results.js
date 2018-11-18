import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import getLoot from '../../selectors/getLoot';

import {
  Table, Row, Head, Cell,
} from '../../elements/Table/Table';

import ResultsWrapper, { ResultBlock } from './Results.style';

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
    <ResultBlock>
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
              <Row key={index}>
                <Cell>{name}</Cell>
                <Cell>{amount}</Cell>
                <Cell>{percent}%</Cell>
                <Cell>{time}</Cell>
              </Row>
            ))
        }
      </Table>
    </ResultBlock>
    <ResultBlock>
      <Table>
        <Head>
          <Cell>Лут</Cell>
          <Cell>Время</Cell>
        </Head>
        {
            loot.map(({ loot: lootItems, time, index }) => (
              <Row key={index}>
                <Cell>{lootItems}</Cell>
                <Cell>{time}</Cell>
              </Row>
            ))
          }
      </Table>
    </ResultBlock>
  </ResultsWrapper>
);

Results.propTypes = {
  items: PropTypes.array.isRequired,
  loot: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
)(Results);
