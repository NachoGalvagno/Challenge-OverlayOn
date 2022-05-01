import styled from 'styled-components';

export const Time = styled.p`
  color: white;
  font-size: 100px;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const Text = styled.p`
  color: red;
  font-size: 40px;
  text-align: center;
  margin: 0 25px;
  padding: 0;
  position: relative;
  left: 18px
`;

export const MiniContainer = styled.div`
  position: relative; 
  right: 9px
`;

export const Background = styled.div`
  background-color: black;
  height: 100%
`;

export const SmallContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BigContainer = styled.div`
  background-color: red;
  height: 600px;
  display: flex;
  align-items: center;

`;