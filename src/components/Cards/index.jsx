import { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { CharsContext } from '../../contexts/CharsProvider/context';
import { ClickedCharContext } from '../../contexts/ClickedCharProvider/context';
import { ModalOpenContext } from '../../contexts/ModalOpenProvider/context';
import { CardsWrapper } from '../CardsWrapper/index';

import loadingIcon from '../../icons/loading.png';

export const Cards = () => {
  const charsContext = useContext(CharsContext);
  const { characters } = charsContext;

  const clickedCharContext = useContext(ClickedCharContext);
  const { setClickedChar } = clickedCharContext;

  const modalContext = useContext(ModalOpenContext);
  const { isModalOpen, setIsModalOpen } = modalContext;

  const sentinel = useRef(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        charsContext.setLimit((prevState) => prevState + 20);
      }
    });

    intersectionObserver.observe(sentinel.current);

    return () => intersectionObserver.disconnect();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <CardsWrapper isModalOpen={isModalOpen}>
        {characters.map((char) => {
          return (
            <Div
              key={char.id}
              onClick={() => {
                setClickedChar(char);
                setIsModalOpen(true);
              }}
            >
              <div className="image">
                <img src={char.thumbnail.path + '.' + char.thumbnail.extension} />
              </div>
              <div className="title">
                <h1> {char.name} </h1>
              </div>
            </Div>
          );
        })}
        <div className="loading" ref={sentinel}>
          <img src={loadingIcon} style={{ width: '90px', height: '90px' }} />
        </div>
      </CardsWrapper>
    </>
  );
};

const Div = styled.div`
  background-color: white;
  background-position: top center;
  background-size: cover;
  position: relative;

  border-radius: 15px;
  transition: transform 0.3s linear;

  @media (min-width: 1025px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    max-height: 450px;
    height: 100%;
    max-width: 90%;
    width: 100%;
  }
  @media (max-width: 425px) {
    max-height: 250px;
    height: 100%;
    max-width: 100%;

    .image {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      justify-items: center;
      max-height: 170px;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

    .title {
      position: relative;
      display: flex;
      text-align: center;
      justify-content: center;
      font-size: 8px;
      background-color: white;
      border-radius: 0 0 20px 20px;
    }
  }

  hr {
    border: 1px solid #980000;
    width: 100%;
  }
`;
