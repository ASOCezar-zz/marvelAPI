import { useEffect, useState } from 'react';
import { CharsContext } from './context';

type CharsProviderProps = {
  children: React.ReactNode;
};

export const CharsProvider = ({ children }: CharsProviderProps) => {
  const timestamps = 1627160343;
  const publicKey = 'bcc7616374e3d240e7270653f1b2b599';
  const md5 = '8238c0c73920dc83cfe09aec0b169d26';

  const [characters, setCharacters] = useState([]);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${timestamps}&apikey=${publicKey}&hash=${md5}&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    )
      .then((res) => res.json())
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.error(err));
  }, [limit]);

  return (
    <CharsContext.Provider value={{ characters, limit, setLimit, timestamps, publicKey, md5 }}>
      {children}
    </CharsContext.Provider>
  );
};
