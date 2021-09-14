import { HeaderMenu } from '../../components/HeaderMenu';
import { useContext, useState } from 'react';
import { FavoritesContext, GlobalFavorites } from '../../contexts/FavoritesContext/context';
import { Modal } from '../../components/Modal';
import { CardsGrid } from '../../components/CardsGrid';
import { CharsType } from '../../types/CharsType';

import homeImg from '../../icons/home.svg';
import contactImg from '../../icons/contact.svg';

export const Favorites = () => {
  const favoritesContext = useContext<GlobalFavorites>(FavoritesContext);
  const { favorites } = favoritesContext;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [clickedChar, setClickedChar] = useState<CharsType | null>(null);

  return (
    <>
      <HeaderMenu
        name={'Favorites'}
        goto={'/'}
        image={homeImg}
        name2="Dev Contact"
        goto2="https://github.com/asocezar"
        image2={contactImg}
      />
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        clickedChar={clickedChar}
        setClickedChar={setClickedChar}
      />
      <CardsGrid
        array={favorites}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setClickedChar={setClickedChar}
      />
    </>
  );
};
