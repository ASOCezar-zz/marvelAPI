import P from 'prop-types';
import image from '../../icons/Vector_search_icon.svg';
import cancelIcon from '../../icons/clearIcon.png';
import { useContext, useRef, useState } from 'react';
import { Card } from '../Card';
import { FavoritesContext } from '../../contexts/FavoritesContext/context';

import * as Styled from './styles';

export const InputSearch = ({ onFocus, onBlur }) => {
  const inputValue = useRef();
  const [isSearching, setIsSearching] = useState(false);
  const [searchedChars, setSearchedChars] = useState([]);

  const favoritesContext = useContext(FavoritesContext);
  const { setFavPressed } = favoritesContext;

  const handleClick = () => {
    const searchValue = inputValue.current.value;
    searchValue.length > 0 &&
      setIsSearching(true) &&
      fetch(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchValue}&ts=1627160343&apikey=bcc7616374e3d240e7270653f1b2b599&hash=8238c0c73920dc83cfe09aec0b169d26`,
      )
        .then((res) => res.json())
        .then((res) => setSearchedChars(res.data?.results))
        .catch((err) => window.alert(err.message));
  };

  const handleConfirm = ({ char }) => {
    //eslint-disable-next-line
    const result = window.confirm(`Gostaria de Favoritar ${char.name}?`);
    if (result) {
      const isSaved = window.localStorage.getItem(`${char.id}`);
      if (isSaved) {
        window.alert(`${char.name} já está salvo em seus favoritos`);
      } else {
        setFavPressed((prevState) => !prevState);
        window.localStorage.setItem(`${char.id}`, JSON.stringify(char));
      }
    }
  };

  return (
    <>
      <Styled.Input>
        <div
          className="image"
          onClick={() => {
            inputValue.current.value = '';
            setSearchedChars([]);
            setIsSearching(false);
          }}
        >
          <img src={cancelIcon} style={{ maxWidth: '20px', cursor: 'pointer' }} />
        </div>
        <input
          onKeyDown={({ key }) => key === 'Enter' && handleClick()}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={inputValue}
          type="text"
          placeholder="Search..."
        />
        <div className="image" onClick={() => handleClick()}>
          <img src={image} style={{ cursor: 'pointer' }} />
        </div>
      </Styled.Input>
      <Styled.Wrapper isSearching={isSearching}>
        <div>
          {searchedChars.length === 0 ? (
            <>
              <h2> Não foram encontrados resultados para {inputValue.current?.value} </h2>
              <p> Obs.: Verifique se o nome do personagem foi digitado corretamente (este deve estar em Inglês) </p>
            </>
          ) : (
            <>
              <h1> Resultados para {inputValue.current?.value} </h1>
              <h2> Clique no personagem que deseja salvar como favorito!! </h2>
            </>
          )}
        </div>
        {searchedChars?.map((char) => {
          return <Card key={char.id} char={char} onClick={() => handleConfirm({ char })} />;
        })}
      </Styled.Wrapper>
    </>
  );
};

InputSearch.propTypes = {
  onFocus: P.func.isRequired,
  onBlur: P.func.isRequired,
};
