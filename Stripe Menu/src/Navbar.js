import React from 'react';
import { FaBars } from 'react-icons/fa';
import data from './data';
import { useGlobalContext } from './context';
import logoImg from './images/logo.svg';

function Navbar() {
  const { openSubmenu, setShowSidebar, setSubMenu } = useGlobalContext();
  const showMenu = (e) => {
    const page = e.target.textContent;
    const btnPosition = e.target.getBoundingClientRect();
    const center = (btnPosition.left + btnPosition.right) / 2;
    const { bottom } = btnPosition - 3;

    openSubmenu(page, { center, bottom });
  };
  const hideSubMenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      setSubMenu(false);
    }
  };
  return (
    <nav className="nav" onMouseOver={hideSubMenu} onFocus={() => {}}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logoImg} alt="logo" className="nav-logo" />
          <button type="button" className="btn toggle-btn" onClick={() => setShowSidebar(true)}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          {data.map((el, index) => (
            <li key={index}>
              <button type="button" className="link-btn" onMouseOver={showMenu} onFocus={() => console.log('focus')}>
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
