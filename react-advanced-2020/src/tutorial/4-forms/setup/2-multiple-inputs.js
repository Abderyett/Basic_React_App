/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
  const [people, setPeople] = useState([]);

  const handelChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    //! dynamic object keys
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person };
      setPerson({ firstName: '', email: '', age: '' });
      return setPeople([...people, newPerson]);
    }
  };

  console.log(people);
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handelChange} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" value={person.email} onChange={handelChange} />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input type="age" id="age" name="age" value={person.age} onChange={handelChange} />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((el) => (
          <div className="item" key={uuidv4()}>
            <h4>{el.firstName}</h4>
            <p>{el.email}</p>
          </div>
        ))}
      </article>
    </>
  );
};

export default ControlledInputs;
