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
              <div className="nameDescriptionWrapper">
                <div className="title">
                  <h1> {char.name} </h1>
                </div>
                <div className="description">
                  <span>{char.description}</span>
                </div>
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
  cursor: pointer;

  border-radius: 15px;

  .nameDescriptionWrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    background-color: white;
    animation: height 1s linear;
    .description {
      display: none;
    }
  }

  .image {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-items: center;
  }

  @media (min-width: 1025px) {
    height: 100%;
    width: 100%;
    .image {
      height: 300px;
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
    &:hover {
      transform: scale(1.05);
    }
  }
  @media (max-width: 1024px) {
    height: 100%;
    width: 100%;
    .image {
      height: 300px;
      animation: transform 1s linear;
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
      border-radius: 0 0 20px 20px;
    }
    &:hover {
      .image {
        transform: scale(0.95);
      }
      .nameDescriptionWrapper {
        position: absolute;
        height: 200px;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 2;
      }
      .title {
        position: relative;
      }
      .description {
        display: flex;
        text-align: left;
        flex-direction: row;
      }
    }
  }
  @media (max-width: 768px) {
    max-height: 200px;
    height: 100%;
    width: 90%;
    .image {
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
      border-radius: 0 0 20px 20px;
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
      position: absolute;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      text-align: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      font-size: 8px;
      border-radius: 0 0 20px 20px;
      bottom: 0;
      width: 100%;
    }
  }

  hr {
    border: 1px solid #980000;
    width: 100%;
  }
`;
