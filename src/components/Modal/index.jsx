import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { ClickedCharContext } from '../../contexts/ClickedCharProvider/context';
import { ModalOpenContext } from '../../contexts/ModalOpenProvider/context';
import { CharsContext } from '../../contexts/CharsProvider/context';

export const Modal = () => {
  const clickedCharContext = useContext(ClickedCharContext);
  const { clickedChar, setClickedChar } = clickedCharContext;

  const charsContext = useContext(CharsContext);
  const { timestamps, publicKey, md5 } = charsContext;

  const modalOpenContext = useContext(ModalOpenContext);
  const { isModalOpen, setIsModalOpen } = modalOpenContext;

  const [comics, setComics] = useState([]);

  useEffect(() => {
    clickedChar.comics?.items.map((item) => {
      const URI = item.resourceURI.replace('http', 'https');
      console.log(URI);
      fetch(`${URI}?ts=${timestamps}&apikey=${publicKey}&hash=${md5}`)
        .then((res) => res.json())
        .then((res) => setComics((prevState) => [...prevState, res.data.results[0].thumbnail]));
    });
    //eslint-disable-next-line
  }, [clickedChar]);

  const contentProps = useSpring({
    opacity: isModalOpen ? 1 : 0,
    height: isModalOpen ? 1000 : 0,
    marginTop: isModalOpen ? 70 : 0,
  });

  const rotation = useSpring({
    from: { transform: 'scale(0) rotate(0deg)' },
    to: { transform: `scale(${isModalOpen ? '1' : '0'}) rotate(${isModalOpen ? '1440deg' : '0deg'})` },
  });

  return (
    <Container isModalOpen={isModalOpen}>
      <animated.div
        style={contentProps}
        className="background"
        onClick={() => {
          setIsModalOpen(false);
          setClickedChar([]);
        }}
      >
        <animated.div style={rotation} className="content" isModalOpen={isModalOpen}>
          <ImageDiv>
            <img src={clickedChar.thumbnail?.path + '.' + clickedChar.thumbnail?.extension} />
          </ImageDiv>
          <H3> {clickedChar.name} </H3>
          <h4> Comics </h4>
          <Comics>
            {comics.map((comic, index) => {
              if (index <= 8) {
                return <img src={comic.path + '.' + comic.extension} />;
              }
            })}
          </Comics>
        </animated.div>
      </animated.div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  display: ${(props) => (props.isModalOpen ? 'flex' : 'none')}
  height: 100%;
  width: 100%;
  z-index: 1;
  justify-content: center;

  .background {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;

    align-items: center;
    justify-content: center;
  }
  h4 {
    color: white;
    font-size: 22px;
    @media (max-width: 767px){
      margin: 0;
    }
  }

  .content {
    background-image: linear-gradient(
180deg
,#980000,#ed1a23, #000);
  height: 700px;
  width: 350px;
  border-radius: 8px;

  @media(max-width: 450px){
    height: 550px;
    width: 250px;
    align-self: center;
    margin-bottom: 200px;
    position: absolute;
  }

  @media(min-width:768px){
    height: 750px;
    width: 80%;
    align-self: center;
    margin-bottom: 170px;
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
  color: white;
  font-size: 26px;
`;

const ImageDiv = styled.div`
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
  img:nth-child(n + 7) {
    display: none;
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

  img {
    max-width: 50px;
    max-height: 100px;

    @media (max-width: 768px) {
      max-width: 150px;
      max-height: 210px;
    }
  }
`;
