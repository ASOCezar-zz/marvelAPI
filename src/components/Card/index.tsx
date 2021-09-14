import { CharsType } from '../../types/CharsType';
import Div from './styles';

export type CardProps = {
  char: CharsType;
  onClick: () => void;
};

export const Card = ({ char, onClick }: CardProps) => {
  const path = char.thumbnail?.path.replace('http', 'https');

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
