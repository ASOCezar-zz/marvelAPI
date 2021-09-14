import { CharsType } from '../../types/CharsType';
import * as Styled from './styles';

type SearchedCardProps = {
  char: CharsType;
};

export const SearchedCard = ({ char }: SearchedCardProps) => {
  const path = char.thumbnail?.path.replace('http', 'https');

  return (
    <Styled.Wrapper>
      <Styled.ImageDiv>
        <img src={`${path}.${char.thumbnail?.extension}`} />
      </Styled.ImageDiv>
      <Styled.NameDiv>{char.name}</Styled.NameDiv>
      <Styled.DescriptionDiv>{char.description}</Styled.DescriptionDiv>
    </Styled.Wrapper>
  );
};
