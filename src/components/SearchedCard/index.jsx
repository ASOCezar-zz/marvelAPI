import P from 'prop-types';
import * as Styled from './styles';

export const SearchedCard = ({ char }) => {
  const path = char.thumbnail.path.replace('http', 'https');

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

SearchedCard.propTypes = {
  char: P.array.isRequired,
};
