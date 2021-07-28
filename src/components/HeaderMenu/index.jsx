import styled from 'styled-components';
import { MenuIcon } from '../MenuIcon';
import icon from '../../icons/marvel.png';

export const HeaderMenu = () => {
  return (
    <Div>
      <MenuIcon />
      <div className="iconMarvel"></div>
    </Div>
  );
};

const Div = styled.div`
  background-color: black;
  position: fixed;
  grid-area: header;
  height: 70px;
  width: 100%;
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
