import { useContext, useState } from 'react';

import { CardsGrid } from '../../components/CardsGrid';
import { HeaderMenu } from '../../components/HeaderMenu';
import { Modal } from '../../components/Modal';
import { FavoritesProvider } from '../../contexts/FavoritesContext';
import { CharsContext, GlobalChars } from '../../contexts/CharsProvider/context';
import { LoadMoreChars } from '../../components/LoadMoreChars';
import { CharsType } from '../../types/CharsType';

import favoritesImg from '../../icons/favorites.svg';
import contactImg from '../../icons/contact.svg';

const Home = () => {
  const charsContext = useContext<GlobalChars>(CharsContext);
  const { characters } = charsContext;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [clickedChar, setClickedChar] = useState<CharsType | null>(null);

  return (
    <FavoritesProvider>
      <HeaderMenu
        name={'Favorites'}
        goto={'/favorites'}
        image={favoritesImg}
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
        array={characters}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setClickedChar={setClickedChar}
      />
      <LoadMoreChars />
    </FavoritesProvider>
  );
};

export default Home;
