import { Dispatch, SetStateAction, useRef } from 'react';
import * as Styled from './styles';

type MenuIconProps = {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const MenuIcon = ({ setIsMenuOpen }: MenuIconProps) => {
  const bar1 = useRef<HTMLDivElement>(null);
  const bar2 = useRef<HTMLDivElement>(null);
  const bar3 = useRef<HTMLDivElement>(null);

  function changeMenuIcon() {
    if (bar1.current !== null && bar2.current !== null && bar3.current !== null) {
      bar1.current.classList.toggle('change');
      bar2.current.classList.toggle('change');
      bar3.current.classList.toggle('change');
    }
  }

  return (
    <Styled.Container
      onClick={() => {
        changeMenuIcon();
        setIsMenuOpen((prevState: boolean) => !prevState);
      }}
    >
      <div className="bar1" ref={bar1}></div>
      <div className="bar2" ref={bar2}></div>
      <div className="bar3" ref={bar3}></div>
    </Styled.Container>
  );
};
