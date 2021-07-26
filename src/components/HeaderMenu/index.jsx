import styled from 'styled-components';
import { InputSearch } from '../InputSearch';
import { MenuIcon } from '../MenuIcon';

import icon from '../../icons/marvel.png';

export const HeaderMenu = () => {
  return (
    <Div>
      <MenuIcon />
      <div className="iconMarvel">
        <img src={icon} />
      </div>
      <div>
        <InputSearch />
      </div>
    </Div>
  );
};

const Div = styled.div`
  background-color: black;
  position: fixed;
  grid-area: header;
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  z-index: 2;

  @media (max-width: 450px) {
    .iconMarvel {
      img {
        width: 75px;
      }
    }
  }
`;
