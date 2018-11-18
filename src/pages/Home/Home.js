import React from 'react';

import TimeSlider from '../../components/TimeSlider/TimeSlider';
import Select from '../../components/Select/Select';

import HomeWrapper from './Home.style';

const Home = () => (
  <HomeWrapper>
    <TimeSlider />
    <Select />
  </HomeWrapper>
);

export default Home;
