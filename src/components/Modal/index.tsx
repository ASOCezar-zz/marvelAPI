import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import { CharsContext, GlobalChars } from '../../contexts/CharsProvider/context';
import { comicsFetch } from '../../utils/comicsFetch';
import { FavoriteStar } from '../../icons/favoriteIcon';
import { FavoritesContext, GlobalFavorites } from '../../contexts/FavoritesContext/context';

import * as Styled from './styles';
import { CharsType } from '../../types/CharsType';

export type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  clickedChar: CharsType | null;
  setClickedChar: Dispatch<SetStateAction<CharsType | null>>;
};

export const Modal = ({ isModalOpen, setIsModalOpen, clickedChar, setClickedChar }: ModalProps) => {
  const charsContext = useContext<GlobalChars>(CharsContext);
  const { timestamps, publicKey, md5 } = charsContext;

  const favoritesContext = useContext<GlobalFavorites>(FavoritesContext);
  const { favorites, favPressed, setFavPressed } = favoritesContext;

  const [isLoadingComics, setIsLoadingComics] = useState<boolean>(false);

  // eslint-disable-next-line
  const [comics, setComics] = useState<any[]>([]);

  useEffect(() => {
    if (clickedChar !== null) {
      comicsFetch({ timestamps, publicKey, md5, clickedChar, setComics, setIsLoadingComics });
      const isFavoriteChar = favorites.find((item) => item.id === clickedChar.id);
      isFavoriteChar ? setFavPressed(true) : setFavPressed(false);
    }
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

  const handleClickFav = (): void => {
    setFavPressed((prevState) => !prevState);
  };

  useEffect(() => {
    if (clickedChar !== null) {
      favPressed
        ? window.localStorage.setItem(`${clickedChar.id}`, JSON.stringify(clickedChar))
        : window.localStorage.removeItem(`${clickedChar.id}`);
    }
    // eslint-disable-next-line
  }, [favPressed]);

  return (
    <Styled.Container isModalOpen={isModalOpen}>
      <animated.div
        style={contentProps}
        className="background"
        onClick={() => {
          setIsModalOpen(false);
          setClickedChar(null);
          setComics([]);
        }}
      ></animated.div>
      <animated.div style={rotation} className="content">
        <Styled.ImageDiv>
          <img key={clickedChar?.id} src={clickedChar?.thumbnail?.path + '.' + clickedChar?.thumbnail?.extension} />
        </Styled.ImageDiv>
        <span className="favNameWrapper">
          <Styled.H3> {clickedChar?.name} </Styled.H3>
          <FavoriteStar onClick={() => handleClickFav()} favPressed={favPressed} />
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
