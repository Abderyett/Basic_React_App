import React from 'react';
import { FaBars } from 'react-icons/fa';
import Modal from './Modal';

import { useGlobalContext } from './context';

function Home() {
  const { setShowModal, showModal, setShowSidebar } = useGlobalContext();
  return (
    <main>
      <button type="button" className="sidebar-toggle">
        <FaBars onClick={() => setShowSidebar(true)} />
      </button>
      {showModal && <Modal />}
      <button onClick={() => setShowModal(true)} type="button" className="btn">
        show modal
      </button>
    </main>
  );
}

export default Home;
