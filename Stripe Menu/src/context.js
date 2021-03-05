import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [location, setLocation] = useState({});
  const [subPage, setSubPage] = useState({ page: '', links: [] });

  const openSubmenu = (text, coordinate) => {
    const subLinksData = sublinks.find((link) => link.page === text);
    setSubPage(subLinksData);
    setLocation(coordinate);
    setSubMenu(true);
  };

  return (
    <AppContext.Provider value={{ showSidebar, setShowSidebar, subMenu, openSubmenu, location, subPage, setSubMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

AppProvider.propTypes = PropTypes.element.isRequired;
export { AppContext, AppProvider };
