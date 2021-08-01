import P from 'prop-types';
import { Input } from './style';
import image from '../../icons/Vector_search_icon.svg';
import cancelIcon from '../../icons/clearIcon.png';
import { useRef, useState } from 'react';
import { SearchedCharsWrapper } from '../SearchedCharsWrapper';
import { Card } from '../Card';

export const InputSearch = ({ onFocus, onBlur }) => {
  const inputValue = useRef();
  const [isSearching, setIsSearching] = useState(false);
  const [searchedChars, setSearchedChars] = useState([]);

  const handleClick = () => {
    const searchValue = inputValue.current.value;
    setIsSearching(true);
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchValue}&ts=1627160343&apikey=bcc7616374e3d240e7270653f1b2b599&hash=8238c0c73920dc83cfe09aec0b169d26`,
    )
      .then((res) => res.json())
      .then((res) => setSearchedChars(res.data?.results));
  };

  return (
    <>
      <Input>
        <div className="image" onClick={() => handleClick()}>
          <img
            src={cancelIcon}
            style={{ maxWidth: '20px', cursor: 'pointer' }}
            onClick={() => {
              inputValue.current.value = '';
              setSearchedChars([]);
              setIsSearching(false);
            }}
          />
        </div>
        <input onFocus={onFocus} onBlur={onBlur} ref={inputValue} type="text" placeholder="Search..." />
        <div className="image" onClick={() => handleClick()}>
          <img src={image} style={{ cursor: 'pointer' }} />
        </div>
      </Input>
      {isSearching && (
        <SearchedCharsWrapper>
          {searchedChars?.map((char) => {
            console.log(char);
            return <Card key={char.id} char={char} />;
          })}
        </SearchedCharsWrapper>
      )}
    </>
  );
};

InputSearch.propTypes = {
  onFocus: P.func.isRequired,
  onBlur: P.func.isRequired,
};

// TODO: Fazer o resto da requisição
