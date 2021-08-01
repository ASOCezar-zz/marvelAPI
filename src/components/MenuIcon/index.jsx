import styled from 'styled-components';
import P from 'prop-types';

export const MenuIcon = ({ setIsMenuOpen }) => {
  return (
    <Container
      onClick={() => {
        changeMenuIcon();
        setIsMenuOpen((prevState) => !prevState);
      }}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </Container>
  );
};

function changeMenuIcon() {
  document.querySelector('.bar1').classList.toggle('change');
  document.querySelector('.bar2').classList.toggle('change');
  document.querySelector('.bar3').classList.toggle('change');
}

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
  align-self: left;
  position: absolute;
  top: 15px;
  left: 3%;
  z-index: 3;
  div {
    width: 35px;
    height: 5px;
    margin: 6px 0;
    background-color: white;
    transition: 0.4s;
  }

  .bar1.change {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .bar2.change {
    opacity: 0;
  }

  .bar3.change {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
`;

MenuIcon.propTypes = {
  setIsMenuOpen: P.func.isRequired,
};
