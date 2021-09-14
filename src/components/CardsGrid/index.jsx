import P from 'prop-types';

import * as Styled from './styles';

import { Card } from '../Card';

export const CardsGrid = ({ array, isModalOpen, setIsModalOpen, setClickedChar }) => {
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
  isModalOpen: P.bool.isRequired,
  setIsModalOpen: P.func.isRequired,
  setClickedChar: P.func.isRequired,
};
