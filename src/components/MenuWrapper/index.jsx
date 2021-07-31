import styled, { keyframes } from 'styled-components';
import P from 'prop-types';

export const MenuWrapper = ({ isMenuOpen }) => {
  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <SectionFindOne />
      <SectionContact />
    </Wrapper>
  );
};

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

const Wrapper = styled.div`
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

const SectionFindOne = styled.section``;

const SectionContact = styled.section``;

MenuWrapper.propTypes = {
  isMenuOpen: P.bool.isRequired,
};
