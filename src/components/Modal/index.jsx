import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { ClickedCharContext } from '../../contexts/ClickedCharProvider/context';
import { ModalOpenContext } from '../../contexts/ModalOpenProvider/context';

export const Modal = () => {
  const clickedCharContext = useContext(ClickedCharContext);
  const { clickedChar } = clickedCharContext;
  const [comics, setComics] = useState({});

  const modalOpenContext = useContext(ModalOpenContext);
  const { isModalOpen, setIsModalOpen } = modalOpenContext;

  useEffect(() => {
    fetch(
      clickedChar.comics?.items[0].resourceURI +
        '?ts=1627160343&apikey=bcc7616374e3d240e7270653f1b2b599&hash=8238c0c73920dc83cfe09aec0b169d26',
    )
      .then((res) => res.json())
      .then((res) => setComics((c) => [c, res.data.results[0].thumbnail.path]))
      .catch((err) => console.error(err.message));
  }, [clickedChar, setIsModalOpen]);

  console.log(isModalOpen);

  const contentProps = useSpring({
    opacity: isModalOpen ? 1 : 0,
    height: isModalOpen ? 930 : 0,
    marginTop: isModalOpen ? 70 : 0,
  });

  const rotation = useSpring({
    from: { transform: 'scale(0) rotate(0deg)' },
    to: { transform: `scale(${isModalOpen ? '1' : '0'}) rotate(${isModalOpen ? '1440deg' : '0deg'})` },
  });

  return (
    <Container isModalOpen={isModalOpen}>
      <animated.div style={contentProps} className="background" onClick={() => setIsModalOpen(false)}>
        <animated.div style={rotation} className="content" isModalOpen={isModalOpen}>
          <ImageDiv>
            <img src={clickedChar.thumbnail?.path + '.' + clickedChar.thumbnail?.extension} />
          </ImageDiv>
          <h3> {clickedChar.name} </h3>
          <h3> Comics </h3>
          <ComicsContent>
            {comics ? (
              <>
                <img src={comics[0]?.path + '.' + comics[0]?.png} />
              </>
            ) : (
              <></>
            )}
          </ComicsContent>
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

  .content {
  background-image: linear-gradient(180deg, #980000, white);
  height: 500px;
  width: 350px;

  @media(max-width: 450px){
    height: 450px;
    width: 250px;
    align-self: center;
    margin-bottom: 370px;
    position: absolute;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  padding: 12px;
  }
`;

const ImageDiv = styled.div`
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

const ComicsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  img {
    width: 100%;
    height: 100%;
  }
`;
