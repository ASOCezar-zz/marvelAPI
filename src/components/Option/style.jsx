import styled from 'styled-components';

export const Div = styled.div`
  background-color: white;
  justify-content: center;
  justify-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 2px solid black;
  color: black;

  img {
    width: 200px;
    height: 200px;
    &:hover {
      transform: rotateY(360deg);
      transition: transform 0.5s ease-in-out;
    }
  }
`;
