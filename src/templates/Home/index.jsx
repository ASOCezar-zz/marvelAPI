import { Cards } from '../../components/Cards';
import { HeaderMenu } from '../../components/HeaderMenu';
import { CharsProvider } from '../../contexts/CharsProvider/index';
import { ClickedCharProvider } from '../../contexts/ClickedCharProvider/index';

const Home = () => {
  return (
    <CharsProvider>
      <ClickedCharProvider>
        <HeaderMenu />
        <Cards />
      </ClickedCharProvider>
    </CharsProvider>
  );
};

export default Home;
