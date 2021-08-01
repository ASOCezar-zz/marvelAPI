import { useContext, useEffect, useRef } from 'react';

import { CharsContext } from '../../contexts/CharsProvider/context';
import { ClickedCharContext } from '../../contexts/ClickedCharProvider/context';
import { ModalOpenContext } from '../../contexts/ModalOpenProvider/context';
import { CardsWrapper } from '../CardsWrapper/index';

import loadingIcon from '../../icons/loading.png';
import { Card } from '../Card';

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
    <CardsWrapper isModalOpen={isModalOpen}>
      {characters.map((char) => {
        return (
          <Card
            key={char.id}
            char={char}
            onClick={() => {
              setClickedChar(char);
              setIsModalOpen(true);
            }}
          />
        );
      })}
      <div className="loading" ref={sentinel}>
        <img src={loadingIcon} style={{ width: '90px', height: '90px' }} />
      </div>
    </CardsWrapper>
  );
};
