import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <a className="logo" href="/">
          The<span>Cocktail</span>DB
        </a>
        <div className="nav-links">
          <Link className="home" to="/">
            Home
          </Link>

          <Link className="about" to="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
