import styled, { css, keyframes } from 'styled-components';

export const Input = styled.div`
  background-color: #980000;
  border-radius: 25px;
  padding: 0;
  margin-right: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  @media (min-width: 451px) {
    inset-block-end: 10px;
    inset-inline-end: 0px;
  }

  @media (max-width: 450px) {
    inset-block-start: -6px;
    inset-inline-end: 0px;
    margin: 20px;
  }

  .image {
    padding: 10px;
    border-radius: 100%;
    border: 2px solid white;
  }

  input {
    border: none;
    background-color: #980000;
    color: white;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    border-radius: 5px;
    outline: none;

    height: 45px;
    width: 100px;
    @media (max-width: 450px) {
      width: 50px;
    }
    box-sizing: border-box;

    transition: width 0.4s ease-in-out;

    @media (min-width: 1024px) {
      &:focus {
        border: none;
        width: 100%;
      }
    }
    &:focus {
      border: none;
      width: 210px;
    }

    @media (max-width: 450px) {
      &:focus {
        border: none;
        width: 100px;
      }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
      color: white;
      font-weight: bold;
    }
    :-ms-input-placeholder {
      color: white;
      font-weight: bold;
    }
  }
`;

const openMenu = keyframes`
  0% {transform: scaleX(0); height: 0}
  50% {transform: scaleX(1); height: 0}
  100% {
    height: calc(100vh - 200px);
    width: 98vw;
    padding: 15px;
    transform: scaleX(1);
  }
`;

type WrapperType = {
  isSearching: boolean;
};

export const Wrapper = styled.div<WrapperType>`
  ${({ isSearching }) => css`
    background-color: #e8e8e8;
    height: 0;
    transform: scaleX(0);
    display: grid;
    margin: 0 auto;
    align-items: center;
    position: absolute;
    top: 70px;
    justify-items: initial;
    overflow-y: auto;
    animation: ${isSearching && openMenu} 0.3s linear forwards;

    @media (min-width: 1025px) {
      grid-template-columns: repeat(5, 1fr);
      grid-auto-rows: 361px;
      gap: 50px;
      padding: 40px;
      justify-items: center;
    }
    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 350px;
      gap: 15px;
      padding: 10px;
      justify-items: center;
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 250px;
      justify-items: center;
      gap: 30px;
      align-items: center;
    }
    @media (max-width: 425px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 200px;
      justify-items: center;
      column-gap: 5px;
      row-gap: 35px;
      align-items: center;
    }
  `};
`;
