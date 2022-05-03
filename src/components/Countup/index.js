import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { Time, Container, BigContainer, Text, SmallContainer, MiniContainer, Background} from './styles';

const Countup = ({}) => {
  const [diff, setDiff] = useState(null)
  const [initial, setInitial] = useState(null)

  const tick = () =>{
    setDiff(new Date(+new Date() - initial))
  } 

  const start = () => {
    setInitial(+new Date())
  }

  useEffect(()=>{
    if(initial){
      requestAnimationFrame(tick)
    }
  }, [initial])


  useEffect(()=>{
    if(diff){
      requestAnimationFrame(tick)
    }
  }, [diff])

  return(
    <BigContainer>
      <Container>
        <Background>
          <Time onClick={start}>{timeFormat(diff)}</Time>
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

Countup.propTypes = {
  time: PropTypes.arrayOf(PropTypes.number),
};
Countup.defaultProps = { 
  time: [],
};

const timeFormat = (date) =>{
  if(!date) return "00 : 00 : 00"

  let hh = date.getUTCHours()
  let mm = date.getUTCMinutes()
  let ss = date.getSeconds()

  hh = hh < 10 ? "0"+hh : hh
  mm = mm < 10 ? "0"+mm : mm
  ss = ss < 10 ? "0"+ss : ss

  return `${hh} : ${mm} : ${ss}`
}

export default Countup;