import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';


import TimeSlider from '../../components/TimeSlider/TimeSlider';
import Select from '../../components/Select/Select';

import HomeWrapper from './Home.style';

const Home = () => (
  <HomeWrapper>
    <Grid fluid>
      <Row between="md">
        <Col xs={12} md={6}>
          <TimeSlider />
        </Col>
        <Col xs={12} md={5}>
          <Select />
        </Col>
      </Row>
    </Grid>
  </HomeWrapper>
);

export default Home;
