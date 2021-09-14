import * as Styled from './styles';
import P from 'prop-types';

export const MenuIcon = ({ setIsMenuOpen }) => {
  return (
    <Styled.Container
      onClick={() => {
        changeMenuIcon();
        setIsMenuOpen((prevState) => !prevState);
      }}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </Styled.Container>
  );
};

function changeMenuIcon() {
  document.querySelector('.bar1').classList.toggle('change');
  document.querySelector('.bar2').classList.toggle('change');
  document.querySelector('.bar3').classList.toggle('change');
}

MenuIcon.propTypes = {
  setIsMenuOpen: P.func.isRequired,
};
