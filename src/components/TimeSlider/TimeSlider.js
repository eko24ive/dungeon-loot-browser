import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.min.css';

import { setTimeFilter as setTimeFilterAction } from '../../ducks/timeFilter';

const getTimeFilterValues = timeFilter => ({
  timeFrom: timeFilter.get('timeFrom'),
  timeTo: timeFilter.get('timeTo'),
});

const mapStateToProps = state => getTimeFilterValues(state.get('timeFilter'));

const mapDispatchToProps = dispatch => bindActionCreators({
  setTimeFilterAction,
}, dispatch);

class TimeSlider extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  componentDidMount() {
    const { timeFrom, timeTo, setTimeFilterAction: setTimeFilter } = this.props;

    const formatTooltip = (value) => {
      const raw = String(value.toFixed(0));

      return raw.length === 1 ? `0${raw}:00` : `${raw}:00`;
    };

    noUiSlider.create(this.sliderRef, {
      start: [
        timeFrom,
        timeTo,
      ],
      step: 1,
      margin: 1,
      connect: true,
      range: {
        min: 0,
        max: 24,
      },
      tooltips: [{
        to: formatTooltip,
      }, {
        to: formatTooltip,
      }],
      pips: {
        mode: 'range',
        density: 3,
        filter: () => 0,
      },
      /* pips: {
        mode: 'values',
        values: Array(25).fill().map((v, i) => i),
        stepped: true,
        format: {
          to(value) {
            return `${value.toFixed(0)}`;
          },
        },
      }, */
    });

    this.sliderRef.noUiSlider.on('change', (formatted, handle, [start, end]) => {
      setTimeFilter({
        timeFrom: start,
        timeTo: end,
      });
    });
  }

  render() {
    return (
      <div ref={(ref) => { this.sliderRef = ref; }} />
    );
  }
}

TimeSlider.propTypes = {
  timeFrom: PropTypes.number.isRequired,
  timeTo: PropTypes.number.isRequired,
  setTimeFilterAction: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeSlider);
