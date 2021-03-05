import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import data from './data';
import { useGlobalContext } from './context';

function Sidebar() {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  return ReactDOM.createPortal(
    <aside className="Sidebar">
      <div className={`${showSidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
        <aside className="sidebar">
          <button type="button" className="close-btn" onClick={() => setShowSidebar(false)}>
            <FaTimes />
          </button>
          <div className="sidebar-links">
            {data.map((el) => (
              <article key={uuidv4()}>
                <h4>{el.page}</h4>
                <div className="sidebar-sublinks">
                  {el.links.map((link) => (
                    <a href={link.url}>
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </aside>,
    document.querySelector('#modal')
  );
}

export default Sidebar;
