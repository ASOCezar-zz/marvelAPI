import { useContext, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { ClickedCharContext } from '../../contexts/ClickedCharProvider/context';
import { ModalOpenContext } from '../../contexts/ModalOpenProvider/context';
import { CharsContext } from '../../contexts/CharsProvider/context';
import miranha from '../../icons/miranha.png';
import { comicsFetch } from '../../utils/comicsFetch';
import { FavoriteStar } from '../../icons/favoriteIcon';
import { FavoritesContext } from '../../contexts/FavoritesContext/context';

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
    <Container isModalOpen={isModalOpen}>
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
        <ImageDiv>
          <img key={clickedChar.id} src={clickedChar.thumbnail?.path + '.' + clickedChar.thumbnail?.extension} />
        </ImageDiv>
        <span className="favNameWrapper">
          <H3> {clickedChar.name} </H3>
          <FavoriteStar onClick={() => handleClickFav(clickedChar)} favPressed={favPressed} />
        </span>
        <h4> Comics </h4>
        {isLoadingComics ? (
          <animated.div style={loading} className="miranha" />
        ) : (
          <Comics>
            {comics.map((comic, index) => {
              if (index <= 8) {
                return <img key={index} src={comic.path + '.' + comic.extension} />;
              }
            })}
          </Comics>
        )}
      </animated.div>
    </Container>
  );
};

const pulsing = keyframes`
  0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.8);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 50px rgba(255, 0, 0, 0);
	}

	100% {
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgb(255 0 0 / 0%);
	}
`;

const Container = styled.div`
  position: fixed;
  display: ${(props) => (props.isModalOpen ? 'flex' : 'none')}
  height: 100%;
  width: 100%;
  z-index: 1;
  justify-content: center;

  .favNameWrapper {
    @media(max-width: 767px){
      width: 90%;
      margin-top: 105px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  }

  .miranha {
    display: flex;
    background-image: url(${miranha});
    background-repeat: no-repeat;
    background-position: center;
    width: 190px;
    height: 190px;
    border-radius: 100%;
    margin-top: 30px;
    animation: ${pulsing} 1s infinite;
  }

  .background {
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;

    cursor: pointer;

    align-items: center;
    justify-content: center;
  }
  h4 {
    color: black;
    font-size: 22px;
    @media (max-width: 767px){
      margin: 0;
    }
    @media (min-width: 1025px){
      margin-top: 0;
    color: black;
    font-size: 30px;
    }
  }

  .content {
    background-color: #e8e8e8;
    height: 700px;
    width: 350px;
    border-radius: 8px;

  @media (min-width: 1025px){
    height: 750px;
    width: 70%;
    position: absolute;
    inset-block: 200px;
  }

  @media(max-width: 767px){
    height: 550px;
    width: 80%;
    align-self: center;
    position: absolute;
    inset-block: 200px;
  }

  @media(max-width:1024px){
    height: 650px;
    width: 80%;
    inset-block: 200px;
    position: absolute;
    margin: 0 auto;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 12px;
  }
`;

const H3 = styled('h3')`
  color: black;
  font-size: 26px;
  @media (min-width: 768px) {
    margin-top: 100px;
  }
  @media (min-width: 1024px) {
    margin-top: 140px;
  }
`;

const ImageDiv = styled.div`
  @media (min-width: 1025px) {
    width: 240px;
    height: 240px;
    top: -110px;
    position: absolute;
    box-shadow: 6px 9px 18px 1px;
    border-radius: 120px;
  }
  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
    top: -100px;
    position: absolute;
    box-shadow: 6px 9px 18px 1px;
    border-radius: 100px;
  }

  @media (max-width: 767px) {
    width: 200px;
    height: 200px;
    top: -100px;
    position: absolute;
    box-shadow: 6px 9px 18px 1px;
    border-radius: 100px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

const Comics = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(2, 100px);

  @media (min-width: 1025px) {
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(2, 200px);
    column-gap: 10px;
    row-gap: 60px;

    img {
      width: 100%;
      height: 100%;
    }
    img:nth-child(n + 13) {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 148px);
    grid-template-rows: repeat(2, 185px);
    gap: 33px;

    img {
      width: 100%;
      height: 100%;
    }
    img:nth-child(n + 7) {
      display: none;
    }
  }

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 130px);
    gap: 10px;
    justify-items: center;
    align-items: center;
    margin-top: 30px;
    img:nth-child(n + 7) {
      display: none;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
