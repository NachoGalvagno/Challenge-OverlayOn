import React from 'react';
import PropTypes from 'prop-types';

import { Time, Container, BigContainer, Text, SmallContainer, MiniContainer, Background} from './styles';

const Countdown = ({}) => {
  return(
    <BigContainer>
      <Container>
        <Background>
          <Time>00 : 00 : 00</Time>
          <SmallContainer>
            <MiniContainer>
              <Text>Hours</Text>
            </MiniContainer>
            <Text>Minutes</Text>
            <Text>Seconds</Text>
          </SmallContainer>
        </Background>
      </Container>
    </BigContainer>
  ) 
};
 
Countdown.propTypes = {
  time: PropTypes.arrayOf(PropTypes.number),
};
Countdown.defaultProps = { 
  time: [],
};

export default Countdown;
