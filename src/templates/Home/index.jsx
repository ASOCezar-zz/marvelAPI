import { Cards } from '../../components/Cards';
import { HeaderMenu } from '../../components/HeaderMenu';
import { Modal } from '../../components/Modal';
import { CharsProvider } from '../../contexts/CharsProvider/index';
import { ClickedCharProvider } from '../../contexts/ClickedCharProvider/index';
import { FavoritesProvider } from '../../contexts/FavoritesContext';
import { ModalOpenProvider } from '../../contexts/ModalOpenProvider/index';

const Home = () => {
  return (
    <ModalOpenProvider>
      <CharsProvider>
        <FavoritesProvider>
          <ClickedCharProvider>
            <HeaderMenu />
            <Modal />
            <Cards />
          </ClickedCharProvider>
        </FavoritesProvider>
      </CharsProvider>
    </ModalOpenProvider>
  );
};

export default Home;
