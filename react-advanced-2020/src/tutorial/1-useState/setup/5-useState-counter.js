import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        console.log('prevstate', prevState);
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <h2>Regular Counter</h2>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Increment
      </button>
      <button type="button" className="btn" onClick={() => setValue(value - 1)}>
        Decrement
      </button>
      <button type="button" className="btn" onClick={() => setValue(0)}>
        Reset
      </button>
      <hr style={{ 'margin-top': '4rem' }} />
      <section style={{ 'margin-top': '3rem' }}>
        <h2>Complex Counter</h2>
        <h2>{value}</h2>
        <button type="button" className="btn" onClick={complexIncrease}>
          Increment
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
