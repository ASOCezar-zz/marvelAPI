import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { ClickedCharContext } from '../../contexts/ClickedCharProvider/context';
import { ModalOpenContext } from '../../contexts/ModalOpenProvider/context';

export const Modal = () => {
  const clickedCharContext = useContext(ClickedCharContext);
  const { clickedChar, setClickedChar } = clickedCharContext;

  const modalOpenContext = useContext(ModalOpenContext);
  const { isModalOpen, setIsModalOpen } = modalOpenContext;

  const [description, setDescription] = useState('');

  useEffect(() => {
    setDescription(clickedChar.description);
  }, [clickedChar, setIsModalOpen]);

  console.log(clickedChar);

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
          <h3> {clickedChar.name} </h3>
          <h3> Descrição </h3>
          <DescriptionContent>
            <p> {description} </p>
          </DescriptionContent>
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

const DescriptionContent = styled.div`
  display: flex;
  @media (max-width: 450px) {
    font-size: 10pt;
  }
`;
