import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';


import TimeInput from '../../components/TimeInput/TimeInput';
import Select from '../../components/Select/Select';
import Reset from '../../components/Reset/Reset';

import VerticalDelimiter from '../../elements/VerticalDelimiter/VerticalDelimiter';

import HomeWrapper from './Home.style';

const Home = () => (
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
    </Grid>
  </HomeWrapper>
);

export default Home;
