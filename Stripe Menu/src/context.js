import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({});

  const openSubmenu = (text, coordinate) => {
    const subLinksData = sublinks.find((link) => link.page === text);
    setPage(subLinksData);
    setLocation(coordinate);
    setSubMenu(true);
  };

  return (
    <AppContext.Provider value={{ showSidebar, setShowSidebar, subMenu, openSubmenu, location, page }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

AppProvider.propTypes = PropTypes.element.isRequired;
export { AppContext, AppProvider };
