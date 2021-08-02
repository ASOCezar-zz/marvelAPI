import styled, { keyframes } from 'styled-components';

const openMenu = keyframes`
  0% {transform: scaleX(0); height: 0}
  50% {transform: scaleX(1); height: 0}
  100% {height: calc(100vh - 200px)}
`;
const closeMenu = keyframes`
  0% {height: calc(100vh - 200px)}
  50% {transform: scaleX(1); height: 0}
  100% {transform: scaleX(0); height: 0}
`;

export const SearchedCharsWrapper = styled.div`
  background-color: #e8e8e8;
  width: 98vw;
  display: grid;
  margin: 0 auto;
  align-items: center;
  position: absolute;
  top: 70px;
  justify-items: initial;
  overflow-y: auto;
  padding: 15px;
  animation: ${(props) => (props.isSearching ? openMenu : closeMenu)} 0.5s linear forwards;

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
`;
