import { useContext } from 'react';
import styled from 'styled-components';

import { CharsContext } from '../../contexts/CharsProvider/context';
import { ClickedCharContext } from '../../contexts/ClickedCharProvider/context';
import { ModalOpenContext } from '../../contexts/ModalOpenProvider/context';
import { CardsWrapper } from '../CardsWrapper/index';

export const Cards = () => {
  const charsContext = useContext(CharsContext);
  const { characters } = charsContext;

  const clickedCharContext = useContext(ClickedCharContext);
  const { setClickedChar } = clickedCharContext;

  const modalContext = useContext(ModalOpenContext);
  const { isModalOpen, setIsModalOpen } = modalContext;

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
              <hr />
              <div className="title">
                <h1> {char.name} </h1>
              </div>
              <div className="content">
                <ul>
                  {char.stories.items[0] ? (
                    <li>
                      <a href={char.stories.items[0].resourceURI}>{char.stories.items[0]?.name}</a>
                    </li>
                  ) : (
                    <p></p>
                  )}
                  {char.stories.items[1] ? (
                    <li>
                      <a href={char.stories.items[1].resourceURI}>{char.stories.items[1].name}</a>
                    </li>
                  ) : (
                    <p></p>
                  )}
                  {char.stories.items[2] ? (
                    <li>
                      <a href={char.stories.items[2].resourceURI}>{char.stories.items[2].name}</a>
                    </li>
                  ) : (
                    <p></p>
                  )}
                </ul>
              </div>
            </Div>
          );
        })}
      </CardsWrapper>
    </>
  );
};

const Div = styled.div`
  background-color: white;
  background-position: top center;
  background-size: cover;

  border-radius: 15px;
  padding: 8px;
  transition: transform 0.3s linear;

  @media (min-width: 680px) {
    height: 450px;
    width: 300px;
    justify-content: normal;
  }

  &:hover {
    transform: scale(1.05);
  }

  img {
    min-height: 100px;
    min-width: 100px;
    max-height: 100px;
    max-width: 100px;

    border-radius: 10px;

    @media (min-width: 680px) {
      min-height: 240px;
      min-width: 240px;
      max-height: 240px;
      max-width: 240px;
      height: 200px;
      width: 200px;
      transition: transform 0.3s linear;
    }
  }

  hr {
    border: 1px solid #980000;
    width: 100%;
  }

  .image {
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    width: 100%;
    margin: 5px;
    display: flex;
    text-align: left;

    font-size: 7pt;
  }

  .content {
    @media (max-width: 450px) {
      display: none;
    }
    width: 100%;
    min-height: 140px;
    max-height: 140px;
    margin: 5px;
    display: flex;
    text-align: left;

    color: #980000;
  }
`;
