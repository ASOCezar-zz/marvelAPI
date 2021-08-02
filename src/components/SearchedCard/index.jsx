import P from 'prop-types';
import { DescriptionDiv, ImageDiv, NameDiv, Wrapper } from './style';

export const SearchedCard = ({ char }) => {
  return (
    <Wrapper>
      <ImageDiv>
        <img src={char.thumbnail.path + '.' + char.thumbnail.extension} alt={char.name} />
      </ImageDiv>
      <NameDiv>{char.name}</NameDiv>
      <DescriptionDiv>{char.description}</DescriptionDiv>
    </Wrapper>
  );
};

SearchedCard.propTypes = {
  char: P.array.isRequired,
};
