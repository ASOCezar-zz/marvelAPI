import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ClickedChar } from '../../contexts/ClickedCharProvider/context';

export const Modal = () => {
  const clickedCharContext = useContext(ClickedChar);
  const { clickedChar } = clickedCharContext;
  const [comics, setComics] = useState({});

  useEffect(() => {
    fetch(
      clickedChar.comics?.items[0].resourceURI +
        '?ts=1627160343&apikey=bcc7616374e3d240e7270653f1b2b599&hash=8238c0c73920dc83cfe09aec0b169d26',
    )
      .then((res) => res.json())
      .then((res) => setComics((c) => [c, res.data.results[0].thumbnail.path]))
      .catch((err) => console.error(err.message));

    fetch(
      clickedChar.comics?.items[1].resourceURI +
        '?ts=1627160343&apikey=bcc7616374e3d240e7270653f1b2b599&hash=8238c0c73920dc83cfe09aec0b169d26',
    )
      .then((res) => res.json())
      .then((res) => setComics((c) => [c, res.data.results[0].thumbnail.path]))
      .catch((err) => console.error(err.message));

    fetch(
      clickedChar.comics?.items[2].resourceURI +
        '?ts=1627160343&apikey=bcc7616374e3d240e7270653f1b2b599&hash=8238c0c73920dc83cfe09aec0b169d26',
    )
      .then((res) => res.json())
      .then((res) => setComics((c) => [c, res.data.results[0].thumbnail.path]))
      .catch((err) => console.error(err.message));
  }, [clickedChar]);

  console.log(comics);

  return (
    <Container>
      <Content>
        <ImageDiv>
          <img src={clickedChar.thumbnail?.path + '.' + clickedChar.thumbnail?.extension} />
        </ImageDiv>
        <h3> {clickedChar.name} </h3>
        <h3> Comics </h3>
        <ComicsContent>
          {comics ? (
            <>
              <img src={comics[0][0][1]?.path + '.' + comics[0]?.png} />
              <img src={comics[1]?.path + '.' + comics[1]?.png} />
            </>
          ) : (
            <></>
          )}
        </ComicsContent>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

  display: none;
  justify-content: center;
  align-items: center;
}
`;

const Content = styled.div`
  background-color: white;
  background-image: linear-gradient(180deg, #980000, white);
  width: 300px;
  height: 500px;
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 12px;
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
