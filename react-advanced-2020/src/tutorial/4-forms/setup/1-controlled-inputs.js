/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const person = { firstName, email };
    if (firstName && email) {
      setPeople((prevState) => [...prevState, person]);
      setFirstName('');
      setEmail('');
    } else {
      console.log('Empty String');
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="first-name">Name : </label>
            <input
              type="text"
              id="first-name"
              name="firstName "
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit">Add Preson</button>
        </form>
        {people.map((person) => (
          <div className="item" key={uuidv4()}>
            <h4> {person.firstName}</h4>
            <p> {person.email} </p>
          </div>
        ))}
      </article>
    </>
  );
};

export default ControlledInputs;
