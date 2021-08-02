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

const openIcons = keyframes`
  from {transform: scale(0); height: 0}
  to {transform: scale(1); height: 100%}
`;
const closeIcons = keyframes`
  from {transform: scale(1); height: 100%}
  to {transform: scale(0); height: 0}
`;

export const MenuWrapper = styled.div`
  background-color: black;
  height: 40%;
  width: 96vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: fixed;
  z-index: 2;
  margin-top: 70px;
  animation: ${(props) => (props.isMenuOpen ? openMenu : closeMenu)} 0.5s ease-in-out forwards;
  border: 2px solid white;
  padding: 10px;
  a {
    text-decoration: none;
  }
  div:nth-child(1) {
    animation: ${(props) => props.isMenuOpen && openIcons} 1.5s ease-in-out forwards;
    animation-delay: 0.3s;
    animation: ${(props) => !props.isMenuOpen && closeIcons} 0.2s ease-in-out forwards;
  }
  div:nth-child(2) {
    animation: ${(props) => props.isMenuOpen && openIcons} 1.5s ease-in-out forwards;
    animation: ${(props) => !props.isMenuOpen && closeIcons} 0.2s ease-in-out forwards;
  }
`;
