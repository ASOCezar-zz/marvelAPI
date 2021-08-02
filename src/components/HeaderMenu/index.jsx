import { MenuIcon } from '../MenuIcon';
import { useState } from 'react';
import { MenuWrapper } from '../MenuWrapper';
import { InputSearch } from '../InputSearch';
import { Div } from './style';
import P from 'prop-types';

export const HeaderMenu = ({ childrenOne, childrenTwo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInputOnFocus, setIsInputOnFocus] = useState(false);

  return (
    <>
      <Div isInputOnFocus={isInputOnFocus}>
        <MenuIcon setIsMenuOpen={setIsMenuOpen} />
        <div className="iconMarvel" isInputOnFocus={isInputOnFocus}></div>
        <InputSearch onFocus={() => setIsInputOnFocus(true)} onBlur={() => setIsInputOnFocus(false)} />
      </Div>
      <MenuWrapper isMenuOpen={isMenuOpen}>
        {childrenOne}
        {childrenTwo}
      </MenuWrapper>
    </>
  );
};

HeaderMenu.propTypes = {
  childrenOne: P.node.isRequired,
  childrenTwo: P.node.isRequired,
};
