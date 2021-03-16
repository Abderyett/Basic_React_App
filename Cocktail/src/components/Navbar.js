import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <a href="/">
          The<span>Cocktail</span>DB
        </a>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
