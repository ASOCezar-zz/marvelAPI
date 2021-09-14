import { Div } from './styles';
import P from 'prop-types';

export const Card = ({ char, onClick }) => {
  const path = char.thumbnail.path.replace('http', 'https');

  return (
    <Div key={char.id} onClick={onClick}>
      <div className="image">
        <img src={`${path}.${char.thumbnail?.extension}`} />
      </div>
      <div className="nameDescriptionWrapper">
        <div className="title">
          <h1> {char.name} </h1>
        </div>
        <div className="description">
          <span>{char.description}</span>
        </div>
      </div>
    </Div>
  );
};

Card.propTypes = {
  char: P.array.isRequired,
  onClick: P.func.isRequired,
};
