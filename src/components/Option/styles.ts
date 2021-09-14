import styled, { css } from 'styled-components';

export const Div = styled.div`
  ${() => css`
    justify-items: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    color: black;
    width: 100%;
    height: 100%;
    white-space: nowrap;

    img {
      width: 100px;
      height: 200px;
      &:hover {
        transform: rotateY(360deg);
        transition: transform 0.5s ease-in-out;
      }
    }
  `};
`;
