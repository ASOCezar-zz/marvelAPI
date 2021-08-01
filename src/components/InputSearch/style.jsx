import styled from 'styled-components';

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
    inset-inline-end: 30px;
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
      width: 240px;
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
