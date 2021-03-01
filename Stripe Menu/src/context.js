import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  return (
    <AppContext.Provider value={{ showSidebar, setShowSidebar, subMenu, setSubMenu }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

AppProvider.propTypes = PropTypes.element.isRequired;
export { AppContext, AppProvider };