/* eslint-disable camelcase */
import React from 'react';
import { useGlobalContext } from './context';

function Card() {
  const { people, first, second } = useGlobalContext();

  return (
    <div className="card-container">
      {people.slice(first, second).map((user) => {
        const { login, html_url, avatar_url, id } = user;

        return (
          <div className="card" key={id}>
            <img src={avatar_url} alt={login} />
            <div className="card-footer">
              <h3> {login} </h3>
              <button type="button" className="btn" _blank="true">
                <a href={html_url}> View Profile</a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
