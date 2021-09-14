import { MenuIcon } from '../MenuIcon';
import { useState } from 'react';
import { InputSearch } from '../InputSearch';
import * as Styled from './styles';

import P from 'prop-types';

export const HeaderMenu = ({ childrenOne, childrenTwo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInputOnFocus, setIsInputOnFocus] = useState(false);

  return (
    <>
      <Styled.Div isInputOnFocus={isInputOnFocus}>
        <MenuIcon setIsMenuOpen={setIsMenuOpen} />
        <div className="iconMarvel" />
        <InputSearch onFocus={() => setIsInputOnFocus(true)} onBlur={() => setIsInputOnFocus(false)} />
      </Styled.Div>
      <Styled.MenuWrapper isMenuOpen={isMenuOpen}>
        {childrenOne}
        {childrenTwo}
      </Styled.MenuWrapper>
    </>
  );
};

HeaderMenu.propTypes = {
  childrenOne: P.node.isRequired,
  childrenTwo: P.node.isRequired,
};
