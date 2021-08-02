import { HeaderMenu } from '../../components/HeaderMenu';
import React, { useContext, useState } from 'react';
import { FavoritesContext } from '../../contexts/FavoritesContext/context';
import { Modal } from '../../components/Modal';
import { Cards } from '../../components/Cards';
import { Option } from '../../components/Option';
import homeImage from '../../icons/home.svg';
import contactImage from '../../icons/contact.svg';

export const Favorites = () => {
  const favoritesContext = useContext(FavoritesContext);
  const { favorites } = favoritesContext;

  // eslint-disable-next-line
  const [limit, setLimit] = useState(favorites.lenght);

  return (
    <>
      <HeaderMenu
        childrenOne={<Option name={'Home'} goto={'/'} image={homeImage} />}
        childrenTwo={<Option name={'Dev Contact'} goto={'https://github.com/asocezar'} image={contactImage} />}
      />
      <Modal />
      <Cards array={favorites} setLimit={setLimit} />
    </>
  );
};
