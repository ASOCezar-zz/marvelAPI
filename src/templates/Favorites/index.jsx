import { CardsWrapper } from '../../components/CardsWrapper';
import React, { useContext } from 'react';
import { FavoritesContext } from '../../contexts/FavoritesContext/context';
import { Card } from '../../components/Card';

export const Favorites = () => {
  const favoritesContext = useContext(FavoritesContext);
  const { favorites } = favoritesContext;
  return (
    <CardsWrapper>
      {favorites.map((favorite) => {
        return <Card key={favorite.id} char={favorite} />;
      })}
    </CardsWrapper>
  );
};
