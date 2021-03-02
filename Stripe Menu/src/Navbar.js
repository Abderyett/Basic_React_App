import React, { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import data from './data';
import { useGlobalContext } from './context';
import logoImg from './images/logo.svg';

function Navbar() {
  const { subMenu, openSubmenu, setShowSidebar } = useGlobalContext();
  const showMenu = (e) => {
    const page = e.target;
    const btnPosition = e.target.getBoundingClientRect();
    const center = (btnPosition.left + btnPosition.right) / 2;
    const bottom = btnPosition.bottom - 3;

    openSubmenu(page, { center, bottom });
  };

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logoImg} alt="logo" className="nav-logo" />
          <button type="button" className="btn toggle-btn" onClick={() => setShowSidebar(true)}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          {data.map((el) => (
            <li>
              <button type="button" className="link-btn" onMouseOver={showMenu} onFocus={(e) => console.log('focus')}>
                {el.page}
              </button>
            </li>
          ))}
        </ul>

        <button type="button" className="btn signin-btn">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
