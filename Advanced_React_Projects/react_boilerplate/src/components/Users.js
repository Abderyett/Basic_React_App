import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserAlt, FaRegEnvelopeOpen, FaCalendarTimes, FaMap, FaPhone, FaLock } from 'react-icons/fa';

function Users() {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState('Name');
  const [value, setValue] = useState('John Doe');
  const url = 'https://randomuser.me/api/';
  const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

  const fetchUser = async () => {
    try {
      const response = await axios.get(url);
      const { results } = response.data;
      const { phone: Phone, email: Email } = results[0];
      const { large: image } = results[0].picture;
      const {
        street: { name, number },
      } = results[0].location;
      const { age: Age } = results[0].dob;
      const { first, last } = results[0].name;
      const { password: Password } = results[0].login;
      const newPerson = {
        Phone,
        image,
        Email,
        Street: `${number} ${name}`,
        Age,
        Password,
        Name: `${first} ${last}`,
      };

      setUser(newPerson);
    } catch (error) {
      console.log(error);
    }
  };
  // fetch random user
  const handleUser = () => {
    fetchUser();
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const valueHandler = (e) => {
    // we set this condition to check if we are hovering on the button not the icon
    if (e.target.classList.contains('icon')) {
      // to access the data we use dataset.(following word after data- in our jsx)
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      console.log(user);
      setValue(user[newValue]);
    }
  };

  return (
    <div className="card">
      <div className="img-container">
        <img src={(user && user.image) || defaultImage} alt="user" />
      </div>
      <p>{title}</p>
      <h3>{value}</h3>

      <div className="icons-container">
        <button type="button" className="icon" data-label="Name" onFocus={() => {}} onMouseOver={valueHandler}>
          <FaUserAlt />
        </button>
        <button type="button" className="icon" data-label="Email" onMouseOver={valueHandler} onFocus={() => {}}>
          <FaRegEnvelopeOpen />
        </button>
        <button type="button" className="icon" onMouseOver={valueHandler} onFocus={() => {}} data-label="Age">
          <FaCalendarTimes />
        </button>
        <button type="button" className="icon" data-label="Street" onMouseOver={valueHandler} onFocus={() => {}}>
          <FaMap />
        </button>
        <button type="button" className="icon" data-label="Phone" onMouseOver={valueHandler} onFocus={() => {}}>
          <FaPhone />
        </button>
        <button type="button" className="icon" data-label="Password" onMouseOver={valueHandler} onFocus={() => {}}>
          <FaLock />
        </button>
      </div>
      <div className="btn-container">
        <button type="button" className="btn" onClick={handleUser}>
          Random User
        </button>
      </div>
    </div>
  );
}

export default Users;
