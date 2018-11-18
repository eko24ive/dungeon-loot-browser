import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import getLoot from '../../selectors/getLoot';

import {
  Table, Row, Head, Cell,
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
    <div>
      <Table>
        <Head>
          <Cell>Предмет</Cell>
          <Cell>Шанс</Cell>
        </Head>
        {
            items.map(({
              name,
              chance,
            }) => (
              <Row key={name}>
                <Cell>{name}</Cell>
                <Cell>{chance}%</Cell>
              </Row>
            ))
        }
      </Table>
    </div>
    <div>
      <Table>
        <Head>
          <Cell>Лут</Cell>
        </Head>
        <Row>
          {
            loot.map(name => (
              <Row key={name}>
                <Cell>{name}</Cell>
              </Row>
            ))
          }
        </Row>
      </Table>
    </div>
  </ResultsWrapper>
);

Results.propTypes = {
  items: PropTypes.array.isRequired,
  loot: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
)(Results);
