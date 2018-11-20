import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';


import TimeSlider from '../../components/TimeSlider/TimeSlider';
import Select from '../../components/Select/Select';
import Reset from '../../components/Reset/Reset';

import VerticalDelimiter from '../../elements/VerticalDelimiter/VerticalDelimiter';

import HomeWrapper from './Home.style';

const Home = () => (
  <HomeWrapper>
    <Grid fluid>
      <Row>
        <Col xs={12} md={12}>
          <TimeSlider />
        </Col>
      </Row>
      <VerticalDelimiter />
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
