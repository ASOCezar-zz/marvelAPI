import { useContext } from 'react';
import styled from 'styled-components';
import { CharsContext } from '../../contexts/CharsProvider/context';
import { ClickedChar } from '../../contexts/ClickedCharProvider/context';
import { CardsWrapper } from '../CardsWrapper/index';
import { Modal } from '../Modal';

export const Cards = () => {
  const charsContext = useContext(CharsContext);
  const { characters } = charsContext;
  const clickedCharContext = useContext(ClickedChar);
  const { setClickedChar } = clickedCharContext;

  return (
    <>
      <Modal />
      <CardsWrapper>
        {characters.map((char) => {
          return (
            <Div key={char.id} onClick={() => setClickedChar(char)}>
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
                  {char.stories.items[3] ? (
                    <li>
                      <a href={char.stories.items[3].resourceURI}>{char.stories.items[3].name}</a>
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    height: 140px;
    width: 140px;
    border-radius: 10px;

    @media (min-width: 680px) {
      height: 200px;
      width: 200px;
      transition: transform 0.3s linear;
    }
  }

  hr {
    border: 1px solid #980000;
    width: 100%;
  }

  .title {
    width: 100%;
    margin: 5px;
    display: flex;
    text-align: left;

    font-size: 7pt;
  }

  .content {
    width: 100%;
    margin: 5px;
    display: flex;
    text-align: left;

    color: #980000;
  }
`;
