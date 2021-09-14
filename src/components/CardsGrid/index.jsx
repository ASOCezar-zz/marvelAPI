import { useContext } from 'react';
import P from 'prop-types';

import { ClickedCharContext } from '../../contexts/ClickedCharProvider/context';
import { ModalOpenContext } from '../../contexts/ModalOpenProvider/context';

import * as Styled from './styles';

import { Card } from '../Card';

export const CardsGrid = ({ array }) => {
  const clickedCharContext = useContext(ClickedCharContext);
  const { setClickedChar } = clickedCharContext;

  const modalContext = useContext(ModalOpenContext);
  const { isModalOpen, setIsModalOpen } = modalContext;

  return (
    <Styled.Container isModalOpen={isModalOpen}>
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
    </Styled.Container>
  );
};

CardsGrid.propTypes = {
  array: P.array.isRequired,
  setLimit: P.func,
};
