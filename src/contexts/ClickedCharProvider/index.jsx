import { useState } from 'react';
import { ClickedCharContext } from './context';
import P from 'prop-types';

export const ClickedCharProvider = ({ children }) => {
  const [clickedChar, setClickedChar] = useState([]);

  return (
    <ClickedCharContext.Provider value={{ clickedChar, setClickedChar }}> {children} </ClickedCharContext.Provider>
  );
};

ClickedCharProvider.propTypes = {
  children: P.node.isRequired,
};
