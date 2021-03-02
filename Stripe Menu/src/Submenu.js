import React, { useEffect } from 'react';
import { useGlobalContext } from './context';

function Submenu() {
  const { subMenu } = useGlobalContext();

  return <div className={`submenu ${subMenu && 'show'}`}>submenu</div>;
}

export default Submenu;
