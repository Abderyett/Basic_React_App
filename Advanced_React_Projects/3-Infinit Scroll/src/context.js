import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();
function AppProvider({ children }) {
  const [active, setActive] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <AppContext.Provider value={{ active, setActive, showDetails, setShowDetails }}>{children}</AppContext.Provider>
  );
}

AppProvider.propTypes = PropTypes.element.isRequired;
export { AppProvider, AppContext };
export const useGlobalContext = () => useContext(AppContext);