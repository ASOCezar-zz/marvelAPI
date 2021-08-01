import { FavoritesContext } from './context';
import P from 'prop-types';
import { useEffect, useState } from 'react';

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const [favPressed, setFavPressed] = useState(false);

  useEffect(() => {
    const arrayFav = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      arrayFav.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    setFavorites(arrayFav);
  }, [favPressed]);

  return (
    <FavoritesContext.Provider value={{ favorites, favPressed, setFavPressed }}>{children}</FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: P.node.isRequired,
};
