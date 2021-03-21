import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();
function AppProvider({ children }) {
  const [active, setActive] = useState(false);
  return <AppContext.Provider value={{ active, setActive }}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = PropTypes.element.isRequired;
export { AppProvider, AppContext };
export const useGlobalContext = () => useContext(AppContext);
