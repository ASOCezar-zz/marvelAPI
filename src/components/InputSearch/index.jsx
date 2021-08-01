import P from 'prop-types';
import { Input } from './style';
import image from '../../icons/Vector_search_icon.svg';
import { useRef } from 'react';

export const InputSearch = ({ onFocus, onBlur }) => {
  const inputValue = useRef();

  const handleClick = () => {
    const searchValue = inputValue.current.value;
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchValue}&ts=1627160343&apikey=bcc7616374e3d240e7270653f1b2b599&hash=8238c0c73920dc83cfe09aec0b169d26`,
    ).then((res) => res.json());
  };
  return (
    <Input>
      <input onFocus={onFocus} onBlur={onBlur} ref={inputValue} type="text" placeholder="Search..." />
      <div className="image" onClick={handleClick}>
        <img src={image} />
      </div>
    </Input>
  );
};

InputSearch.propTypes = {
  onFocus: P.func.isRequired,
  onBlur: P.func.isRequired,
};

// TODO: Fazer o resto da requisição
