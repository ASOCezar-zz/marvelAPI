import { useEffect, useState } from 'react';
import { CharsContext } from './context';
import P from 'prop-types';

export const CharsProvider = ({ children }) => {
  const timestamps = 1627160343;
  const publicKey = 'bcc7616374e3d240e7270653f1b2b599';
  const md5 = '8238c0c73920dc83cfe09aec0b169d26';

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamps}&apikey=${publicKey}&hash=${md5}limit=30`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return <CharsContext.Provider value={{ characters }}>{children}</CharsContext.Provider>;
};

CharsProvider.propTypes = {
  children: P.node.isRequired,
};
