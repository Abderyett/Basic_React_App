import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('k');
  const [greet, setGreet] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const toggleHandler = () => {
    if (greet) {
      return setGreet(false);
    }
    setGreet(true);
  };

  return (
    <>
      {/* <h2>{firstValue}</h2>
      <h2> Value :{secondValue}</h2> */}
      <h1>{text || 'John Doe'}</h1>
      {text && <h1>Hidden Content</h1>}

      <button className="btn" type="button" onClick={toggleHandler}>
        Toggle
      </button>
      {greet && <h2>Hello my Goergus freinds</h2>}
      {greet ? <h1>Hey There!</h1> : <h1>Goodbye!</h1>}
    </>
  );
};

export default ShortCircuit;
