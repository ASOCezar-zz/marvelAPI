import styled from 'styled-components';
import image from '../../icons/Vector_search_icon.svg';

export const InputSearch = () => {
  return (
    <Input>
      <input type="text" placeholder="Search..." />
      <div className="image">
        <img src={image} />
      </div>
    </Input>
  );
};

const Input = styled.div`
  background-color: #980000;
  border-radius: 25px;
  padding: 0;
  margin-right: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
    background-image: ${image};
    background-repeat: no-repeat;
    border-radius: 5px;

    height: 45px;
    width: 100px;
    box-sizing: border-box;

    transition: width 0.4s ease-in-out;

    &:focus {
      border: none;
      width: 260px;
    }

    @media (max-width: 450px) {
      &:focus {
        border: none;
        width: 150px;
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
