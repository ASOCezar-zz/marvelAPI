import { useState } from 'react';
import { ClickedChar } from './context';
import P from 'prop-types';

export const ClickedCharProvider = ({ children }) => {
  const [clickedChar, setClickedChar] = useState([]);

  return <ClickedChar.Provider value={{ clickedChar, setClickedChar }}> {children} </ClickedChar.Provider>;
};

ClickedCharProvider.propTypes = {
  children: P.node.isRequired,
};
