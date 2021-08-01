import styled, { keyframes } from 'styled-components';

const openMenu = keyframes`
  0% {transform: scaleX(0); height: 0}
  50% {transform: scaleX(1); height: 0}
  100% {height: 300px}
`;
const closeMenu = keyframes`
  0% {height: 300px}
  50% {transform: scaleX(1); height: 0}
  100% {transform: scaleX(0); height: 0}
`;

export const Wrapper = styled.div`
  background-color: black;
  height: 40%;
  width: 99vw;
  display: grid;
  position: fixed;
  z-index: 2;
  margin-top: 70px;
  animation: ${(props) => (props.isMenuOpen ? openMenu : closeMenu)} 0.5s ease-in-out forwards;
  border: 2px solid white;
`;

export const SectionFindOne = styled.section``;

export const SectionContact = styled.section``;
