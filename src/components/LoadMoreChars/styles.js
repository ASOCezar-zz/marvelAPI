import styled, { keyframes } from 'styled-components';

const pulsing = keyframes`
0% {
  transform: scale(0.95);
  box-shadow: 0 0 0 0 rgba(247, 3, 3, 0.7);
}

70% {
  transform: scale(1);
  box-shadow: 0 0 0 10px rgba(247, 3, 3, 0);
}

100% {
  transform: scale(0.95);
  box-shadow: 0 0 0 0 rgba(247, 3, 3, 0);
}
`;

export const Div = styled.div`
  background-color: black;
  position: relative;
  bottom: 0;
  width: 100%;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  img {
    animation: ${pulsing} 1s infinite;
    border-radius: 100px;
  }
`;
