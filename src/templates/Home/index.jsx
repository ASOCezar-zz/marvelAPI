import { Cards } from '../../components/Cards';
import { HeaderMenu } from '../../components/HeaderMenu';
import { Modal } from '../../components/Modal';
import { CharsProvider } from '../../contexts/CharsProvider/index';
import { ClickedCharProvider } from '../../contexts/ClickedCharProvider/index';
import { ModalOpenProvider } from '../../contexts/ModalOpenProvider/index';
import { IsLoadingComicsProvider } from '../../contexts/IsLoadingComicsProvider';

const Home = () => {
  return (
    <ModalOpenProvider>
      <CharsProvider>
        <ClickedCharProvider>
          <HeaderMenu />
          <IsLoadingComicsProvider>
            <Modal />
            <Cards />
          </IsLoadingComicsProvider>
        </ClickedCharProvider>
      </CharsProvider>
    </ModalOpenProvider>
  );
};

export default Home;
