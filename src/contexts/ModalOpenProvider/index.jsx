import { ModalOpenContext } from './context';
import P from 'prop-types';
import { useState } from 'react';

export const ModalOpenProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <ModalOpenContext.Provider value={{ isModalOpen, setIsModalOpen }}>{children}</ModalOpenContext.Provider>;
};

ModalOpenProvider.propTypes = {
  children: P.node.isRequired,
};
