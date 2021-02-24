import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <AppContext.Provider value={{ showModal, setShowModal, showSidebar, setShowSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

AppProvider.propTypes = PropTypes.element;

export { AppContext, AppProvider };
