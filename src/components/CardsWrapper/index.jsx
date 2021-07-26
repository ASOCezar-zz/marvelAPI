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

export const CardsWrapper = styled.div`
  background-image: linear-gradient(180deg, #980000, black);

  height: 100%;
  display: grid;
  gap: 10px;

  margin-top: 70px;

  justify-content: center;

  grid-area: main;

  font-family: sans-serif;

  @media (max-width: 1920px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 20px;
  }
  @media (max-width: 1350px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding-left: 60px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  animation: ${(props) => (props.isModalOpen ? scaleBack : scaleForward)} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
`;
