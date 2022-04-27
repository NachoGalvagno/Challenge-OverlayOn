import React from 'react';
import PropTypes from 'prop-types';

import { Time } from './styles';

const Countdown = ({}) => {
  return <Time>00:00:00</Time>;
};

Countdown.propTypes = {
  time: PropTypes.arrayOf(PropTypes.number),
};
Countdown.defaultProps = {
  time: [],
};

export default Countdown;
