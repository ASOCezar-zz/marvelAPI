import styled from 'styled-components';
import icon from '../../icons/marvel.png';

export const Div = styled.div`
  background-color: black;
  position: fixed;
  grid-area: header;
  height: 70px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  z-index: 2;
  .iconMarvel {
    @media(max-width: 450px) {
      transition: opacity 0.3s linear;
      opacity: ${(props) => (props.isInputOnFocus ? 0 : 1)};
    }
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
