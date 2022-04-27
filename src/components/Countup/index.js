import React from 'react';
import PropTypes from 'prop-types';

import { Time } from './styles';

const Countup = ({}) => {
  return <Time>00:00:00</Time>;
};

Countup.propTypes = {
  time: PropTypes.arrayOf(PropTypes.number),
};
Countup.defaultProps = {
  time: [],
};

export default Countup;
