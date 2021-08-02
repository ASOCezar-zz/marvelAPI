import { Div } from './style';
import P from 'prop-types';

export const Option = ({ name, image, goto }) => {
  return (
    <a href={goto}>
      <Div>
        <img src={image} />
        <h1> {name} </h1>
      </Div>
    </a>
  );
};

Option.propTypes = {
  name: P.string.isRequired,
  image: P.node.isRequired,
  goto: P.string.isRequired,
};
