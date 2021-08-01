import { FavoriteIcon } from '../components/FavoriteIcon';
import P from 'prop-types';

export const FavoriteStar = ({ onClick, favPressed }) => {
  return (
    <FavoriteIcon
      onClick={onClick}
      width="52"
      height="46"
      viewBox="0 0 26 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1419 0.951458L13 0.536488L12.8581 0.951458L10.1986 8.72721H1.58732H1.10594L1.50212 9.00066L8.46206 13.8045L5.80465 21.5743L5.65746 22.0046L6.03178 21.7462L13 16.9367L19.9682 21.7462L20.3425 22.0046L20.1954 21.5743L17.5379 13.8045L24.4979 9.00066L24.8941 8.72721H24.4127H15.8014L13.1419 0.951458Z"
        stroke="black"
        strokeWidth="0.3"
        fill={favPressed ? '#FFFF00' : 'none'}
      />
    </FavoriteIcon>
  );
};

FavoriteStar.propTypes = {
  onClick: P.func.isRequired,
  favPressed: P.bool.isRequired,
};
