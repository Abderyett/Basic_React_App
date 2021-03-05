import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from './context';

function Submenu() {
  const {
    subMenu,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const { center, bottom } = location;
    const submenu = container.current;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside ref={container} className={`submenu ${subMenu && 'show'}`}>
      <h4>{page}</h4>
    </aside>
  );
}

export default Submenu;
