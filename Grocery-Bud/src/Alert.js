import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

Alert.propTypes = { msg: PropTypes.string, type: PropTypes.string, removeAlert: PropTypes.func };
export default Alert;
