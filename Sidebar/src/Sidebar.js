import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { links, social } from './data';
import logoImg from './logo.svg';
import { useGlobalContext } from './context';

function Sidebar() {
  const { setShowSidebar, showSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar ${showSidebar && 'show-sidebar'}`}>
      <div className="sidebar-header">
        <img src={logoImg} className="logo" alt="logo" />
        <button type="button" className="close-btn" onClick={() => setShowSidebar(false)}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
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
    </aside>
  );
}

export default Sidebar;
