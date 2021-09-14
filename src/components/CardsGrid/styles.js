import styled, { keyframes } from 'styled-components';

const scaleBack = keyframes`
  from {
    transform: scale(1)
  }

  to {
    transform: scale(0.9)
  }
`;

const scaleForward = keyframes`
  from {
    transform: scale(0.9)
  }

  to {
    transform: scale(1)
  }
`;

export const Container = styled.div`
  background-image: linear-gradient(180deg, #980000, black);

  height: 100%;
  display: grid;

  margin-top: 70px;

  justify-content: center;

  grid-area: main;

  font-family: sans-serif;

  @media (min-width: 1025px) {
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 361px;
    gap: 50px;
    padding: 40px;
    justify-items: center;
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 350px;
    gap: 15px;
    padding: 10px;
    justify-items: center;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 250px;
    justify-items: center;
    gap: 30px;
    align-items: center;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 200px;
    justify-items: center;
    column-gap: 5px;
    row-gap: 35px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  animation: ${(props) => (props.isModalOpen ? scaleBack : scaleForward)} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
`;
