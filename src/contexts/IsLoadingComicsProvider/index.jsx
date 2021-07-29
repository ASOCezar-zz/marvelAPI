import { useState } from 'react';
import { IsLoadingComicsContext } from './context';
import P from 'prop-types';

export const IsLoadingComicsProvider = ({ children }) => {
  const [isLoadingComics, setIsLoadingComics] = useState(false);

  return (
    <IsLoadingComicsContext.Provider value={{ isLoadingComics, setIsLoadingComics }}>
      {children}
    </IsLoadingComicsContext.Provider>
  );
};

IsLoadingComicsProvider.propTypes = {
  children: P.node.isRequired,
};
