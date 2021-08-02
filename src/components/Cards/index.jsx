import { useContext } from 'react';
import P from 'prop-types';

import { ClickedCharContext } from '../../contexts/ClickedCharProvider/context';
import { ModalOpenContext } from '../../contexts/ModalOpenProvider/context';
import { CardsWrapper } from '../CardsWrapper/index';
import { Card } from '../Card';

export const Cards = ({ array }) => {
  const clickedCharContext = useContext(ClickedCharContext);
  const { setClickedChar } = clickedCharContext;

  const modalContext = useContext(ModalOpenContext);
  const { isModalOpen, setIsModalOpen } = modalContext;

  return (
    <CardsWrapper isModalOpen={isModalOpen}>
      {array?.map((char) => {
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
    </CardsWrapper>
  );
};

Cards.propTypes = {
  array: P.array.isRequired,
  setLimit: P.func,
};
