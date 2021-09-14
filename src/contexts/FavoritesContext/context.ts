import { createContext, Dispatch, SetStateAction } from 'react';
import { CharsType } from '../../types/CharsType';

export type GlobalFavorites = {
  favorites: CharsType[];
  favPressed: boolean;
  setFavPressed: Dispatch<SetStateAction<boolean>>;
};

export const FavoritesContext = createContext<GlobalFavorites>({
  favorites: [],
  favPressed: false,
  setFavPressed: () => false,
});
