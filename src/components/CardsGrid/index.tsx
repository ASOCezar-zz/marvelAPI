import * as Styled from './styles';

import { Card } from '../Card';
import { Dispatch, SetStateAction } from 'react';
import { CharsType } from '../../types/CharsType';

export type CardsGridProps = {
  array: CharsType[];
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setClickedChar: Dispatch<SetStateAction<CharsType | null>>;
};

export const CardsGrid = ({ array, isModalOpen, setIsModalOpen, setClickedChar }: CardsGridProps) => {
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
