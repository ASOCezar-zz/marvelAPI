import { useContext, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { ClickedCharContext } from '../../contexts/ClickedCharProvider/context';
import { ModalOpenContext } from '../../contexts/ModalOpenProvider/context';
import { CharsContext } from '../../contexts/CharsProvider/context';
import { comicsFetch } from '../../utils/comicsFetch';
import { FavoriteStar } from '../../icons/favoriteIcon';
import { FavoritesContext } from '../../contexts/FavoritesContext/context';

import * as Styled from './styles';

export const Modal = () => {
  const clickedCharContext = useContext(ClickedCharContext);
  const { clickedChar, setClickedChar } = clickedCharContext;

  const charsContext = useContext(CharsContext);
  const { timestamps, publicKey, md5 } = charsContext;

  const modalOpenContext = useContext(ModalOpenContext);
  const { isModalOpen, setIsModalOpen } = modalOpenContext;

  const favoritesContext = useContext(FavoritesContext);
  const { favorites, favPressed, setFavPressed } = favoritesContext;

  const [isLoadingComics, setIsLoadingComics] = useState(false);

  const [comics, setComics] = useState([]);

  useEffect(() => {
    comicsFetch({ timestamps, publicKey, md5, clickedChar, setComics, setIsLoadingComics });
    const isFavoriteChar = favorites.find((item) => item.id === clickedChar.id);
    isFavoriteChar ? setFavPressed(true) : setFavPressed(false);
    // eslint-disable-next-line
  }, [clickedChar, favorites]);

  const contentProps = useSpring({
    opacity: isModalOpen ? 1 : 0,
    height: isModalOpen ? 1000 : 0,
    marginTop: isModalOpen ? 70 : 0,
  });

  const rotation = useSpring({
    from: { transform: 'scale(0) rotate(0deg)' },
    to: { transform: `scale(${isModalOpen ? '1' : '0'}) rotate(${isModalOpen ? '1440deg' : '0deg'})` },
  });

  const loading = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: `rotateX(${isLoadingComics ? '0deg' : '360deg'}) infinite` },
  });

  const handleClickFav = () => {
    setFavPressed((prevState) => !prevState);
  };

  useEffect(() => {
    favPressed
      ? window.localStorage.setItem(`${clickedChar.id}`, JSON.stringify(clickedChar))
      : window.localStorage.removeItem(`${clickedChar.id}`);
    // eslint-disable-next-line
  }, [favPressed]);

  return (
    <Styled.Container isModalOpen={isModalOpen}>
      <animated.div
        style={contentProps}
        className="background"
        onClick={() => {
          setIsModalOpen(false);
          setClickedChar([]);
          setComics([]);
        }}
      ></animated.div>
      <animated.div style={rotation} className="content">
        <Styled.ImageDiv>
          <img key={clickedChar.id} src={clickedChar.thumbnail?.path + '.' + clickedChar.thumbnail?.extension} />
        </Styled.ImageDiv>
        <span className="favNameWrapper">
          <Styled.H3> {clickedChar.name} </Styled.H3>
          <FavoriteStar onClick={() => handleClickFav(clickedChar)} favPressed={favPressed} />
        </span>
        <h4> Comics </h4>
        {isLoadingComics ? (
          <animated.div style={loading} className="miranha" />
        ) : (
          <Styled.Comics>
            {comics.map((comic, index) => {
              if (index <= 15) {
                return <img key={index} src={comic.path + '.' + comic.extension} />;
              }
            })}
          </Styled.Comics>
        )}
      </animated.div>
    </Styled.Container>
  );
};
