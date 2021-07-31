import styled from 'styled-components';
import { MenuIcon } from '../MenuIcon';
import icon from '../../icons/marvel.png';
import { useState } from 'react';
import { MenuWrapper } from '../MenuWrapper';

export const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Div>
        <MenuIcon setIsMenuOpen={setIsMenuOpen} />
        <div className="iconMarvel"></div>
      </Div>
      <MenuWrapper isMenuOpen={isMenuOpen} />
    </>
  );
};

const Div = styled.div`
  background-color: black;
  position: fixed;
  grid-area: header;
  height: 70px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  z-index: 2;
  .iconMarvel {
    background: url(${icon});
    background-size: contain;
    background-repeat: no-repeat;
    background-color: black;
    background-position: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    }
  }
`;
