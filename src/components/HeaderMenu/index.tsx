import { MenuIcon } from '../MenuIcon';
import { useState } from 'react';
import { InputSearch } from '../InputSearch';
import * as Styled from './styles';
import { Option } from '../Option';

export type HeaderMenuProps = {
  name: string;
  image: string;
  goto: string;
  name2: string;
  image2: string;
  goto2: string;
};

export const HeaderMenu = ({ name, image, goto, name2, image2, goto2 }: HeaderMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isInputOnFocus, setIsInputOnFocus] = useState<boolean>(false);

  return (
    <>
      <Styled.Div isInputOnFocus={isInputOnFocus}>
        <MenuIcon setIsMenuOpen={setIsMenuOpen} />
        <div className="iconMarvel" />
        <InputSearch onFocus={() => setIsInputOnFocus(true)} onBlur={() => setIsInputOnFocus(false)} />
      </Styled.Div>
      <Styled.MenuWrapper isMenuOpen={isMenuOpen}>
        <Option name={name} image={image} goto={goto} />
        <Option name={name2} image={image2} goto={goto2} />
      </Styled.MenuWrapper>
    </>
  );
};
