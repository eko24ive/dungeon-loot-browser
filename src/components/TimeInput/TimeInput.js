import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import { setTimeFilter as setTimeFilterAction } from '../../ducks/timeFilter';
import timeValues from '../../constants/timeValues';

import Select from '../../elements/Select/Select';

const getTimeFilterValues = timeFilter => ({
  timeFrom: timeFilter.get('timeFrom'),
  timeTo: timeFilter.get('timeTo'),
});

const mapStateToProps = (state) => {
  const timeFilterValues = getTimeFilterValues(state.get('timeFilter'));
  const timeToWeight = timeValues.find(time => time.value === timeFilterValues.timeTo).weight;
  const timeFromWeight = timeValues.find(time => time.value === timeFilterValues.timeFrom).weight;

  const timeFromValues = timeValues.map((time) => {
    if (time.weight >= timeToWeight) {
      return {
        ...time,
        disabled: true,
      };
    }

    return time;
  });

  const timeToValues = timeValues.map((time) => {
    if (time.weight < timeFromWeight) {
      return {
        ...time,
        disabled: true,
      };
    }

    return time;
  });

  return {
    ...timeFilterValues,
    timeFromValues,
    timeToValues,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  setTimeFilterAction,
}, dispatch);

const onChange = setTimeFilter => (e) => {
  setTimeFilter(e.target.name, e.target.value);
};

const TimeInput = ({
  timeFrom,
  timeTo,
  setTimeFilterAction: setTimeFilter,
  timeFromValues,
  timeToValues,
}) => (
  <Fragment>

    <Row>
      <Col xs={6} md={6}>
      Начальное время
      </Col>
      <Col xs={6} md={6}>
      Конечное время
      </Col>
    </Row>
    <Row>
      <Col xs={6} md={6}>
        <Select
          name="timeFrom"
          onChange={onChange(setTimeFilter)}
          defaultValue={timeFrom}
        >
          {
      timeFromValues.map(time => (
        <option
          key={`time-from-item-${time.value}`}
          value={time.value}
          disabled={time.disabled}
        >
          {time.label}
        </option>
      ))
    }
        </Select>
      </Col>
      <Col xs={6} md={6}>
        <Select
          name="timeTo"
          onChange={onChange(setTimeFilter)}
          defaultValue={timeTo}
        >
          {
      timeToValues.map(time => (
        <option
          key={`time-to-item-${time.value}`}
          value={time.value}
          disabled={time.disabled}
        >
          {time.label}
        </option>
      ))
    }
        </Select>
      </Col>
    </Row>
  </Fragment>
);

TimeInput.propTypes = {
  timeFrom: PropTypes.string.isRequired,
  timeTo: PropTypes.string.isRequired,
  setTimeFilterAction: PropTypes.func.isRequired,
  timeFromValues: PropTypes.array.isRequired,
  timeToValues: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeInput);
