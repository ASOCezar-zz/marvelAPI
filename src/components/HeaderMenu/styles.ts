import styled, { css } from 'styled-components';

import marvelLogo from '../../icons/marvel.png';

type DivTypes = {
  isInputOnFocus: boolean;
};

export const Div = styled.div<DivTypes>`
  ${({ isInputOnFocus }) => css`
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
        opacity: ${isInputOnFocus ? 0 : 1};
      }
      background: url(${marvelLogo});
      background-size: contain;
      background-repeat: no-repeat;
      background-color: black;
      background-position: center;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      }
    }
  `};
`;

type MenuWrapperTypes = {
  isMenuOpen: boolean;
};

const openMenu = () => css`
  height: 100vh;
  width: 50vw;
  background-color: #e8e8e8;
  display: flex;
  flex-direction: column;
  visibility: visible;
  transition: all 0.3s ease-in-out;

  a {
    visibility: visible;

    h1,
    img {
      transform: scaleX(100%);
    }
  }
`;

export const MenuWrapper = styled.nav<MenuWrapperTypes>`
  ${({ isMenuOpen }) => css`
    a {
      text-decoration: none;
      visibility: hidden;
      transition: all 0.3s ease-in-out;

      h1,
      img {
        transform: scaleX(0);
      }
    }

    height: 100vh;
    position: fixed;
    inset-inline-start: 0;
    inset-block-start: 70px;
    visibility: hidden;
    z-index: 999;
    transition: all 0.3s ease-in-out;

    width: 0;

    ${isMenuOpen && openMenu()};
  `};
`;
