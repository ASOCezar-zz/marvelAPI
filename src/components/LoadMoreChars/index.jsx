import loadingIcon from '../../icons/loading.png';
import { CharsContext } from '../../contexts/CharsProvider/context';
import { useContext, useEffect, useRef } from 'react';
import { Div } from './styles';

export const LoadMoreChars = () => {
  const charsContext = useContext(CharsContext);
  const { setLimit } = charsContext;

  const sentinel = useRef(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setLimit((prevState) => prevState + 20);
      }
    });

    intersectionObserver.observe(sentinel.current);

    return () => intersectionObserver.disconnect();
    //eslint-disable-next-line
  }, []);
  return (
    <Div className="loading" ref={sentinel}>
      <img src={loadingIcon} style={{ width: '90px', height: '90px' }} />
    </Div>
  );
};
