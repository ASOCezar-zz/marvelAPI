import { FavoritesContext } from './context';
import { useEffect, useState } from 'react';
import { CharsType } from '../../types/CharsType';

type FavoritesProviderProps = {
  children: React.ReactNode;
};

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  // eslint-disable-next-line
  const [favorites, setFavorites] = useState<CharsType[] | any[]>([]);

  const [favPressed, setFavPressed] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    const arrayFav: CharsType[] | any[] = [];
    const keys: string[] = Object.keys(localStorage);
    let i: number = keys.length;

    while (i--) {
      arrayFav.push(JSON.parse(localStorage.getItem(keys[i]) as string));
    }

    setFavorites(arrayFav);
  }, [favPressed]);

  return (
    <FavoritesContext.Provider value={{ favorites, favPressed, setFavPressed }}>{children}</FavoritesContext.Provider>
  );
};
