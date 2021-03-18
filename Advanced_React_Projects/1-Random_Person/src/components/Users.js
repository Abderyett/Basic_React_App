import React, { useState, useEffect } from 'react';
import { FaUserAlt, FaRegEnvelopeOpen, FaCalendarTimes, FaMap, FaPhone, FaLock } from 'react-icons/fa';

function Users() {
  return (
    <div className="card">
      <div className="img-container">
        <img src="https://randomuser.me/api/portraits/men/24.jpg" alt="user" />
      </div>
      <p>Name</p>
      <h3>Abdel Dubois</h3>
      <div className="icons-container">
        <FaUserAlt className="icon" />
        <FaRegEnvelopeOpen className="icon" />
        <FaCalendarTimes className="icon" />
        <FaMap className="icon" />
        <FaPhone className="icon" />
        <FaLock className="icon" />
      </div>
      <div className="btn">
        <button type="button">Random User</button>
      </div>
    </div>
  );
}

export default Users;
