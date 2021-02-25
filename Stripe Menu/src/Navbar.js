import React from 'react';
import { FaBars } from 'react-icons/fa';
import data from './data';
import { useGlobalContext } from './context';
import logoImg from './images/logo.svg';

function Navbar() {
  const { setShowSidebar } = useGlobalContext();
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
              <button type="button" className="link-btn">
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
