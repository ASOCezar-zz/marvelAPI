import P from 'prop-types';
import { SectionContact, SectionFindOne, Wrapper } from './style';

export const MenuWrapper = ({ isMenuOpen }) => {
  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <SectionFindOne />
      <SectionContact />
    </Wrapper>
  );
};

MenuWrapper.propTypes = {
  isMenuOpen: P.bool.isRequired,
};
