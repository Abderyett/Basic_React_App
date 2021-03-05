import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from './context';

function Submenu() {
  // Global Context
  const {
    subMenu,
    location,
    subPage: { page, links },
  } = useGlobalContext();

  const [columns, setColumns] = useState('col-2');

  // Accessing & manipulating The DOM
  const container = useRef(null);
  // Displaying submenu with Button position
  useEffect(() => {
    setColumns('col-2');
    const { center, bottom } = location;
    const submenu = container.current;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns('col-3');
    }
    if (links.length === 4) {
      setColumns('col-4');
    }
  }, [location, links.length]);

  return (
    <aside ref={container} className={`submenu ${subMenu && 'show'}`}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}

export default Submenu;
