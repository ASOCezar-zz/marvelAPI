import styled from 'styled-components';

export const CardsWrapper = styled.div`
  background-image: linear-gradient(180deg, #980000, black);

  padding: 5px;
  display: grid;
  grid-template-columns: 150px 150px;
  justify-content: center;
  gap: 10px;

  font-family: sans-serif;

  @media (max-width: 1920px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 20px;
  }
  @media (max-width: 1350px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`;
