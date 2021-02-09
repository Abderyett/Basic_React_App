import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [size, setSize] = useState(window.innerHeight);
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const checkSize = () => {
      const currentSize = window.innerWidth;
      console.log(`current Size is ${currentSize}`);
      return setSize(currentSize);
    };
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, [size]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="nav-header" />
          {size <= 800 && (
            <button type="button" className="nav-toggle" onClick={() => setShowNav(!showNav)}>
              <FaBars />
            </button>
          )}
        </div>
        <div className={showNav ? 'links-container show-container' : 'links-container'}>
          <ul className="links">
            {links.map((el) => {
              const { id, url, text } = el;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((el) => {
            const { id, url, icon } = el;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
