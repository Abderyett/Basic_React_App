import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [term, seTterm] = useState('');
  return <AppContext.Provider value={{ term }}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };

AppContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export const UseGlobalContext = () => useContext(AppContext);
