import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(url);
    setUsers(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((el) => {
          const { id, login, avatar_url, html_url } = el;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
