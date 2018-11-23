import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import getLoot from '../../selectors/getLoot';

import Table from '../../elements/Table/Table';

import TimeInput from '../../components/TimeInput/TimeInput';
import Select from '../../components/Select/Select';
import Reset from '../../components/Reset/Reset';

import VerticalDelimiter from '../../elements/VerticalDelimiter/VerticalDelimiter';
import CenterBlock from '../../elements/CenterBlock/CenterBlock';

import HomeWrapper from './Home.style';


const mapStateToProps = (state) => {
  const { items, loot } = getLoot(state);

  return {
    items,
    loot,
    activeDungeon: state.get('activeDungeon'),
  };
};

const Home = ({
  items,
  loot,
  activeDungeon,
}) => (
  <HomeWrapper>
    <Grid fluid>
      <Row>
        <Col xs={12} md={12}>
          <TimeInput />
        </Col>
      </Row>
      <VerticalDelimiter desktop />
      <Row>
        <Col xs={12} md={6}>
          <Select />
        </Col>
        <VerticalDelimiter />
        <Col xs={12} md={6}>
          <Reset />
        </Col>
      </Row>
      <VerticalDelimiter desktop />
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
                <CenterBlock>
                  <Link to={`browse/${activeDungeon}/${value}`}>
                    <FontAwesomeIcon icon="eye" />
                  </Link>
                </CenterBlock>
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
  </HomeWrapper>
);

Home.defaultProps = {
  activeDungeon: null,
};

Home.propTypes = {
  items: PropTypes.array.isRequired,
  loot: PropTypes.array.isRequired,
  activeDungeon: PropTypes.string,
};

export default connect(
  mapStateToProps,
)(Home);
