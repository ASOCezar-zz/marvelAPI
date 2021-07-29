import { useContext, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { ClickedCharContext } from '../../contexts/ClickedCharProvider/context';
import { ModalOpenContext } from '../../contexts/ModalOpenProvider/context';
import { CharsContext } from '../../contexts/CharsProvider/context';
import miranha from '../../icons/miranha.png';
import { IsLoadingComicsContext } from '../../contexts/IsLoadingComicsProvider/context';
import { comicsFetch } from '../../utils/comicsFetch';

export const Modal = () => {
  const clickedCharContext = useContext(ClickedCharContext);
  const { clickedChar, setClickedChar } = clickedCharContext;

  const charsContext = useContext(CharsContext);
  const { timestamps, publicKey, md5 } = charsContext;

  const modalOpenContext = useContext(ModalOpenContext);
  const { isModalOpen, setIsModalOpen } = modalOpenContext;

  const isLoadingComicsContext = useContext(IsLoadingComicsContext);
  const { isLoadingComics, setIsLoadingComics } = isLoadingComicsContext;

  const [comics, setComics] = useState([]);

  useEffect(() => {
    comicsFetch({ timestamps, publicKey, md5, clickedChar, setComics, setIsLoadingComics });
    //eslint-disable-next-line
  }, [timestamps, publicKey, md5, clickedChar]);

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

  return (
    <Container isModalOpen={isModalOpen}>
      <animated.div
        style={contentProps}
        className="background"
        onClick={() => {
          setIsModalOpen(false);
          setClickedChar([]);
          setComics([]);
          setIsLoadingComics(false);
        }}
      >
        <animated.div style={rotation} className="content" isModalOpen={isModalOpen}>
          <ImageDiv>
            <img src={clickedChar.thumbnail?.path + '.' + clickedChar.thumbnail?.extension} />
          </ImageDiv>
          <H3> {clickedChar.name} </H3>
          <h4> Comics </h4>
          {isLoadingComics ? (
            <animated.div style={loading} className="miranha" isLoadingComics={isLoadingComics} />
          ) : (
            <Comics isLoadingComics={isLoadingComics}>
              {comics.map((comic, index) => {
                if (index <= 8) {
                  return <img key={comic.name} src={comic.path + '.' + comic.extension} />;
                }
              })}
            </Comics>
          )}
        </animated.div>
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
    margin-bottom: -5px;
    position: absolute;
  }

  @media(max-width: 767px){
    height: 550px;
    width: 250px;
    align-self: center;
    margin-bottom: 200px;
    position: absolute;
  }

  @media(max-width:1024px){
    height: 650px;
    width: 80%;
    margin-bottom: 110px;
    position: absolute;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  padding: 12px;
  }
`;

const H3 = styled('h3')`
  margin-top: 105px;
  color: black;
  font-size: 26px;
  @media (min-width: 1025px) {
    margin-top: 146px;
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
    grid-template-columns: repeat(6, 148px);
    grid-template-rows: repeat(2, 185px);
    gap: 65px;

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
