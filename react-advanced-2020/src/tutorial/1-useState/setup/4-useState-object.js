import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'jesse', age: 32, message: ' My name is Jesse W James' });
  const messageHandler = () => {
    if (person.message === 'My name is The coward robert Ford') {
      setPerson({ ...person, message: ' My name is Jesse W James', age: 32 });
    } else {
      setPerson({ ...person, message: 'My name is The coward robert Ford', age: 62 });
    }
  };

  return (
    <>
      <h2> age: {person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" type="button" onClick={messageHandler}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
