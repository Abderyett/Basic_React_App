import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  return <AppContext.Provider value={{ toggle, setToggle }}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = PropTypes.element.isRequired;

export { AppContext, AppProvider };

export const useGlobalContext = () => useContext(AppContext);
export default AppProvider;
